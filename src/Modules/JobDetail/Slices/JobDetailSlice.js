import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import jobDetailAPI from '../../../Apis/jobDetailAPI';

export const getJobGenres = createAsyncThunk(
  'jobDetail/ getJob',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await jobDetailAPI.getJobGenres();
      return data.content;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const jobDetailSlice = createSlice({
  name: 'jobDetail',
  initialState: {
    currentJob: [],
    settings: {},
  },
  reducers: {},
  extraReducers: {
    [getJobGenres.fulfilled]: (state, action) => {
      state.currentJob = action.payload;
    },
  },
});
const { actions, reducer } = jobDetailSlice;
// export const { logout } = actions;
export default reducer;
