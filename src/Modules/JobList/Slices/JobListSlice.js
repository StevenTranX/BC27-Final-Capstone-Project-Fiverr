import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import jobListAPI from '../../../Apis/jobListAPI';

export const getJobGenres = createAsyncThunk(
  'jobDetail/ getJob',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await jobListAPI.getJobGenres();
      return data.content;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const jobListSlice = createSlice({
  name: 'jobList',
  initialState: {
    currentJobs: [],
    settings: {},
  },
  reducers: {},
  extraReducers: {
    [getJobGenres.fulfilled]: (state, action) => {
      state.currentJobs = action.payload;
    },
  },
});
const { actions, reducer } = jobListSlice;
// export const { logout } = actions;
export default reducer;
