import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
  name: "error",
  initialState: {
    message: null as string | null,
  },
  selectors: {
    selectErrorMessage: (state) => state.message
  },
  reducers: {
    setErrorAC: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    clearErrorAC: (state) => {
      state.message = null;
    },
  },
});

export const { selectErrorMessage } = errorSlice.selectors;
export const { setErrorAC, clearErrorAC } = errorSlice.actions;
export const errorReducer = errorSlice.reducer;