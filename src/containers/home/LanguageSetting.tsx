import { MultiLanguageButton } from "@/components/languages"

export const LanguageSetting = ({
  classes
}: {
  classes?: {
    container?: string;
  }
}) => {

  return (
    <div className={`flex flex-row justify-end items-start ${classes?.container}`}>
      <MultiLanguageButton />
    </div>
  )
}