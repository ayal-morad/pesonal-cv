import { Typography } from "@mui/material";
import { useThemeStore } from "../../../theme";

export default function PersonalSpeatch() {
  const { theme } = useThemeStore();

  return (
    <div className="w-full">
      <Typography
        variant="h6"
        // color={theme.palette?.secondary?.main}
      >
        Hi, I'm
      </Typography>
      <Typography
        variant="h6"
        className="font-bold"
        // color={theme.palette?.primary?.main}
      >
        Ayal morad
      </Typography>
    </div>
  );
}
