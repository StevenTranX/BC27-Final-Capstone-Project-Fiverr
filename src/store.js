import { configureStore } from '@reduxjs/toolkit';
import userProfileSlice from './Modules/UserProfile/Slices/userProfileSlice';
import authSlice from './TranTrongTin-Authentication/slices/authSlice';
import jobDetailSlice from './Modules/JobDetail/Slices/JobDetailSlice';
const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userProfileSlice,
    jobDetail: jobDetailSlice,
  },
});
export default store;
