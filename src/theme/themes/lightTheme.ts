import { createTheme } from "@mui/material";
import colors from "tailwindcss/colors";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: colors.blue[400],
    },
    secondary: {
      main: colors.gray[800],
    },
    background: {
      default: colors.white,
      paper: "rgba(39, 165, 221, 0.8)",
    },
    text: {
      primary: colors.gray[800],
      secondary: colors.gray[200],
    },
  },
});
