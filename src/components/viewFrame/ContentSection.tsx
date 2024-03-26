import { ReactNode } from "react";

export interface IContentSection {
  children: ReactNode;
  className?: string;
}

export const ContentSection = ({ children, className }: IContentSection) => {

  return (
    <div className={`w-screen flex flex-row justify-center`}>
      <div className={`w-screen bg-background max-w-[1550px] ${className}`}>
        {children}
      </div>
    </div>
  );
}