import { Typography } from "@mui/material";
import { Title } from "../../../components";

export function Database() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Title title="Database Management" />
      <div className="flex flex-col items-start w-1/2">
        {/* Core Database Types */}
        <div className="flex flex-col items-start">
          <Typography variant="h4" color="primary">
            Core Database Types
          </Typography>
          <div className="flex flex-row justify-center items-center">
            <Typography variant="h5" color="secondary" textAlign="center">
              .
            </Typography>
            <Typography variant="body1" color="secondary">
              &nbsp;Relational Databases: PostgreSQL, MySQL, Neo4j
            </Typography>
          </div>
          <div className="flex flex-row justify-center items-center">
            <Typography variant="h5" color="secondary" textAlign="center">
              .
            </Typography>
            <Typography variant="body1" color="secondary">
              &nbsp;Non-Relational Databases: MongoDB, Firebase
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
