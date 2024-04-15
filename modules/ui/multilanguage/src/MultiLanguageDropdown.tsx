import { Dropdown } from "flowbite-react";
import { MultilanguageContext, MultiLanguageActionType, LanguageKey } from "@ttt-logic/multilanguage"

export interface IMultiLanguageDropdown {
  language: (key: string) => string;
}

export const MultiLanguageDropdown = ({
  language,
}: IMultiLanguageDropdown) => {
  const multilanguageDispatcher = MultilanguageContext.useDataDispatchContext();
  const multilanguageData = MultilanguageContext.useDataContext();

  return (
    <Dropdown value={multilanguageData?.language} label={language("Languages")} dismissOnClick={false}
      onChange={(value: any) => {
        multilanguageDispatcher && multilanguageDispatcher({
          type: MultiLanguageActionType.updateLanguage,
          payload: {
            language: value
          }
        })
      }}
    >
      {Object.keys(LanguageKey).map((key: string) => (
        <Dropdown.Item key={key} value={key}>{language(key)}</Dropdown.Item>
      ))}
    </Dropdown>
  );
};
