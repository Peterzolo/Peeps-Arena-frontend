import { ThemeProvider } from 'styled-components';

import React from 'react';
import { themeStyles } from './theme';

// eslint-disable-next-line react/prop-types
export const Theme = ({ children }) => {
  return <ThemeProvider theme={themeStyles}>{children}</ThemeProvider>;
};
