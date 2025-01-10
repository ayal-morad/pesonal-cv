import { Typography } from "@mui/material";
import { useThemeStore } from "../../../theme";

export function AboutSpeatch() {
  const { theme } = useThemeStore();

  return (
    <div
      className="flex flex-col flex-1 w-full justify-center items-center"
      style={{
        backgroundImage: `radial-gradient(circle at bottom left, ${theme.palette?.background?.paper} 0%, rgba(39, 165, 221, 0) 70%)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom left",
        backgroundSize: "350px 350px",
      }}
    >
      <Typography variant="h3" color="secondary">
        About
      </Typography>

      <div className="flex justify-center items-center w-1/2">
        <Typography variant="body1" color="secondary">
          I am from Majdal Shams and hold a degree in Software Engineering from
          Tel-Hai College. I gained valuable experience working as a Front-End
          Developer at Runnable Web, a startup where I contributed to mobile
          application development for two months. I am passionate about
          collaborating with companies that have experienced senior developers,
          as I strive to learn from them and grow as a developer. My ultimate
          goal is to contribute to the creation of a widely recognized and
          impactful application.
        </Typography>
      </div>
      <br />

      <div className="flex justify-center items-center w-1/2">
        <Typography variant="body1" color="secondary">
          Outside of coding, I enjoy exploring new technologies, mentoring
          aspiring developers, and occasionally working on side projects to
          sharpen my skills. I also have a passion for design and creative
          problem-solving.
        </Typography>
      </div>

      <br />
      <div className="flex justify-center items-center w-1/2">
        <Typography variant="body1" color="secondary">
          My career objective is to continually grow as a developer, work on
          cutting-edge projects, and contribute to impactful technologies that
          make a difference in people's lives.
        </Typography>
      </div>
    </div>
  );
}
