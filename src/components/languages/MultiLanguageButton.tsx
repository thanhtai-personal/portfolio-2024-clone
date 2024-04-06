import { AppActionType, AppContext, LanguageKey } from '@/context/app';
import { MultiLanguageDropdown } from './MultiLanguageDropdown';
import { Button, ButtonGroup } from 'flowbite-react';
import { useTranslate } from '@/hooks/useTranslate';
import { Animates } from '../animates';

export interface IMultiLanguageButton { }

export const MultiLanguageButton = ({ }: IMultiLanguageButton) => {
  const appData = AppContext.useDataContext();
  const appDispatch = AppContext.useDataDispatchContext();

  const { t } = useTranslate();

  const handleChangeLanguage = (langKey: LanguageKey) => () => {
    appDispatch &&
      appDispatch({
        type: AppActionType.updateLanguage,
        payload: {
          language: langKey,
        },
      });
  };

  if (Object.keys(LanguageKey).length < 3) {
    return (
      <div className='flex flex-row flex-nowrap'>
        {Object.keys(LanguageKey).map((key: string, index: number) => (
          <Animates.RippleButton
            id={`language-button-${key}`}
            key={`language-button-${key}`}
            className={`rounded-none ${appData?.language === key
                ? 'bg-secondary-500 text-info-700'
                : ''
              } ${index === 0 ? 'rounded-l-xl'
                : index === Object.keys(LanguageKey).length - 1
                  ? 'rounded-r-xl' : ''
              }`
            }
            style={appData?.language === key ? {
              background: "var(--color-secondary-500)"
            } : { background: "rgba(100,100,100, 1)", color: "black" }}
            onClick={handleChangeLanguage(key as LanguageKey)}
          >
            {t(key)}
          </Animates.RippleButton>
        ))}
      </div>
    );
  }

  return <MultiLanguageDropdown />;
};
