import { ThemeProvider } from "@mui/material";

import { Home } from "./module";
import { useThemeStore } from "./theme";

function App() {
  const { theme } = useThemeStore();

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
