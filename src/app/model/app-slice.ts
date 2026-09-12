import { createSlice } from "@reduxjs/toolkit";

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
  },
  selectors: {
    selectThemeMode: (state) => state.themeMode,
  },
  reducers: (create) => ({
    changeThemeModeAC: create.reducer<{ themeMode: ThemeMode }>((state, action) => {
      state.themeMode = action.payload.themeMode;
    })
  }),
});

export const { selectThemeMode } = appSlice.selectors;
export const { changeThemeModeAC } = appSlice.actions;
export const appReducer = appSlice.reducer;

export type ThemeMode = "dark" | "light";
