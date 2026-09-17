import type { RequestStatus } from "@/common/types/types";
import { createSlice, isFulfilled, isPending, isRejected } from "@reduxjs/toolkit";

const getInitialTheme = (): ThemeMode => {
  const savedTheme = localStorage.getItem("themeMode");

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return "dark";
};

export const appSlice = createSlice({
  name: "app",
  initialState: {
    themeMode: getInitialTheme(),
    status: "idle" as RequestStatus,
  },
  selectors: {
    selectThemeMode: (state) => state.themeMode,
    selectStatus: (state) => state.status,
  },
  reducers: (create) => ({
    changeThemeModeAC: create.reducer<{ themeMode: ThemeMode }>((state, action) => {
      state.themeMode = action.payload.themeMode;
    }),
    changeStatusAC: create.reducer<{ status: RequestStatus }>((state, action) => {
      state.status = action.payload.status;
    }),
  }),
  extraReducers: (builder) => {
    builder
      .addMatcher(isPending(), (state) => {
        state.status = "loading";
      })
      .addMatcher(isFulfilled(), (state, _action) => {
        state.status = "succeeded";
      })
      .addMatcher(isRejected(), (state, _action) => {
        state.status = "failed";
      });
  },
});

export const { selectThemeMode, selectStatus } = appSlice.selectors;
export const { changeThemeModeAC, changeStatusAC } = appSlice.actions;
export const appReducer = appSlice.reducer;

export type ThemeMode = "dark" | "light";
