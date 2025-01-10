import { Typography } from "@mui/material";
import { Title } from "../../../components";

export function Programing() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Title title="Programing" />
      <div className="flex flex-col items-start w-1/2">
        {/* Programing langueges */}
        <div className="flex flex-col items-start">
          <Typography variant="h4" color="primary">
            Programing languages
          </Typography>
          <div className="flex flex-row justify-center items-center">
            <Typography variant="h5" color="secondary" textAlign="center">
              .
            </Typography>
            <Typography variant="body1" color="secondary">
              &nbsp;Java
            </Typography>
          </div>
          <div className="flex flex-row justify-center items-center">
            <Typography variant="h5" color="secondary" textAlign="center">
              .
            </Typography>
            <Typography variant="body1" color="secondary">
              &nbsp;Java Script/Type Script
            </Typography>
          </div>
          <div className="flex flex-row justify-center items-center">
            <Typography variant="h5" color="secondary" textAlign="center">
              .
            </Typography>
            <Typography variant="body1" color="secondary">
              &nbsp;C#
            </Typography>
          </div>
          <div className="flex flex-row justify-center items-center">
            <Typography variant="h5" color="secondary" textAlign="center">
              .
            </Typography>
            <Typography variant="body1" color="secondary">
              &nbsp;C
            </Typography>
          </div>
          <div className="flex flex-row justify-center items-center">
            <Typography variant="h5" color="secondary" textAlign="center">
              .
            </Typography>
            <Typography variant="body1" color="secondary">
              &nbsp;C++
            </Typography>
          </div>
          <div className="flex flex-row justify-center items-center">
            <Typography variant="h5" color="secondary" textAlign="center">
              .
            </Typography>
            <Typography variant="body1" color="secondary">
              &nbsp;Python
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
              &nbsp;Object-Oriented Programming (OOP)
            </Typography>
          </div>
          <div className="flex flex-row justify-center items-center">
            <Typography variant="h5" color="secondary" textAlign="center">
              .
            </Typography>
            <Typography variant="body1" color="secondary">
              &nbsp;Problem Solving
            </Typography>
          </div>
          <div className="flex flex-row justify-center items-center">
            <Typography variant="h5" color="secondary" textAlign="center">
              .
            </Typography>
            <Typography variant="body1" color="secondary">
              &nbsp;Data Structures
            </Typography>
          </div>
          <div className="flex flex-row justify-center items-center">
            <Typography variant="h5" color="secondary" textAlign="center">
              .
            </Typography>
            <Typography variant="body1" color="secondary">
              &nbsp;Algorithms
            </Typography>
          </div>
          <div className="flex flex-row justify-center items-center">
            <Typography variant="h5" color="secondary" textAlign="center">
              .
            </Typography>
            <Typography variant="body1" color="secondary">
              &nbsp;Code Optimization
            </Typography>
          </div>
          <div className="flex flex-row justify-center items-center">
            <Typography variant="h5" color="secondary" textAlign="center">
              .
            </Typography>
            <Typography variant="body1" color="secondary">
              &nbsp;Docker Containers
            </Typography>
          </div>
        </div>

        {/* Version Control */}
        <div className="flex flex-col items-start">
          <Typography variant="h4" color="primary">
            Version Control
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
              &nbsp;BitBucket
            </Typography>
          </div>
        </div>

        {/* Frameworks */}
        <div className="flex flex-col items-start">
          <Typography variant="h4" color="primary">
            Frameworks and Libraries
          </Typography>
          <div className="flex flex-row justify-center items-center">
            <Typography variant="h5" color="secondary" textAlign="center">
              .
            </Typography>
            <Typography variant="body1" color="secondary">
              &nbsp;Java : Swing , Spring , OkHTTP3
            </Typography>
          </div>
          <div className="flex flex-row justify-center items-center">
            <Typography variant="h5" color="secondary" textAlign="center">
              .
            </Typography>
            <Typography variant="body1" color="secondary">
              &nbsp;JS/TS : React, Angular, Vite, Ionic, React Native-Expo,
              Refine, NestJs, ExpressJs, Selenium, Nodemailer, React Query ....
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
