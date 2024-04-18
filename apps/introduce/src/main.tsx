import { router } from "@/appRoute/index";
import "./reset.css";
import "./index.css";
import { ThemeProvider } from "@/components/index";
import { ThemeContext } from "./context/theme";
import { AppWithRoute, IAppProvider, IAppWithRoute } from "@ttt-core/react";
import { LanguageKey, MultilanguageContext } from "@ttt-logic/multilanguage";
import { addResource } from "@ttt-logic/multilanguage";
import vi from "./lang/vi";
import en from "./lang/en";
import { useLayoutEffect } from "react";

const ThemeWrapper: React.FC<IAppProvider> = ({ children }: IAppProvider) => {
  return (
    <ThemeContext.Provider>
      <ThemeProvider>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

const LanguageWrapper: React.FC<IAppProvider> = ({ children }: IAppProvider) => {

  useLayoutEffect(() => {
    addResource(LanguageKey.vi as string, vi);
    addResource(LanguageKey.en as string, en);
  }, []);

  return (
    <MultilanguageContext.Provider>
      {children}
    </MultilanguageContext.Provider>
  );
};

AppWithRoute({
  rootId: "root",
  providers: [ThemeWrapper, LanguageWrapper],
  strictMode: true,
  router: router,
} as IAppWithRoute);
