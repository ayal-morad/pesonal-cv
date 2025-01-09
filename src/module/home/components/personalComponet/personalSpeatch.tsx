import { Typography } from "@mui/material";
import { PersonalContactMe } from "./personalContactMe";

export function PersonalSpeatch() {
  return (
    <div className="w-full">
      <Typography variant="h6" color="secondary">
        Hi, I'm
      </Typography>
      <Typography variant="h6" className="font-bold" color="primary">
        Ayal morad
      </Typography>
      <Typography variant="h4" color="secondary">
        Full Stack Developer
      </Typography>
      <Typography variant="h6" color="secondary">
        software practical engineer
      </Typography>
      <Typography variant="caption" color="secondary">
        I am a freelance developer based in Majdal Shams, Golan Heights,
        specializing in web, mobile, and server-side application development.
      </Typography>

      <div className="mt-4" />
      <PersonalContactMe />
    </div>
  );
}
