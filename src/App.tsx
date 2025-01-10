import { ThemeProvider } from "@mui/material";

import { useThemeStore } from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./module/about";
import { Service, Services } from "./module/services";
import { Home } from "./module/home";

function App() {
  const { theme } = useThemeStore();

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          {/* default page */}
          <Route path="/" element={<Home />} />

          {/* other pages */}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />

          {/* services realated pages */}
          <Route path="/services/:id" element={<Service />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
