import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getGreetingThunk = createAsyncThunk(
  '/greeting/getGreeting',
  async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/v1/greeting');
      return res;
    } catch (err) {
      throw new Error(err);
    }
  },
);

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: 'Hello',
  reducers: {},
  extraReducers: {
    [getGreetingThunk.fulfilled]: (state, { payload }) => payload.data.message,
  },
});

export default greetingSlice.reducer;
