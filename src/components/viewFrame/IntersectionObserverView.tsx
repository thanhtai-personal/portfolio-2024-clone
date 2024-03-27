import { ReactNode, useEffect, useRef, useState } from "react";

export interface IIntersectionObserverView {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const IntersectionObserverView = ({ children, className, id }: IIntersectionObserverView) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsIntersecting(entry.isIntersecting);
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div id={id} ref={ref} className={`w-full ${className}`}>
      {isIntersecting ? children : ""}
    </div>
  );
};
