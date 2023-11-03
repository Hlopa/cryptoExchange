import {Box,  Grid } from "@mui/material";
import { useStyles } from "./styles";
import Header from "./components/Header/Header";
import ExchangeForm from "./components/ExchangeForm/ExchangeForm";


export const CryptoExchange = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.cryptoExchange}>
      <Box className={classes.cryptoExchangeInner}>
        <Grid container spacing={7.5}>
           <Grid item xs={12}>
              <Header/>
            </Grid> 
           <Grid item xs={12}>
              <ExchangeForm/>
            </Grid> 
        </Grid>
      </Box>
    </Box>
    
  )
}