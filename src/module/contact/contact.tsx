import { Title, TopAppBar } from "../../components";
import { useThemeStore } from "../../theme";
import { Contact as BottomAppBar } from "../home";
import { ContactForm } from "./components";

export function Contact() {
  const { theme } = useThemeStore();

  return (
    <div
      style={{
        backgroundColor: theme.palette?.background?.default ?? "white",
        backgroundImage: `radial-gradient(circle at top right, ${theme.palette?.background?.paper} 0%, rgba(39, 165, 221, 0) 70%)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top right",
        backgroundSize: "350px 350px",
      }}
      className="flex flex-col h-screen"
    >
      <TopAppBar />
      <div className="flex-1">
        <Title title="Contact Me" />
        <ContactForm />
      </div>
      <BottomAppBar />
    </div>
  );
}
