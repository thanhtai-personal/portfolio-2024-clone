import { TitleText } from "@/components/index";
import { useTranslate } from "@/hooks/index"

export const SideProjects = () => {
  const { t } = useTranslate();

  return <div className="w-full min-h-7 px-2 py-4">
    <TitleText content='Side Projects' />
    <div className="w-full text-center italic text-text">

    </div>
  </div>
}