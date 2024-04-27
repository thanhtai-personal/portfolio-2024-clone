import { ReactApplicationManager } from "@ttt-ui/react-core";
import { LayoutManager } from "@ttt-ui/react-layout-mantine";
import titanCoreLogo from "@/assets/images/ttc-logo.svg"
import avatarDefault from "@/assets/images/avatar.png"

export const injectLayout = (reactApp: ReactApplicationManager) => {
  const layoutManager = new LayoutManager({
    languageKey: "en",
    languages: { "en" : {}},
    themeKey: "light",
    logo: {
      src: titanCoreLogo,
      alt: "app-logo",
      name: "TiTan Core"
    },
    defaultAvatar: avatarDefault
  });

  return layoutManager.inject(reactApp);
}