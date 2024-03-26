import { ReactNode, useEffect } from 'react';

export interface IVideoBackground {
  children: ReactNode;
  className?: string;
  src: string;
  type?: string;
  id?: string;
}

export const VideoBackground = ({
  children,
  className,
  src,
  type = 'video/mp4',
  id = "source-video"
}: IVideoBackground) => {

  useEffect(() => {
    const videoElem = document.getElementById(id);
    videoElem?.setAttribute("src", src);
  }, [src, id])

  return (
    <div className={`w-full h-full relative`}>
      <video
        id={id}
        autoPlay
        muted
        loop
        className='absolute right-0 bottom-0 min-w-full min-h-full object-fill'
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
