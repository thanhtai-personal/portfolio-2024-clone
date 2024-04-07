import avartarImage from '@/assets/images/avt.png';
import { LazyLoadImage } from '@/components/LazyImage';
import { ShootingAnim } from './ShootingAnim';
import { ThemeContext } from '@/context/theme';
import { Animates } from '@/components/animates';
import { AnimationView } from '@/components/index';

export const BannerAvartar = ({ classes }: {
  classes?: {
    container?: string;
  }
}) => {
  const themeData = ThemeContext.useDataContext();

  return (
    <AnimationView.SlideLTR className='w-full h-full' delay={200}>
      <div className={`relative left-0 top-0 w-full h-full flex-row ${classes?.container}`}>
        {themeData?.theme?.key === "dark" && <div className='relative duration-0 translate-x-[140px] translate-y-[140px] hidden lg:block'>
          <ShootingAnim />
        </div>}
        <div className='flex w-full h-full flex-row justify-center items-center'>
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
          <div
            className='absolute flex flex-row flex-wrap shadow-xl'
          >
            <div className='relative shadow-inner flex bg-[#fff] dark:bg-[#000] justify-center items-center w-16 h-16 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full overflow-hidden'>
              <Animates.BlackHole className="w-16 h-16 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full" />
              <div className='absolute bg-transparent w-16 h-16 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full'>
                <div className='relative bg-transparent w-16 h-16 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full'>
                  <LazyLoadImage
                    imageClass='w-16 h-16 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full'
                    src={avartarImage}
                    alt='avatar'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimationView.SlideLTR>
  );
};
