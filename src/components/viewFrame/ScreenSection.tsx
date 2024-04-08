import { ReactNode } from "react";

export interface IScreenSection {
  children: ReactNode;
  className?: string;
  overflowHidden?: boolean;
  id?: string;
}

export const ScreenSection = ({ children, className, overflowHidden, id }: IScreenSection) => {

  return (
    <div id={id || ""} className={`w-screen h-screen overflow-auto ${
        overflowHidden ? "lg:overflow-hidden" : ""
      } ${className}`}>
      {children}
    </div>
  );
}