import { useTranslate } from "@/hooks/useTranslate";

export interface IHomePage {}

const HomePage = ({}: IHomePage) => {
  const { t } = useTranslate();

  return <div className="bg-background w-screen h-screen">
    {t("hello")}
  </div>
}

export default HomePage