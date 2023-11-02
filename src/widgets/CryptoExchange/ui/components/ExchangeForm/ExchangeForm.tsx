import React, { useState } from "react";
import { Grid } from "@mui/material";
import TextField from "shared/ui/TextField/TextField";
import CryptoTextField from "features/CryptoTextField/CryptoTextField";
import Button from "shared/ui/Button/Button";

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
  const [selectOption, setSelectOption] = useState({
    label: "BTC",
    value: "BTC",
    icon: "/icons/btc.svg",
  });

  const [textFieldValue, setTextFieldValue] = useState("");

  return (
    <Grid container spacing={4} alignItems="flex-end">
      <Grid item xs={12}>
        <Grid container spacing={3.5} alignItems="center">
          <Grid item xs>
            <CryptoTextField
              options={OPTIONS}
              selectOption={selectOption}
              setSelectOption={setSelectOption}
              textFieldValue={textFieldValue}
              setTextFieldValue={setTextFieldValue}
            />
          </Grid>
          <Grid item xs={2}>
            IconButton
          </Grid>
          <Grid item xs>
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
      <Grid item xs>
        <TextField label="Your Ethereum address" onChange={(e) => console.log(e.target.value)} />
      </Grid>
      <Grid item xs={2.9}>
        <Button fullWidth>Exchange</Button>
      </Grid>
    </Grid>
  );
};

export default ExchangeForm;
