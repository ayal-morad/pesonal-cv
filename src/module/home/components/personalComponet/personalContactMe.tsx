import { useCallback } from "react";

import { Button, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useNavigate } from "react-router-dom";

export function PersonalContactMe() {
  const navigate = useNavigate();

  const handleNavigation = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-row gap-4">
        <Button
          variant="contained"
          sx={{ textTransform: "none" }}
          onClick={handleNavigation}
        >
          Hire me
        </Button>
      </div>

      <div className="flex flex-row mt-2">
        <a
          href="https://www.linkedin.com/in/ayal-morad-8b2451336/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton>
            <LinkedInIcon color="secondary" />
          </IconButton>
        </a>
        <a
          href="https://github.com/ayal-morad"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton>
            <GitHubIcon color="secondary" />
          </IconButton>
        </a>
      </div>
    </div>
  );
}
