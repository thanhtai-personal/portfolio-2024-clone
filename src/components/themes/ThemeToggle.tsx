import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import { ReactNode } from 'react';

export interface IThemeProvider {
  useToggle?: boolean;
  children: ReactNode;
}

export function ThemeProvider({ useToggle = false, children }: IThemeProvider) {
  return (
    <Flowbite>
      {children}
      {useToggle && <DarkThemeToggle />}
    </Flowbite>
  );
}
