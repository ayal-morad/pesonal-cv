import { Button, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export function PersonalContactMe() {
  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-row gap-4">
        <Button variant="contained" sx={{ textTransform: "none" }}>
          Hire me
        </Button>
        <Button variant="outlined" sx={{ textTransform: "none" }}>
          Blog
        </Button>
      </div>

      <div className="flex flex-row mt-2">
        <IconButton>
          <InstagramIcon color="secondary" />
        </IconButton>
        <IconButton>
          <LinkedInIcon color="secondary" />
        </IconButton>
        <IconButton>
          <GitHubIcon color="secondary" />
        </IconButton>
      </div>
    </div>
  );
}
