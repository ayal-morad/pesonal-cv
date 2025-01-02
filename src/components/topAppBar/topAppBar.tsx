import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export function TopAppBar({
  toggleTheme,
  theme,
}: {
  toggleTheme: () => void;
  theme: string;
}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {`<AM/>`}
          </Typography>

          <IconButton color="inherit" onClick={toggleTheme}>
            {theme === "light" ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
