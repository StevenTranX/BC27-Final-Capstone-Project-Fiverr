import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authAPI from '../../Apis/authApi';
export const registerUser = createAsyncThunk(
  'auth/register',
  async (signupData, { rejectWithValue }) => {
    try {
      const { data } = await authAPI.register(signupData);
      // localStorage.setItem('accessToken');
      localStorage.setItem('user', JSON.stringify(data.content));
      console.log(data);
      return data.content;
    } catch (error) {
      console.log(error.response.data.content);
      rejectWithValue(error);
    }
  }
);
export const loginUser = createAsyncThunk(
  'auth/register',
  async (loginData, { rejectWithValue }) => {
    try {
      const { data } = await authAPI.login(loginData);

      localStorage.setItem('user', JSON.stringify(data.content.user));
      localStorage.setItem('access_token', JSON.stringify(data.content.token));
      console.log(data);
      return data.content.user;
    } catch (error) {
      console.log(error.response.data.content);
      throw error.response.data.content;
    }
  }
);
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    currentUser: JSON.parse(localStorage.getItem('user')) || {},
    settings: {},
  },
  reducers: {
    logout(state) {
      state.currentUser = {};
      localStorage.removeItem('user');
      localStorage.removeItem('access_token');
    },
  },
  extraReducers: {
    [registerUser.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});
const { actions, reducer } = authSlice;
export const { logout } = actions;
export default reducer;
