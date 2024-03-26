import { useTranslate } from "@/hooks/useTranslate";
import { ScreenSection } from "@/components/index";

export interface IHomePage {}

const HomePage = ({}: IHomePage) => {
  const { t } = useTranslate();

  return <div className="bg-background w-screen h-screen m-0 p-0">
    <ScreenSection className=" flex flex-row justify-center items-center">
      <div className=" text-xl text-primary-500">{t("hello")}</div>
    </ScreenSection>
  </div>
}

export default HomePage