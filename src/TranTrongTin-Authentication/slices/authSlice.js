import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authAPI from '../../Apis/authApi';
export const registerUser = createAsyncThunk(
  'auth/register',
  async (signupData, { rejectWithValue }) => {
    try {
      const data = await authAPI.register(signupData);
      // localStorage.setItem('accessToken');
      localStorage.setItem('user', JSON.stringify(data.content));
      return data.content;
    } catch (error) {
      console.log(error);
      rejectWithValue(error);
    }
  }
);
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    current: {},
    settings: {},
  },
  reducers: {},
  extraReducers: {
    [registerUser.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

export default authSlice.reducer;