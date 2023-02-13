import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user/userReducer';

export const store = configureStore({
  reducer: {
    user: userReducer
  }
});
