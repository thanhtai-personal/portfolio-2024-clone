import { useTranslate } from "@/hooks/index"

export const Summary = () => {
  const { t } = useTranslate();

  return <div id="section-summary" className="w-full min-h-7 px-2 py-4">
    <div className="w-full text-center text-2xl font-bold text-text">{t("SUMMARY")}</div>
    <div className="w-full text-center italic text-text">{t("Experienced Frontend/Full-stack Web Developer with a strong background in ReactJS, NodeJS, TS. Skilled in project management, deployment, and problem-solving.")}</div>
  </div>
}