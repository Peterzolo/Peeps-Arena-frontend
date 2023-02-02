import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Theme } from './components/theme/ThemeProvider';
import { AppRouter } from './routes';

const App = () => {
  return (
    <div style={{ backgroundColor: '#f0f0f0' }}>
      <Theme>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </Theme>
    </div>
  );
};

export default App;
