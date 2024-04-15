import { LanguageKey, useTranslate } from "@ttt-logic/multilanguage";
import { MultiLanguageButton } from "@ttt-ui/react-multilanguage-flowbite";
import vi from "@/assets/images/icons/vi.png";
import en from "@/assets/images/icons/en.png";

export const LanguageSetting = ({
  classes
}: {
  classes?: {
    container?: string;
  }
}) => {
  const { t } = useTranslate();

  return (
    <div className={`flex flex-row justify-center items-center ${classes?.container}`}>
      <MultiLanguageButton language={t} flags={{
        [LanguageKey.vi as string]: vi,
        [LanguageKey.en as string]: en,
      }} />
    </div>
  )
}