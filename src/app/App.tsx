import './styles/globalStyles.css';
import { CryptoExchange } from "../widgets/CryptoExchange";

import { makeStyles  } from 'tss-react/mui';
import Axios from 'axios';
import { configure } from 'axios-hooks';

export const useStyles = makeStyles()(() => ({
  app: {
    height: '100vh'
  }
}));

export const axiosClient = Axios.create({
  baseURL: 'https://api.changenow.io/v1/',
});

configure({ axios: axiosClient });

function App() {
  const { classes } = useStyles();

  return (
    <div className={classes.app}>
       <CryptoExchange />
    </div>
  );
}

export default App;
