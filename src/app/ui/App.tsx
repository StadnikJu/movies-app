import { Header, Routing } from "@/common/components";
import styles from "./App.module.css";
import { useAppSelector } from "@/common/hooks";
import { selectThemeMode } from "../model/app-slice";
import { Box,  CssBaseline, ThemeProvider } from "@mui/material";
import { getTheme } from "@/common/theme";

function App() {
  const themeMode = useAppSelector(selectThemeMode);
  const theme = getTheme(themeMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={styles.app} sx={{ backgroundColor: "background.default", color: "text.primary" }}>
        <Header />
        <Box  component="main" sx={{ width: "100%" }}>
          <main>
            <Routing />
          </main>
        </Box> 
      </Box>
    </ThemeProvider>
  );
}

export default App;

