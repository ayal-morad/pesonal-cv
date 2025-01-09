import { useCallback, useState } from "react";
import { darkTheme, lightTheme } from "../theme";

export const useTheme = () => {
  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  }, []);

  return { theme, toggleTheme };
};
