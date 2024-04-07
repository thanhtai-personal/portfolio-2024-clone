import avartarImage from '@/assets/images/avt.jpg';
import { LazyLoadImage } from '@/components/LazyImage';
// import { useTranslate } from '@/hooks/useTranslate';
// import { useState } from 'react';
import { ShootingAnim } from './ShootingAnim';
import { AnimationView } from '@/components/viewFrame';
import { ThemeContext } from '@/context/theme';

export const BannerAvartar = ({ classes }: {
  classes?: {
    container?: string;
  }
}) => {
  const themeData = ThemeContext.useDataContext();

  return (
    <AnimationView.SlideDown className='w-full h-full'>
      <div className={`relative left-0 top-0 w-full h-full flex-row ${classes?.container}`}>
        {themeData?.theme?.key === "dark" && <div className='relative duration-0 translate-x-[140px] translate-y-[140px] hidden lg:block'>
          <ShootingAnim />
        </div>}
        <div className='flex w-full h-full flex-row justify-center items-center'>
          <div
            className={`${
              // isHover &&
              'animate-spin_4'
              } p-1 border-solid border-2 border-b-0 border-t-0  border-danger-200 rounded-full shadow-inner`}
          >
            <div
              className={`${
                // isHover &&
                'animate-spin_3'
                } p-2 border-solid border-2 border-b-0 border-t-0  border-danger-200 rounded-full shadow-inner`}
            >
              <div
                className={`${
                  // isHover && 
                  'animate-spin_2'
                  } p-4 border-solid border-2 border-b-0 border-t-0  border-danger-200 rounded-full shadow-inner`}
              >
                <div className='w-16 h-16 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full' />
              </div>
            </div>
          </div>
          <div
            className='absolute flex flex-row flex-wrap shadow-xl'
          // onMouseEnter={() => setIsHover(true)}
          // onMouseLeave={() => setIsHover(false)}
          >
            <LazyLoadImage
              imageClass='w-16 h-16 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full shadow-xl'
              src={avartarImage}
              alt='avatar'
            />
          </div>
        </div>
      </div>
    </AnimationView.SlideDown>
  );
};
