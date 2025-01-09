import { Box } from "@mui/material";

import { useThemeStore } from "../../../../theme";
import { PersonalPhoto } from "./personalPhoto";
import { PersonalSpeatch } from "./personalSpeatch";

export function PersonalProfile() {
  const { theme } = useThemeStore();

  return (
    <Box
      className="w-full flex justify-between items-center"
      sx={{
        backgroundImage: `radial-gradient(circle at bottom left, ${theme.palette?.background?.paper} 0%, rgba(39, 165, 221, 0) 70%)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom left",
        backgroundSize: "350px 350px",
        borderBottom: `2px`,
        borderColor: theme.palette?.background?.paper ?? "black",
      }}
    >
      <div className="w-1/4 h-full"></div>
      <PersonalSpeatch />
      <PersonalPhoto />
      <div className="w-1/4 h-full"></div>
    </Box>
  );
}
