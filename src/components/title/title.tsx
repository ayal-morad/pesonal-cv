import { Typography } from "@mui/material";

export function Title({ title }: { title: string }) {
  return (
    <div className="my-4 w-full flex justify-center items-center">
      <Typography variant="h4" color="secondary">
        {title}
      </Typography>
    </div>
  );
}
