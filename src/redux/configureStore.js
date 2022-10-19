import { configureStore } from '@reduxjs/toolkit';
import greetingSlice from './greetings/greetings';

const store = configureStore({
  reducer: greetingSlice,
});

export default store;
