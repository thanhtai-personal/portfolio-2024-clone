import { ReactNode } from "react";

export interface IMenuButton {
  id: string;
  ariaControls: string;
  children: ReactNode;
  ariaLabel?: string;
  classes?: {
    container?: string;
    button?: string;
  }
}

export const MenuButton = ({ id, ariaLabel, ariaControls, children, classes }: IMenuButton) => {
  return (
    <div className={`w-full justify-center items-center ${classes?.container}`}>
      <button
        id={id}
        className={`btn-menu ${classes?.button}`}
        aria-label={ariaLabel || 'open menu'}
        aria-controls={ariaControls || 'menu'}
      ></button>
      <nav id={`contact-menu-${id}`} aria-label={ariaControls || 'menu'}>
        {children}
      </nav>
    </div>
  );
};
