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
export const getJobsById = createAsyncThunk(
  'jobList/getJobsById',
  async (jobId, { rejectWithValue }) => {
    try {
      const { data } = await jobListAPI.getJobById(jobId);
      return data.content;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
export const getJobDetailById = createAsyncThunk(
  'jobList/getJobDetailById',
  async (jobId, { rejectWithValue }) => {
    try {
      const { data } = await jobListAPI.getJobDetailById(jobId);
      return data.content;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
export const getJobCommentById = createAsyncThunk(
  'jobList/getJobCommentById',
  async (jobId, { rejectWithValue }) => {
    try {
      const { data } = await jobListAPI.getJobCommentById(jobId);
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
    jobById: {},
    jobDetailById: [],
    jobCommentById: [],
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
      state.settings.isLoading = false;
    },
    [getJobsByName.rejected]: (state) => {
      state.settings.isLoading = false;
      state.settings.error = true;
    },
    [getJobsById.fulfilled]: (state, action) => {
      state.jobsByName = action.payload;
      state.settings.isLoading = false;
    },
    [getJobsById.pending]: (state, action) => {
      state.settings.isLoading = true;
    },
    [getJobsById.rejected]: (state) => {
      state.settings.isLoading = false;
      state.settings.error = true;
    },
    [getJobDetailById.fulfilled]: (state, action) => {
      state.jobDetailById = action.payload;
      state.settings.isLoading = false;
    },
    [getJobDetailById.pending]: (state, action) => {
      state.settings.isLoading = true;
    },
    [getJobDetailById.rejected]: (state) => {
      state.settings.isLoading = false;
      state.settings.error = true;
    },
    [getJobCommentById.fulfilled]: (state, action) => {
      state.jobCommentById = action.payload;
      state.settings.isLoading = false;
    },
  },
});
const { actions, reducer } = jobListSlice;
// export const { logout } = actions;
export default reducer;
