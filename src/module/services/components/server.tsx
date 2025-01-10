import { Typography } from "@mui/material";
import { Title } from "../../../components";

export function Server() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Title title="Back-End Developmet" />
      <div className="flex flex-col items-start w-1/2">
        {/* Frameworks */}
        <div className="flex flex-col items-start">
          <Typography variant="h4" color="primary">
            Framworks
          </Typography>
          <div className="flex flex-row justify-center items-center">
            <Typography variant="h5" color="secondary" textAlign="center">
              .
            </Typography>
            <Typography variant="body1" color="secondary">
              &nbsp;NestJs
            </Typography>
          </div>
          <div className="flex flex-row justify-center items-center">
            <Typography variant="h5" color="secondary" textAlign="center">
              .
            </Typography>
            <Typography variant="body1" color="secondary">
              &nbsp;ExpressJs
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
              &nbsp;Database Management
            </Typography>
          </div>
          <div className="flex flex-row justify-center items-center">
            <Typography variant="h5" color="secondary" textAlign="center">
              .
            </Typography>
            <Typography variant="body1" color="secondary">
              &nbsp;API Development
            </Typography>
          </div>
          <div className="flex flex-row justify-center items-center">
            <Typography variant="h5" color="secondary" textAlign="center">
              .
            </Typography>
            <Typography variant="body1" color="secondary">
              &nbsp; Back-End Optimization
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
              &nbsp; Back-End Security
            </Typography>
          </div>
          <div className="flex flex-row justify-center items-center">
            <Typography variant="h5" color="secondary" textAlign="center">
              .
            </Typography>
            <Typography variant="body1" color="secondary">
              &nbsp; Microservices Architecture
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
