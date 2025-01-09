import { createTheme } from "@mui/material";
import colors from "tailwindcss/colors";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: colors.neutral[800],
      paper: "rgba(39, 165, 221, 0.3)",
    },
    primary: {
      main: colors.blue[500],
    },
    secondary: {
      main: colors.gray[200],
    },
  },
});
