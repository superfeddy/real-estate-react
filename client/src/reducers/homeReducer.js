// External Dependencies
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Internal Dependencies
import API_HOMES_URL from "../constants/url";
import fetchStatus from "../constants/types";

const initialState = {
  homes: [],
  currentHome: {},
  status: fetchStatus.IDLE,
};

// fetch all homes asyncthunk
export const fetchHomes = createAsyncThunk("fetchHomes", async () => {
  const res = await axios.get(API_HOMES_URL);
  return res.data;
});

// fetch home data by id asyncthunk
export const fetchHomeById = createAsyncThunk("fechHomeById", async (id) => {
  const res = await axios.get(`${API_HOMES_URL}/${id}`);
  return res.data;
});

// filter homes asyncthunk
export const filterHomes = createAsyncThunk("filterHomes", async (query) => {
  const res = await axios.get(`${API_HOMES_URL}/filter?${query}`);
  return res.data;
});

const homeSlice = createSlice({
  name: "homes",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchHomes.pending, (state) => {
        // waiting for feching homes
        state.status = fetchStatus.LOADING;
      })
      .addCase(fetchHomes.fulfilled, (state, action) => {
        // succeed in fetching homes
        state.status = fetchStatus.COMPLETED;
        state.homes = action.payload.data;
      })
      .addCase(fetchHomes.rejected, (state) => {
        // fail to fetch homes
        state.status = fetchStatus.FAILED;
      })
      .addCase(fetchHomeById.pending, (state) => {
        // waiting for feching home by id
        state.status = fetchStatus.LOADING;
      })
      .addCase(fetchHomeById.fulfilled, (state, action) => {
        // succeed in fetching home by id
        state.status = fetchStatus.COMPLETED;
        state.currentHome = action.payload.data;
      })
      .addCase(fetchHomeById.rejected, (state) => {
        // fail to fetch home by id
        state.status = fetchStatus.FAILED;
      })
      .addCase(filterHomes.pending, (state) => {
        // waiting for filtering homes
        state.status = fetchStatus.LOADING;
      })
      .addCase(filterHomes.fulfilled, (state, action) => {
        // succeed in filtering homes
        state.status = fetchStatus.COMPLETED;
        state.homes = action.payload.data;
      })
      .addCase(filterHomes.rejected, (state) => {
        // fail to filter homes
        state.status = fetchStatus.FAILED;
      });
  },
});

export default homeSlice.reducer;
