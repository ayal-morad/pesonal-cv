import { Typography } from "@mui/material";
import { Title } from "../../../components";

export function Mobile() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Title title="Mobile Applications" />
      <div className="flex justify-center items-center w-1/2">
        <Typography variant="body1" color="secondary">
          I have hands-on experience developing mobile applications using
          frameworks like React Native and Ionic. These tools have enabled me to
          create cross-platform applications with efficient codebases,
          delivering native-like performance on both iOS and Android. My
          development process includes designing responsive user interfaces,
          integrating APIs, and optimizing app performance for diverse devices.
          Additionally, I prioritize rigorous testing using tools like device
          emulators, simulators, and real-device testing to ensure a seamless
          and reliable user experience. This expertise allows me to build
          versatile, high-quality mobile applications tailored to meet user
          needs and industry standards.
        </Typography>
      </div>
    </div>
  );
}
