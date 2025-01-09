import { TopAppBar } from "../../components";
import { useThemeStore } from "../../theme";
import { PersonalProfile, Services, Contact } from "./components";

export function Home() {
  const { theme } = useThemeStore();

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: theme.palette?.background?.default ?? "white",
        backgroundImage: `radial-gradient(circle at top right, ${theme.palette?.background?.paper} 0%, rgba(39, 165, 221, 0) 70%)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top right",
        backgroundSize: "350px 350px",
      }}
    >
      <TopAppBar />
      <PersonalProfile />
      <Services />
      <Contact />
    </div>
  );
}
