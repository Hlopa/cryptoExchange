import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
  cryptoExchange:{
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(10),
  },
  cryptoExchangeInner:{
    display: 'flex',
    width: '100%',
    maxWidth: 960
  }
}));