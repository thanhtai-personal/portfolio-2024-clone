import avartarImage from '@/assets/images/avt.png';
import { LazyLoadImage } from '@/components/LazyImage';
import { Animates } from '@/components/animates';
import { AnimationView } from '@/components/index';
import { DevelopmentIcons } from './DevelopmentIcons';

export const BannerAvartar = ({ classes, image }: {
  classes?: {
    container?: string;
  };
  image?: string;
}) => {
  return (
    <AnimationView.FadeIn className='w-full h-full' delay={2000}>
      <div className={`relative left-0 top-0 w-full h-full flex-row ${classes?.container}`}>
        <div className='relative translate-x-32 translate-y-32 duration-0 hidden lg:flex'>
          <DevelopmentIcons />
        </div>
        <div className='flex w-full h-full flex-row justify-center items-center'>
          <div className='space-rotate-x'>
            <div
              className={`${'animate-spin_4'
                } p-1 border-solid border-2 border-b-0 border-t-0  border-danger-200 rounded-full shadow-inner`}
            >
              <div
                className={`${'animate-spin_3'
                  } p-2 border-solid border-2 border-b-0 border-t-0  border-danger-200 rounded-full shadow-inner`}
              >
                <div
                  className={`${'animate-spin_2'
                    } p-4 border-solid border-2 border-b-0 border-t-0  border-danger-200 rounded-full shadow-inner`}
                >
                  <div className='w-16 h-16 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full' />
                </div>
              </div>
            </div>
          </div>
          <div
            className='absolute flex flex-row flex-wrap shadow-xl'
          >
            <div className='relative shadow-inner flex bg-transparent justify-center items-center w-16 h-16 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full'>
              <Animates.BlackHole className="space-rotate-x w-16 h-16 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full" />
              <div className='absolute bg-transparent w-16 h-16 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full'>
                <div className='relative bg-transparent w-16 h-16 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full -translate-y-10'>
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
    </AnimationView.FadeIn>
  );
};
