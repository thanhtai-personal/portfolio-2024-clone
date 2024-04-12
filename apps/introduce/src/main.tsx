import { router } from "@/appRoute/index";
import "./reset.css";
import "./index.css";
import { ThemeProvider } from "@/components/index";
import { ThemeContext } from "./context/theme";
import { AppWithRoute, IAppProvider, IAppWithRoute } from "@ttt/react-core";

const ThemeWrapper: React.FC<IAppProvider> = ({ children }: IAppProvider) => {
  return (
    <ThemeContext.Provider>
      <ThemeProvider>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

AppWithRoute({
  rootId: "root",
  providers: [ThemeWrapper],
  strictMode: true,
  router: router,
} as IAppWithRoute);
