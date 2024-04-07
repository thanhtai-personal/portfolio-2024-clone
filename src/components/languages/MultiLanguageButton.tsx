import { AppActionType, AppContext, LanguageKey } from '@/context/app';
import { MultiLanguageDropdown } from './MultiLanguageDropdown';
import vi from "@/assets/images/icons/vi.png"
import en from "@/assets/images/icons/en.png"

export interface IMultiLanguageButton { }

export const MultiLanguageButton = ({ }: IMultiLanguageButton) => {
  const appData = AppContext.useDataContext();
  const appDispatch = AppContext.useDataDispatchContext();

  const handleChangeLanguage = (langKey: LanguageKey) => () => {
    appDispatch &&
      appDispatch({
        type: AppActionType.updateLanguage,
        payload: {
          language: langKey,
        },
      });
  };

  const getNextLanguage = (langKey: LanguageKey) => {
    if (langKey === LanguageKey.vi) {
      return LanguageKey.en;
    }
    return LanguageKey.vi
  }

  if (Object.keys(LanguageKey).length < 3) {
    return (
      <div className='flex flex-row flex-nowrap justify-center items-center'>
        {Object.keys(LanguageKey).filter((key) => key === appData?.language).map((key: string) => (
          <button
            id={`language-button-${key}`}
            key={`language-button-${key}`}
            className={` rounded-lg overflow-hidden hover:border-none active:border-none enabled:border-none ${key === appData?.language ? "animate-rotate" : "hidden"}`}
            onClick={handleChangeLanguage(getNextLanguage(key as LanguageKey))}
          >
            <img alt={key} className=' rounded-lg' src={key === LanguageKey.vi ? vi : en} />
          </button>
        ))}
      </div>
    );
  }

  return <MultiLanguageDropdown />;
};
