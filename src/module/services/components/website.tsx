import { Typography } from "@mui/material";
import { Title } from "../../../components";

export function Website() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Title title="Website" />
      <div className="flex flex-col items-start w-1/2">
        {/* Front-End Development */}
        <div className="flex flex-col items-start">
          <Typography variant="h4" color="primary">
            Front-End Development
          </Typography>
          <div className="flex flex-row justify-center items-center">
            <Typography variant="h5" color="secondary" textAlign="center">
              .
            </Typography>
            <Typography variant="body1" color="secondary">
              &nbsp;HTML, CSS, and JavaScript
            </Typography>
          </div>
          <div className="flex flex-row justify-center items-center">
            <Typography variant="h5" color="secondary" textAlign="center">
              .
            </Typography>
            <Typography variant="body1" color="secondary">
              &nbsp;React
            </Typography>
          </div>
          <div className="flex flex-row justify-center items-center">
            <Typography variant="h5" color="secondary" textAlign="center">
              .
            </Typography>
            <Typography variant="body1" color="secondary">
              &nbsp;Angular
            </Typography>
          </div>
        </div>

        {/* CSS Libraries */}
        <div className="flex flex-col items-start">
          <Typography variant="h4" color="primary">
            CSS Libraries
          </Typography>
          <div className="flex flex-row justify-center items-center">
            <Typography variant="h5" color="secondary" textAlign="center">
              .
            </Typography>
            <Typography variant="body1" color="secondary">
              &nbsp;Tailwind CSS
            </Typography>
          </div>
          <div className="flex flex-row justify-center items-center">
            <Typography variant="h5" color="secondary" textAlign="center">
              .
            </Typography>
            <Typography variant="body1" color="secondary">
              &nbsp;Material-UI
            </Typography>
          </div>
          <div className="flex flex-row justify-center items-center">
            <Typography variant="h5" color="secondary" textAlign="center">
              .
            </Typography>
            <Typography variant="body1" color="secondary">
              &nbsp;Bootstrap
            </Typography>
          </div>
        </div>

        {/* Core Skills */}
        <div className="flex flex-col items-start">
          <Typography variant="h4" color="primary">
            Core Skills
          </Typography>
          <div className="flex flex-row justify-center items-center">
            <Typography variant="h5" color="secondary" textAlign="center">
              .
            </Typography>
            <Typography variant="body1" color="secondary">
              &nbsp;Git GitHub GitFlow Branching/Merging
            </Typography>
          </div>
          <div className="flex flex-row justify-center items-center">
            <Typography variant="h5" color="secondary" textAlign="center">
              .
            </Typography>
            <Typography variant="body1" color="secondary">
              &nbsp;API Integration and Management
            </Typography>
          </div>
          <div className="flex flex-row justify-center items-center">
            <Typography variant="h5" color="secondary" textAlign="center">
              .
            </Typography>
            <Typography variant="body1" color="secondary">
              &nbsp; Web Performance Optimization
            </Typography>
          </div>
          <div className="flex flex-row justify-center items-center">
            <Typography variant="h5" color="secondary" textAlign="center">
              .
            </Typography>
            <Typography variant="body1" color="secondary">
              &nbsp; Testing and Debugging
            </Typography>
          </div>
          <div className="flex flex-row justify-center items-center">
            <Typography variant="h5" color="secondary" textAlign="center">
              .
            </Typography>
            <Typography variant="body1" color="secondary">
              &nbsp; Web Security
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
