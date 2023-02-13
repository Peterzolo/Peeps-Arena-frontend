import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
  profile: null
};

const userSlice = createSlice({
  name: 'user',
  initialState
  reducers :{
    addUser : (state, action) =>{
const {token, profile} = action.payload
  }
});
