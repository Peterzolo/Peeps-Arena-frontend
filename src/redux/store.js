import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user/userReducer';

export const store = configureStore({
  reducers: {
    user: userReducer
  }
});
