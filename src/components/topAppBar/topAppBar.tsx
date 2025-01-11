import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useThemeStore } from "../../theme";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export function TopAppBar() {
  const { theme, toggleTheme } = useThemeStore();
  const navigate = useNavigate();

  const handelNavigation = useCallback(
    (path: string) => {
      navigate(path);
    },
    [navigate]
  );

  return (
    <Box>
      <AppBar position="static" sx={{ background: "transparent" }}>
        <Toolbar className="gap-4 ">
          <Typography
            variant="h6"
            sx={{ flexGrow: 1 }}
            className="cursor-pointer"
            onClick={() => handelNavigation("/")}
          >
            {`<AM />`}
          </Typography>

          <Typography
            variant="h6"
            className="cursor-pointer"
            onClick={() => handelNavigation("/about")}
          >
            about
          </Typography>

          <Typography
            variant="h6"
            className="cursor-pointer"
            onClick={() => handelNavigation("/services")}
          >
            services
          </Typography>

          <Typography
            variant="h6"
            className="cursor-pointer"
            onClick={() => handelNavigation("/contact")}
          >
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
