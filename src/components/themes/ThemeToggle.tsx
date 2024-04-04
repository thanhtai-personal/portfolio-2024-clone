import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import { ReactNode, useEffect } from 'react';
import { ThemeSettingBoard } from "./ThemeSettingBoard"
import { ThemeActionType, ThemeContext } from '@/context/theme';
import { ThemeMode } from '@/utils/constants';

export interface IThemeProvider {
  useToggle?: boolean;
  useSettingBoard?: boolean;
  children: ReactNode;
  defaultTheme?: ThemeMode;
}

export function ThemeProvider({
  useToggle = false,
  useSettingBoard = false,
  defaultTheme = "dark",
  children
}: IThemeProvider) {
  const themeDispatch = ThemeContext.useDataDispatchContext();

  useEffect(() => {
    themeDispatch && themeDispatch({
      type: ThemeActionType.updateTheme,
      payload: {
        key: defaultTheme as string,
      }
    });
  }, [defaultTheme])

  return (
    <Flowbite>
      {children}
      {useToggle && <DarkThemeToggle />}
      {useSettingBoard && <ThemeSettingBoard />}
    </Flowbite>
  );
}
