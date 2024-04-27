import { ReactApplicationManager } from "@ttc-ui/react-core";
import { LayoutManager } from "@ttc-ui/react-layout-mantine";
import avatarDefault from "@/assets/images/avatar.png"

export const injectLayout = (reactApp: ReactApplicationManager) => {
  const layoutManager = new LayoutManager({
    languageKey: "en",
    languages: { "en" : {}},
    themeKey: "light",
    logo: {
      src: "",
      alt: "app-logo",
      name: "Landing page"
    },
    defaultAvatar: avatarDefault
  });

  return layoutManager.inject(reactApp);
}