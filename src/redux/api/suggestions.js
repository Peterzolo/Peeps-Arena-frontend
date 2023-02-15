import { createAsyncThunk } from '@reduxjs/toolkit';
// import { Utils } from '@services/utils/utilsService';
import { userSerevice } from '@services/APIs/user/userService';

const getUserSuggestions = createAsyncThunk('user/getSuggestions', async (name, { dispatch }) => {
  try {
    const response = await userSerevice.getUserSuggestions();
    console.log('RESPONSE', response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    // Utils.dispatchNotification(error.response.data.message, 'error', dispatch);
  }
});

export { getUserSuggestions };
