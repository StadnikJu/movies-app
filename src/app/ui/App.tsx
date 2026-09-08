import { Footer, Header, Routing } from "@/common/components";
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
      <Box className={styles.app} sx={{ backgroundColor: "background.default", color: "text.primary", display: "flex", flexDirection: "column" }}>
        <Header />
        <Box  component="main" sx={{ width: "100%", flexGrow: 1 }}>
          <Routing />
        </Box> 
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;

