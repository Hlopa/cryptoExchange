import ReactDOM from 'react-dom/client';
import App from './app/App';
import { ThemeProvider } from '@mui/material';
import { theme } from './app/styles/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  // </BrowserRouter>,
);
