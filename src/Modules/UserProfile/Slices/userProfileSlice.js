import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userAPI from "../../../Apis/userAPI";
export const updateUser = createAsyncThunk(
  "user/update",
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
  "user/get",
  async (userId, { rejectWithValue }) => {
    try {
      const { data } = await userAPI.getUser(userId);
      localStorage.setItem("user", JSON.stringify(data.content));
      return data.content;
    } catch (error) {
      console.log(error.response.data.content);
    }
  }
);
export const getBookingJobs = createAsyncThunk(
  "user/bookingJobs",
  async (_, { rejectWithValue }) => {
    const token = localStorage.getItem("access_token");
    try {
      const { data } = await userAPI.getBookingJobs();
      return data.content;
    } catch (error) {
      rejectWithValue(error);
      console.log(error);
    }
  }
);
export const deleteBookingJob = createAsyncThunk(
  "jobList/deleteBookingJob",
  async (jobId, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await userAPI.deleteBookingJob(jobId);
      dispatch(getBookingJobs());
      return data.message;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
export const bookJob = createAsyncThunk(
  "user/bookJob",
  async (info, { rejectWithValue }) => {
    try {
      const { data } = await userAPI.bookJob(info);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: JSON.parse(localStorage.getItem("user")) || {},
    settings: {
      isLoading: false,
      error: false,
      message: "",
    },
    userBookingJobs: [],
  },
  reducers: {},
  extraReducers: {
    [getUser.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
    [getBookingJobs.fulfilled]: (state, action) => {
      state.userBookingJobs = action.payload;
      state.settings.isLoading = false;
    },
    [getBookingJobs.pending]: (state, action) => {
      state.settings.isLoading = true;
    },
    [getBookingJobs.rejected]: (state, action) => {
      state.settings.error = true;
    },
    [bookJob.pending]: (state, action) => {
      state.settings.isLoading = true;
    },
    [bookJob.fulfilled]: (state, action) => {
      state.settings.isLoading = false;
    },
    [bookJob.rejected]: (state, action) => {
      state.settings.error = true;
    },
    [deleteBookingJob.fulfilled]: (state, action) => {
      state.settings.message = action.payload;
      state.settings.isLoading = false;
    },
    [deleteBookingJob.pending]: (state, action) => {
      state.settings.isLoading = true;
    },
    [deleteBookingJob.rejected]: (state, action) => {
      state.settings.isLoading = false;
    },
  },
});
export default userSlice.reducer;
