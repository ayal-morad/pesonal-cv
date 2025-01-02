import { createTheme } from "@mui/material";
import colors from "tailwindcss/colors";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: colors.neutral[800],
    },
    primary: {
      main: colors.blue[500],
    },
  },
});
