import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useThemeStore } from "../../theme";

export function TopAppBar() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "transparent" }}>
        <Toolbar className="gap-4">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {`<AM />`}
          </Typography>

          <Typography variant="h6" component="div">
            about
          </Typography>

          <Typography variant="h6" component="div">
            services
          </Typography>

          <Typography variant="h6" component="div">
            projects
          </Typography>

          <Typography variant="h6" component="div">
            contact
          </Typography>

          <IconButton color="inherit" onClick={toggleTheme}>
            {theme.palette?.mode === "light" ? (
              <LightModeIcon />
            ) : (
              <DarkModeIcon />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
