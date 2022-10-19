import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { NULL } from 'sass';
import userAPI from '../../../Apis/userAPI';
export const updateUser = createAsyncThunk(
  'user/update',
  async (userData, { rejectWithValue, dispatch }) => {
    try {
      const { id } = userData;
      const { data } = await userAPI.updateUser(userData);
      console.log(userData);
      dispatch(getUser(id));
    } catch (error) {
      console.log(error);
      rejectWithValue(error);
    }
  }
);
export const getUser = createAsyncThunk(
  'user/get',
  async (userId, { rejectWithValue }) => {
    try {
      const { data } = await userAPI.getUser(userId);
      console.log('test data returned', data);
      localStorage.setItem('user', JSON.stringify(data.content));
      return data.content;
    } catch (error) {
      console.log(error.response.data.content);
    }
  }
);
export const getBookingJobs = createAsyncThunk(
  'user/bookingJobs',
  async (_, { rejectWithValue }) => {
    const token = localStorage.getItem('access_token');
    try {
      const { data } = await userAPI.getBookingJobs();
      return data.content;
    } catch (error) {
      rejectWithValue(error);
      console.log(error);
    }
  }
);
const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: JSON.parse(localStorage.getItem('user')) || {},
    settings: {},
    userBookingJobs: null,
  },
  reducers: {},
  extraReducers: {
    [getUser.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
    [getBookingJobs.fulfilled]: (state, action) => {
      state.userBookingJobs = action.payload;
    },
  },
});
export default userSlice.reducer;
