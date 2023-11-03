import React, { useState } from "react";
import { Autocomplete, Grid, IconButton } from "@mui/material";
import TextField from "shared/ui/TextField/TextField";
import CryptoTextField from "features/CryptoTextField/CryptoTextField";
import Button from "shared/ui/Button/Button";
import Swap from "shared/icons/Swap";
import { useExchangeFormStyles } from "./ExchangeFormStyles";


export const OPTIONS = [
  {
    label: "BTC Bitcoin",
    value: "BTC",
    icon: "/icons/btc.svg",
  },
  {
    label: "ETH Ethereum",
    value: "ETH",
    icon: "/icons/eth.svg",
  },
  {
    label: "XMR Monero",
    value: "XMR",
    icon: "/icons/xmr.svg",
  },
  {
    label: "LTC Litecoin",
    value: "LTC",
    icon: "/icons/ltc.svg",
  },
];

const ExchangeForm = () => {
  const { classes } = useExchangeFormStyles()

  const [selectOption, setSelectOption] = useState({
    label: "BTC",
    value: "BTC",
    icon: "/icons/btc.svg",
  });

  const [textFieldValue, setTextFieldValue] = useState("");

  return (
    <Grid container spacing={{xs: 6, md: 4}}>
      <Grid item xs={12}>
        <Grid container spacing={{xs: 1, md:3}} alignItems="center" justifyContent='flex-end'>
          <Grid item xs={12} md>
            <CryptoTextField
              options={OPTIONS}
              selectOption={selectOption}
              setSelectOption={setSelectOption}
              textFieldValue={textFieldValue}
              setTextFieldValue={setTextFieldValue}
            />
          </Grid>
          <Grid item >
            <IconButton className={classes.iconButton}>
              <Swap />
            </IconButton>
          </Grid>
          <Grid item xs={12} md>
            <CryptoTextField
              options={OPTIONS}
              selectOption={selectOption}
              setSelectOption={setSelectOption}
              textFieldValue={textFieldValue}
              setTextFieldValue={setTextFieldValue}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={{xs: 2, md:4}} alignItems="flex-end">
          <Grid item xs={12} sm>
            <TextField label="Your Ethereum address" onChange={(e) => console.log(e.target.value)} />
          </Grid>
          <Grid item xs={12} sm={3.2} md={2.9}>
            <Button fullWidth>Exchange</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ExchangeForm;
