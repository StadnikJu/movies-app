import { Header, Routing } from "@/common/components";
import styles from "./App.module.css";
import { useAppSelector } from "@/common/hooks";
import { selectThemeMode } from "../model/app-slice";
import { Box, Container, CssBaseline, ThemeProvider } from "@mui/material";
import { getTheme } from "@/common/theme";

function App() {
  const themeMode = useAppSelector(selectThemeMode);
  const theme = getTheme(themeMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={styles.app} sx={{ backgroundColor: "background.default", color: "text.primary" }}>
        <Header />
        <Container maxWidth="lg" disableGutters sx={{ mt: 3 }}>
          <main>
            <Routing />
          </main>
        </Container> 
      </Box>
    </ThemeProvider>
  );
}

export default App;

