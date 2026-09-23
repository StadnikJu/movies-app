import { ErrorSnackBar, Footer, Header, Routing, ScrollToTop } from "@/common/components";
import styles from "./App.module.css";
import { useAppSelector } from "@/common/hooks";
import { selectStatus, selectThemeMode } from "../model/app-slice";
import { Box,  CssBaseline, LinearProgress, ThemeProvider } from "@mui/material";
import { getTheme } from "@/common/theme";

function App() {
  const themeMode = useAppSelector(selectThemeMode);
  const status = useAppSelector(selectStatus);
  const theme = getTheme(themeMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={styles.app} sx={{ backgroundColor: "background.default", color: "text.primary", display: "flex", flexDirection: "column" }}>
        <Header />
        <ScrollToTop />
        {status === "loading" && <LinearProgress />}
        <Box  component="main" sx={{ width: "100%", flexGrow: 1 }}>
          <Routing />
        </Box> 
        <Footer />
        <ErrorSnackBar />
      </Box>
    </ThemeProvider>
  );
}

export default App;
