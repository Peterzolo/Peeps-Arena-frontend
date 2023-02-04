import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Theme } from './components/theme/ThemeProvider';
import { AppRouter } from './routes';
import './App.scss';
const App = () => {
  return (
    <div>
      <Theme>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </Theme>
    </div>
  );
};

export default App;
