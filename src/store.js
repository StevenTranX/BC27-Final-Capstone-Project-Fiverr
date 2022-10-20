import { configureStore } from '@reduxjs/toolkit';
import userProfileSlice from './Modules/UserProfile/Slices/userProfileSlice';
import authSlice from './TranTrongTin-Authentication/slices/authSlice';
import jobListSlice from './Modules/JobList/Slices/JobListSlice';
const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userProfileSlice,
    jobList: jobListSlice,
  },
});
export default store;
