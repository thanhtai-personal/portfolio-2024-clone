import { ReactNode, useEffect, useState } from 'react';

export interface IVideoBackground {
  children: ReactNode;
  className?: string;
  src: string;
  type?: string;
  id?: string;
  classes?: {
    container?: string;
  }
}

export const VideoBackground = ({
  children,
  className,
  src,
  type = 'video/mp4',
  id = "source-video",
  classes,
}: IVideoBackground) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const videoElem = document.getElementById(id);
    if (videoElem) {
      videoElem.setAttribute("src", src);

      videoElem.onloadstart = () => {
        setIsLoaded(false);
      }

      videoElem.onloadeddata = () => {
        setIsLoaded(true);
      }
    }

  }, [src, id])

  return (
    <div className={`w-full h-full relative ${classes?.container}`}>
      <video
        id={id}
        autoPlay
        muted
        loop
        className={`absolute right-0 bottom-0 w-full h-full object-cover ${!isLoaded && "display-none"}`}
      >
        <source className='w-full h-full' src={src} type={type} />
        Your browser does not support HTML5 video.
      </video>
      <div
        className={`absolute w-full h-full left-0 top-0 bg-transparent ${className}`}
      >
        {children}
      </div>
    </div>
  );
};
