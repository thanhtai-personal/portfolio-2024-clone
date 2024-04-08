import avartarImage from '@/assets/images/loading.png';
import { LazyLoadImage } from '@/components/LazyImage';
import { Animates } from '@/components/animates';
import { AnimationView } from '@/components/index';
import { useEffect, useState } from 'react';

export const LoadingPageAnim = ({ classes, image, alive }: {
  classes?: {
    container?: string;
  };
  image?: string;
  alive: number;
}) => {
  const [isDisplaying, setIsDisplaying] = useState(true);

  useEffect(() => {
    if (alive) {
      const timeOutId = setTimeout(() => {
        setIsDisplaying(false);
      }, alive);

      return () => {
        clearTimeout(timeOutId);
      }
    } else {
      setIsDisplaying(false);
    }
  }, [alive]);

  if (!isDisplaying) return "";

  return (
    <div className='fixed w-screen h-screen bg-background'>
      <AnimationView.LoadingPage className='w-full h-full'>
        <div className={`relative left-0 top-0 w-full h-full flex-row ${classes?.container}`}>
          <div className='flex w-full h-full flex-row justify-center items-center'>
            <div
              className={`${'animate-spin_4'
                } p-1 border-solid border-2 border-b-0 border-t-0  border-danger-200 rounded-full`}
            >
              <div
                className={`${'animate-spin_3'
                  } p-2 border-solid border-2 border-b-0 border-t-0  border-danger-200 rounded-full`}
              >
                <div
                  className={`${'animate-spin_2'
                    } p-4 border-solid border-2 border-b-0 border-t-0  border-danger-200 rounded-full`}
                >
                  <div className='w-16 h-16 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full' />
                </div>
              </div>
            </div>
            <div
              className='absolute flex flex-row flex-wrap'
            >
              <div className='relative flex bg-[#fff] dark:bg-[#000] justify-center items-center w-16 h-16 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full overflow-hidden'>
                <Animates.BlackHole className="w-16 h-16 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full" />
                <div className='absolute bg-transparent w-16 h-16 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full'>
                  <div className='relative bg-transparent w-16 h-16 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full'>
                    <LazyLoadImage
                      imageClass='w-16 h-16 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full'
                      src={image || avartarImage}
                      alt='avatar'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimationView.LoadingPage>
    </div>
  );
};
