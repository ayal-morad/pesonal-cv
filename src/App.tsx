import { Button, ThemeProvider } from "@mui/material";

import { useTheme } from "./hooks/useTheme";
import { TopAppBar } from "./components";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          background: theme.palette.background.default,
          height: "100vh",
        }}
      >
        <TopAppBar
          toggleTheme={toggleTheme}
          theme={theme.palette.mode === "dark" ? "dark" : "light"}
        />
        <Button variant="outlined" color="primary" onClick={toggleTheme}>
          change theem
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
