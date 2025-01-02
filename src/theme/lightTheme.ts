import { createTheme } from "@mui/material";
import colors from "tailwindcss/colors";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: colors.blue[400],
    },
    background: {
      default: colors.white,
    },
  },
});
