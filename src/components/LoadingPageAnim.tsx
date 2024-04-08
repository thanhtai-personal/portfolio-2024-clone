import { Animates } from '@/components/animates';
import { LazyLoadImage } from '@/components/index';
import { useTimedDisplay } from '@/hooks/index';
import wolfHunterImage from "@/assets/images/wolfhunter.png";

export const LoadingPageAnim = ({ classes, alive }: {
  classes?: {
    container?: string;
  };
  image?: string;
  alive: number;
}) => {
  const isDisplaying = useTimedDisplay(alive);

  if (!isDisplaying) return "";

  return (
    <div className='fixed w-screen h-screen bg-background'>
      <div className={`relative left-0 top-0 w-full h-full flex-row ${classes?.container}`}>
        <div className='flex w-full h-full flex-row justify-center items-center'>
          <div className='space-rotate-x'>
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
          </div>
          <div
            className='absolute flex flex-row flex-wrap'
          >
            <div className='relative flex bg-transparent justify-center items-center w-16 h-16 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full'>
              <Animates.BlackHole className="space-rotate-x w-16 h-16 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full" />
              <div className='absolute bg-transparent w-16 h-16 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full'>
                <div className='relative bg-transparent w-16 h-16 md:w-36 md:h-36 lg:w-48 lg:h-48 -translate-y-10 rounded-full'>
                  <div className='relative'>
                    <LazyLoadImage className='absolute -translate-y-14 -translate-x-10 scale-125' alt="wolf-hunt" src={wolfHunterImage} />
                  </div>
                  <Animates.PlasmaBall
                    className='text-[2px] -translate-y-40'
                    id='loading-page'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
