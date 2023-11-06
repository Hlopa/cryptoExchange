import React, { useState, useEffect, memo, useCallback } from "react";
import { Box, CircularProgress, Grid, IconButton, Typography } from "@mui/material";
import TextField from "shared/ui/TextField/TextField";
import CryptoTextField from "features/CryptoTextField/CryptoTextField";
import Button from "shared/ui/Button/Button";
import Swap from "shared/icons/Swap";
import { useExchangeFormStyles } from "./ExchangeFormStyles";
import useAxios from "axios-hooks";
import { CryptoOptionType } from "types/Crypto";


const api_key = process.env.API_KEY;

const ExchangeForm = memo(() => {
  const { classes } = useExchangeFormStyles();

  const [optionsList, setOptionsList] = useState<CryptoOptionType[]>([]);
  const [minExchangeAmount, setMinExchangeAmount] = useState<string>('');
  const [exchangeAmount, setExchangeAmount] = useState<string>('');
  const [estimatedExchangeAmount, setEstimatedExchangeAmount] = useState<string>('');
  const [email, setEmail] = useState<string>('')

  const [errorMessage, setErrorMessage] = useState<string>('');
  const [amountError, setAmountError] = useState<string>('')

  const [selectOptionLeft, setSelectOptionLeft] = useState<CryptoOptionType>({
    label: "Bitcoin",
    value: "btc",
    icon: "/icons/btc.svg",
  });

  const [selectOptionRight, setSelectOptionRight] = useState<CryptoOptionType>({
    label: "Ethereum",
    value: "eth",
    icon: "/icons/eth.svg",
  });


  const [{ loading, error }, getOptionsList] = useAxios(`currencies?active=true&fixedRate=true`, { manual: true });

  const [{ loading: exchangeMinAmountLoading, error: exchangeMinAmountError }, getMinExchangeAmount] = useAxios(`min-amount/${selectOptionLeft.value}_${selectOptionRight.value}`, { manual: true });

  const [{ loading: estimateExchangeAmountLoading, error: estimateExchangeAmountError }, getEstimateExchangeAmount] = useAxios(`exchange-amount/${exchangeAmount}/${selectOptionLeft.value}_${selectOptionRight.value}`, { manual: true });


  useEffect(() => {
    getOptionsList().then((data) => setOptionsList(data.data.map((item) => (
      {
        label: `${item.ticker} ${item.name}`,
        value: item.ticker,
        icon: item.image
      }
    ))))
  }, []);


  useEffect(() => {
    getMinExchangeAmount({
      params: {
        api_key: api_key
      }
    }).then((data) => handleSettleExchangeAmount(data.data.minAmount)).catch((e) => {
      if (e.response?.data?.error === 'pair_is_inactive') {
        setErrorMessage('This pair is disabled now')
      }
    })
  }, [selectOptionLeft, selectOptionRight])

  useEffect(() => {
    if (!exchangeAmount) {
      setEstimatedExchangeAmount("-");
    } else if (exchangeAmount >= minExchangeAmount) {
      getEstimateExchangeAmount({
        params: {
          api_key: api_key
        }
      }).then((data) => handleEstimateAmount(data.data.estimatedAmount)).catch((e) => {
        if (e.response?.data?.error === 'deposit_too_small') {
          setAmountError(`Minimum amount ${selectOptionLeft.value.toUpperCase()} is ${minExchangeAmount}`)
          setEstimatedExchangeAmount("-")
        }
      })
    } else {
      setAmountError(`Minimum amount ${selectOptionLeft.value.toUpperCase()} is ${minExchangeAmount}`)
      setEstimatedExchangeAmount("-")
    }
  }, [exchangeAmount, minExchangeAmount])


  const handleSwapTickers = useCallback(() => {
    setSelectOptionLeft(selectOptionRight);
    setSelectOptionRight(selectOptionLeft);
    setAmountError('')
  }, [selectOptionRight, selectOptionLeft]);

  const handleEstimateAmount = useCallback((amount: string | number) => {
    setEstimatedExchangeAmount(amount.toString());
    setAmountError('')
  }, []);

  const handleSettleExchangeAmount = useCallback((amount: string | number) => {
    setMinExchangeAmount(amount.toString());
    setExchangeAmount(amount.toString())
  }, [])


  if (error) {
    return <Typography>Something went wrong. Try again</Typography>
  }

  if (estimateExchangeAmountError || exchangeMinAmountError) {
    setExchangeAmount('0');
    setEstimatedExchangeAmount('-');
    setAmountError('Something went wrong. Try again')
  }

  if (loading || (!exchangeAmount && !minExchangeAmount && !estimatedExchangeAmount)) {
    return (
      <Box
        height={'300px'}
        display='flex'
        alignItems='center'
        justifyContent='center'
      >
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Grid container spacing={{ xs: 6, md: 4 }}>
      <Grid item xs={12}>
        <Grid container spacing={{ xs: 1, md: 3 }} alignItems="center" justifyContent='flex-end'>
          <Grid item xs={12} md>
            <CryptoTextField
              options={optionsList}
              selectOption={selectOptionLeft}
              setSelectOption={setSelectOptionLeft}
              textFieldValue={exchangeAmount}
              setTextFieldValue={setExchangeAmount}
              errorMessage={amountError}
              setErrorMessage={setAmountError}
              loading={exchangeMinAmountLoading}
            />
          </Grid>
          <Grid item >
            <IconButton className={classes.iconButton} onClick={handleSwapTickers}>
              <Swap />
            </IconButton>
          </Grid>
          <Grid item xs={12} md>
            <CryptoTextField
              options={optionsList}
              selectOption={selectOptionRight}
              setSelectOption={setSelectOptionRight}
              textFieldValue={estimatedExchangeAmount}
              setTextFieldValue={setEstimatedExchangeAmount}
              loading={estimateExchangeAmountLoading}
              setErrorMessage={setAmountError}
              readOnly
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={{ xs: 2, md: 4 }} alignItems="flex-end">
          <Grid item xs={12} sm>
            <TextField label="Your Ethereum address" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Grid>
          <Grid item xs={12} sm={3.2} md={2.9}>
            <Button fullWidth errorMessage={errorMessage}>Exchange</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
});

export default ExchangeForm;
