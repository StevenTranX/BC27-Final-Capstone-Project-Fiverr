import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import jobListAPI from '../../../Apis/jobListAPI';

export const getJobGenres = createAsyncThunk(
  'jobList/getJobGenre',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await jobListAPI.getJobGenres();
      return data.content;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const getJobs = createAsyncThunk(
  'jobList/getJobs',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await jobListAPI.getJobs();
      return data.content;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
export const getJobsByName = createAsyncThunk(
  'jobList/getJobsByName',
  async (name, { rejectWithValue }) => {
    try {
      const { data } = await jobListAPI.getJobsByName(name);
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
    jobsByName: [],
    settings: {
      isLoading: false,
      error: false,
    },
    jobCards: [],
  },
  reducers: {},
  extraReducers: {
    [getJobGenres.fulfilled]: (state, action) => {
      state.currentJobs = action.payload;
    },
    [getJobs.fulfilled]: (state, action) => {
      state.jobCards = action.payload;
    },
    [getJobsByName.pending]: (state) => {
      state.settings.isLoading = true;
    },
    [getJobsByName.fulfilled]: (state, action) => {
      state.jobsByName = action.payload;
    },
    [getJobsByName.rejected]: (state) => {
      state.settings.error = true;
    },
  },
});
const { actions, reducer } = jobListSlice;
// export const { logout } = actions;
export default reducer;
