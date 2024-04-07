import { ReactNode } from 'react';
import { useDelayedDisplay } from "@/hooks/index"

export interface IAnimationView {
  children: ReactNode;
  className?: string;
  id?: string;
  duration?: number;
  delay?: number;
  disabled?: boolean;
  quitAnimate?: string;
}

export namespace AnimationView {
  export const FadeInRTL = ({ children, className, id, delay }: IAnimationView) => {
    const isDisplay = useDelayedDisplay(delay);
    return <div id={id} className={`${isDisplay ? "animate-fade_in_rtl" : "hidden"} ${!isDisplay && "hidden"} ${className}`}>{children}</div>;
  };

  export const FadeIn = ({ children, className, id, delay }: IAnimationView) => {
    const isDisplay = useDelayedDisplay(delay);
    return <div id={id} className={`${isDisplay ? "animate-fade_in" : "hidden"} ${className}`}>{children}</div>;
  };

  export const FadeInLTR = ({ children, className, id, delay }: IAnimationView) => {
    const isDisplay = useDelayedDisplay(delay);
    return <div id={id} className={`${isDisplay ? "animate-fade_in_ltr" : "hidden"} ${className}`}>{children}</div>;
  };

  export const SlideIn = ({ children, className, id, delay }: IAnimationView) => {
    const isDisplay = useDelayedDisplay(delay);
    return <div id={id} className={`${isDisplay ? "animate-slide_in" : "hidden"} ${className}`}>{children}</div>;
  };

  export const SlideLTR = ({ children, className, id, delay }: IAnimationView) => {
    const isDisplay = useDelayedDisplay(delay);
    return <div id={id} className={` ${isDisplay ? "animate-slide_ltr" : "hidden"} ${className}`}>{children}</div>;
  };

  export const SlideDown = ({ children, className, id, delay }: IAnimationView) => {
    const isDisplay = useDelayedDisplay(delay);
    return <div id={id} className={` ${isDisplay ? "animate-slide_down" : "hidden"} ${className}`}>{children}</div>;
  };

  export const SlideUp = ({ children, className, id, delay, quitAnimate }: IAnimationView) => {
    const isDisplay = useDelayedDisplay(delay);
    return <div id={id} className={` ${!!quitAnimate ? quitAnimate : isDisplay ? `animate-slide_up ${className}` : "hidden"}`}>{children}</div>;
  };

  export const Bird = ({ children, className, id, disabled, delay }: IAnimationView) => {
    const isDisplay = useDelayedDisplay(delay);
    return <div id={id} className={`${isDisplay && !disabled ? `animate-bird ${className}` : "hidden"} `}>{children}</div>;
  };

  export const TextAppearance = ({ children, className, id, disabled, delay }: IAnimationView) => {
    const isDisplay = useDelayedDisplay(delay);
    return <div id={id} className={`${isDisplay && !disabled ? "animate-text_appear" : "hidden"} ${className}`}>{children}</div>;
  };

  export const SpaceAppear = ({ children, className, id, disabled, delay }: IAnimationView) => {
    const isDisplay = useDelayedDisplay(delay);
    return <div id={id} className={`${isDisplay && !disabled ? "animate-space_appear" : "hidden"} ${className}`}>{children}</div>;
  };
}
