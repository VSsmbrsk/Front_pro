import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE_API_URL = "https://swapi.py4e.com/api/";

export const fetchData = createAsyncThunk(
  "swapi/fetchData",
  async (endpoint, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_API_URL}${endpoint}`);
      if (!response.ok) {
        throw new Error("Request failed");
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const swapiSlice = createSlice({
  name: "swapi",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearData(state) {
      state.data = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearData } = swapiSlice.actions;
export default swapiSlice.reducer;
