import { configureStore } from '@reduxjs/toolkit';
import authSlice from './TranTrongTin-Authentication/slices/authSlice';
const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});
export default store;
