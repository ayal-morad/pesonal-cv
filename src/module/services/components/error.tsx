import { Typography } from "@mui/material";

export function Error() {
  return (
    <div className="flex flex-1 flex-col justify-center items-center">
      <Typography variant="h4" color="primary">
        Error
      </Typography>
      <Typography variant="caption" color="secondary">
        failed to reseve this page
      </Typography>
    </div>
  );
}
