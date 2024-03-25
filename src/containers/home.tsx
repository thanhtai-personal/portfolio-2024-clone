import { useTranslate } from "@/hooks/useTranslate";

export interface IHomePage {}

const HomePage = ({}: IHomePage) => {
  const { t } = useTranslate();

  return <div className="bg-background w-screen h-screen m-0 p-0">
    {t("hello")}
  </div>
}

export default HomePage