import { useCallback } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ServicesPages } from "./types";

export function ServicesCard({
  serviceName,
  imagePath,
  service,
}: {
  serviceName: string;
  imagePath: string;
  service: ServicesPages;
}) {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    // handle the click event
    navigate("/services/" + service);
  }, [service]);

  return (
    <div
      className="flex flex-col cursor-pointer h-full w-full"
      onClick={() => handleClick()}
    >
      <img
        src={imagePath}
        alt="programingServicePhoto"
        className="w-full h-full object-cover rounded-t-lg"
      />
      <Box
        className="flex justify-center items-center rounded-b-lg"
        bgcolor="secondary.main"
      >
        <Typography color="text.secondary">{serviceName}</Typography>
      </Box>
    </div>
  );
}
