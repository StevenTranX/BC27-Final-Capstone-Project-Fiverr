import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
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
      localStorage.setItem('user', JSON.stringify(data.content));
      localStorage.setItem('access_token', JSON.stringify(data.content.token));
      return data;
    } catch (error) {
      console.log(error.response.data.content);
    }
  }
);
const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: JSON.parse(localStorage.getItem('user')) || {},
    settings: {},
  },
  reducers: {},
  extraReducers: {
    [getUser.fulfilled]: (state, action) => {
      state.current.user = action.payload;
    },
  },
});
export default userSlice.reducer;
