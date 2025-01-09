import { ThemeOptions } from "@mui/material";
import { create } from "zustand";
import { darkTheme, lightTheme } from "../themes";

export type ThemeStore = {
  theme: ThemeOptions;
  toggleTheme: () => void;
};

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: darkTheme,
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme.palette?.mode === "light" ? darkTheme : lightTheme,
    })),
}));
