import { Box, Typography } from "@mui/material";

import { useThemeStore } from "../../../../theme";

import { ServicesCard } from "./servicesCard";
import { Title } from "../../../../components";

import programingServicePhoto from "../../../../assets/programing service.jpg";
import webApplicationServicePhoto from "../../../../assets/web application service.webp";
import mobileApplicationServicePhoto from "../../../../assets/mobile application service.png";
import serverApplicationServicePhoto from "../../../../assets/server application service.webp";
import databaseManigmentServicePhoto from "../../../../assets/databae service.png";
import qaTestingServicePhoto from "../../../../assets/qa testing.png";
import { ServicesPages } from "./types";

export function Services() {
  const { theme } = useThemeStore();

  return (
    <Box
      sx={{
        backgroundImage: `radial-gradient(circle at top left, ${theme.palette?.background?.paper} 0%, rgba(39, 165, 221, 0) 70%)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top left",
        backgroundSize: "350px 350px",
        borderBottom: `2px`,
        borderColor: theme.palette?.background?.paper ?? "black",
        backgroundColor: theme.palette?.background?.default ?? "white",
      }}
      className="w-full flex-1  border-t-2"
    >
      {/* services title */}
      <Title title="Services" />

      {/* description */}
      <Typography color="secondary" className="self-center justify-self-center">
        over the years I have honed many skils and this is where I'am shearing
        theme
      </Typography>

      {/* service line 1 */}
      <div className="flex flex-row">
        <div className="w-1/4" />
        <div className="flex flex-col justify-between items-center w-full gap-2 md:flex-row">
          <ServicesCard
            serviceName="programing"
            imagePath={programingServicePhoto}
            service={ServicesPages.PROGRAMING}
          />
          <ServicesCard
            serviceName="web application"
            imagePath={webApplicationServicePhoto}
            service={ServicesPages.WEBSITE}
          />
          <ServicesCard
            serviceName="mobile application"
            imagePath={mobileApplicationServicePhoto}
            service={ServicesPages.MOBILE}
          />
        </div>
        <div className="w-1/4" />
      </div>

      {/* service line 2 */}
      <div className="flex flex-row mt-4">
        <div className="w-1/4" />
        <div className="flex flex-col justify-between items-center w-full gap-2 md:flex-row">
          <ServicesCard
            serviceName="server application"
            imagePath={serverApplicationServicePhoto}
            service={ServicesPages.SERVER}
          />
          <ServicesCard
            serviceName="database manigment"
            imagePath={databaseManigmentServicePhoto}
            service={ServicesPages.DATABASE}
          />
          <ServicesCard
            serviceName="QA testing"
            imagePath={qaTestingServicePhoto}
            service={ServicesPages.QA}
          />
        </div>
        <div className="w-1/4" />
      </div>
      <div className="h-12" />
    </Box>
  );
}
