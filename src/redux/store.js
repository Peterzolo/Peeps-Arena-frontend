import { configureStore } from '@reduxjs/toolkit';
import userReducer from '@redux/reducers/user/userReducer';
import suggestionsReducers from '@redux/reducers/sugestions/suggestionsReducers';

export const store = configureStore({
  reducer: {
    user: userReducer,
    suggestions: suggestionsReducers
  }
});
