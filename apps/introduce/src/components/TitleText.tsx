import { useTranslate } from "@ttt-logic/multilanguage"

export const TitleText = ({ content }: { content: string }) => {
  const { t } = useTranslate();

  return <div className="w-full text-center text-2xl font-bold text-text">{t(content)}</div>
}