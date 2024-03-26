import { ReactNode } from "react";

export interface IScreenSection {
  children: ReactNode;
  className?: string;
  OverflowHidden?: boolean;
}

export const ScreenSection = ({ children, className, OverflowHidden }: IScreenSection) => {

  return (
    <div className={`w-screen h-screen bg-background ${
        OverflowHidden ? "overflow-hidden" : "overflow-auto"
      } ${className}`}>
      {children}
    </div>
  );
}