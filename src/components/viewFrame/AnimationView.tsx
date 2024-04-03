import { ReactNode } from 'react';

export interface IAnimationView {
  children: ReactNode;
  className?: string;
}

export namespace AnimationView {
  export const FadeInRTL = ({ children, className }: IAnimationView) => {
    return <div className={`animate-fade_in_rtl ${className}`}>{children}</div>;
  };

  export const FadeIn = ({ children, className }: IAnimationView) => {
    return <div className={`animate-fade_in ${className}`}>{children}</div>;
  };
  
  export const FadeInLTR = ({ children, className }: IAnimationView) => {
    return <div className={`animate-fade_in_ltr ${className}`}>{children}</div>;
  };

  export const SlideIn = ({ children, className }: IAnimationView) => {
    return <div className={`animate-slide_in ${className}`}>{children}</div>;
  };
}
