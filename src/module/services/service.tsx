import { useMemo } from "react";
import { useParams } from "react-router-dom";

import {
  Database,
  Error,
  Mobile,
  Programing,
  Qa,
  Server,
  Website,
} from "./components";
import { TopAppBar } from "../../components";
import { useThemeStore } from "../../theme";

export function Service() {
  const { id } = useParams();
  const { theme } = useThemeStore();

  const component = useMemo(() => {
    switch (id) {
      case "0":
        return <Programing />;
      case "1":
        return <Website />;
      case "2":
        return <Mobile />;
      case "3":
        return <Server />;
      case "4":
        return <Database />;
      case "5":
        return <Qa />;
      default:
        return <Error />;
    }
  }, [id]);
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
      {component}
    </div>
  );
}
