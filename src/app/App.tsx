import './styles/globalStyles.css';
import { CryptoExchange } from "../widgets/CryptoExchange";

import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
  app: {
    height: '100vh'
  }
}));

function App() {
  const { classes } = useStyles();

  return (
    <div className={classes.app}>
       <CryptoExchange />
    </div>


  );
}

export default App;




 {/* <ThemeProvider theme={theme}>
        <Routes>
          <Route
            path={'/'}
            element={(
              <CryptoExchange />
            )}
          />
        </Routes>
      </ThemeProvider> */}