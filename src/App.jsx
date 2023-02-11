import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Theme } from './components/theme/ThemeProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppRouter } from './routes';
import '@root/App.scss';
const App = () => {
  return (
    <div>
      <Theme>
        <BrowserRouter>
          <ToastContainer />
          <AppRouter />
        </BrowserRouter>
      </Theme>
    </div>
  );
};

export default App;
