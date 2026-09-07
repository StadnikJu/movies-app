import type { ThemeMode } from "@/app/model/app-slice";
import { createTheme } from "@mui/material/styles";

export const getTheme = (themeMode: ThemeMode) => {
  const isLight = themeMode === "light";

  return createTheme({
    palette: {
      mode: themeMode,
      primary: {
        main: isLight ? "#4f47e6" : "#4f47e6",
      },
      secondary: {
        main: isLight ? "#d97706" : "#ffb703",
      },

      background: {
        default: isLight ? "#ffffff" : "#0b1120",
        paper: isLight ? "#f3f4f6" : "#131c2c",
      },
      text: {
        primary: isLight ? "#131c2c" : "#ffffff",
      },
      divider: isLight ? "rgba(27, 25, 25, 0.3)" : "rgba(255, 255, 255, 0.3)",
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundImage: "none", 
            backgroundColor: isLight ? "#eae6ec" : "#131c2c", 
          },
        },
      },
    },
  });
};