import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Theme } from './components/theme/ThemeProvider';
import { AppRouter } from './routes';

const App = () => {
  return (
    <>
      <Theme>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </Theme>
    </>
  );
};

export default App;
