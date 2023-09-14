import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { WeatherData } from "../models/Wheather";
import axios from "axios";

interface WeatherState {
  wheatherData: WeatherData;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: WeatherState = {
  wheatherData: {
    location: { name: "", country: "" },
    current: {
      pressure_in: 0,
      cloud: 0,
      humidity: 0,
      temp_c: 0,
      wind_kph: 0,
      condition: { text: "", icon: "", code: 0 },
    },
    forecast: { forecastday: [] },
  },
  error: null,
  status: "idle",
};

const apiKey = import.meta.env.VITE_API_KEY;
export const fetchWheather: any = createAsyncThunk(
  "jobs/fetchJobs",
  async (searchTerm: any = "Baku", thunkApi) => {
    try {
      const response = await axios.get<WeatherData>(
        `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${searchTerm}`
      );
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const wheatherSlice = createSlice({
  name: "wheather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWheather.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchWheather.fulfilled,
        (state, action: PayloadAction<WeatherData>) => {
          state.status = "succeeded";
          state.wheatherData = action.payload;
        }
      )
      .addCase(fetchWheather.rejected, (state, action: PayloadAction<any>) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default wheatherSlice.reducer;
