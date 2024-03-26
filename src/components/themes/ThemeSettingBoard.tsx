import { Button } from 'flowbite-react';
import { useState } from 'react';
import { TbBrandReact } from 'react-icons/tb';
import { AnimationView, GridView } from '..';
import { setOfThemes } from '@/utils/constants';
import { changeTheme } from "@/utils/theme";

export interface IThemeSettingBoard {}

export const ThemeSettingBoard = ({}: IThemeSettingBoard) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={'fixed top-1/3 right-1'}>
      {isOpen ? (
        <AnimationView.FadeInRTL>
          <div className='flex flex-row justify-center items-start p-2 bg-black-200 opacity-80 rounded-lg shadow-xl mr-2'>
            <GridView cols={2}>
              {Object.keys(setOfThemes).map((key: string) => {
                const theme = setOfThemes[key];
                return (
                  <div
                    className=' hover:border-solid hover:cursor-pointer text-text flex flex-col justify-center items-center'
                    key={key}
                    onClick={() => {
                      setIsOpen(false);
                      changeTheme(theme.key)
                    }}
                  >
                    <div style={{ background: theme.color }} className="w-4 h-4 rounded-full"></div>
                    <div className="text-text text-sm">{theme.name}</div>
                  </div>
                );
              })}
            </GridView>
          </div>
        </AnimationView.FadeInRTL>
      ) : (
        <Button
          color={'gray'}
          onClick={() => setIsOpen(true)}
          className='p-0 m-0 bg-transparent hover:border-none enabled:bg-transparent enabled:hover:bg-transparent enabled:hover:border-none enabled:border-none text-color-text-active'
        >
          <TbBrandReact className='w-10 h-10 animate-spin text-text' />
        </Button>
      )}
    </div>
  );
};
