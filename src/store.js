import { configureStore } from '@reduxjs/toolkit';
import userProfileSlice from './Modules/UserProfile/Slices/userProfileSlice';
import authSlice from './TranTrongTin-Authentication/slices/authSlice';
const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userProfileSlice,
  },
});
export default store;
