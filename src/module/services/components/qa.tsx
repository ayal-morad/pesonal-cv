import { Typography } from "@mui/material";
import { Title } from "../../../components";

export function Qa() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Title title="QA Testing" />
      <div className="flex justify-center items-center w-1/2">
        <Typography variant="body1" color="secondary">
          I have hands-on experience testing with MSTest for .NET applications
          and Jest for JavaScript applications, as well as conducting manual
          testing for mobile applications to ensure functionality, usability,
          and performance across different devices and platforms.
        </Typography>
      </div>
    </div>
  );
}
