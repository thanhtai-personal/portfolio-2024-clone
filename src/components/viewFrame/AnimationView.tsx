import { ReactNode } from 'react';

export interface IAnimationView {
  children: ReactNode;
  className?: string;
  animate?: string;
}

export const AnimationView = ({ children, className, animate = "fade_in" }: IAnimationView) => {
  return <div className={` animate-${animate} ${className}`}>
    {children}
  </div>;
};
