import { Box, Typography } from "@mui/material";

import { useThemeStore } from "../../../../theme";
import { useCallback } from "react";

export function Contact() {
  const { theme } = useThemeStore();

  const handleCopyPhoneNumber = useCallback(() => {
    navigator.clipboard
      .writeText("+972522284787")
      .then(() => {
        alert("Phone number is copied!");
      })
      .catch(() => {
        alert("Failed to copy phone number!");
      });
  }, []);

  const handleCopyEmail = useCallback(() => {
    navigator.clipboard
      .writeText("ayal.morad1@gmail.com")
      .then(() => {
        alert("Email is copied!");
      })
      .catch(() => {
        alert("Failed to copy email!");
      });
  }, []);

  return (
    <Box
      sx={{
        borderColor: theme.palette?.background?.paper ?? "black",
        backgroundColor: theme.palette?.background?.default ?? "white",
      }}
      className="w-fulll border-t-2"
    >
      <div className="flex flex-row items-center justify-between p-4">
        <div className="w-1/6" />

        {/* my logo */}
        <div className="flex flex-col items-center justify-center">
          <Typography variant="h4" color="secondary">
            {"<AM />"}
          </Typography>
          <Typography variant="caption" color="secondary">
            open to work
          </Typography>
        </div>

        {/* phone number information */}
        <div
          className="flex flex-col items-start justify-center cursor-pointer"
          onClick={handleCopyPhoneNumber}
        >
          <Typography variant="h6" color="secondary">
            Phone number
          </Typography>

          <Typography variant="caption" color="secondary">
            call +972 522284787
          </Typography>
        </div>

        {/* email information */}
        <div
          className="flex flex-col items-start justify-center cursor-pointer"
          onClick={handleCopyEmail}
        >
          <Typography variant="h6" color="secondary">
            Email
          </Typography>

          <Typography variant="caption" color="secondary">
            mail ayal.morad1@gmail.com
          </Typography>
        </div>

        {/* address information */}
        <div className="flex flex-col items-start justify-center">
          <Typography variant="h6" color="secondary">
            Address
          </Typography>

          <Typography variant="caption" color="secondary">
            Majdal shams, Golan heights
          </Typography>
        </div>

        <div className="w-1/6" />
      </div>
    </Box>
  );
}
