import { useTranslate } from '@/hooks/useTranslate';
import {
  AnimationView,
  ScreenSection,
  VideoBackground,
} from '@/components/index';
import avartarImage from '@/assets/images/default_profile_image.jpg';
import backgroundVideoLight from '@/assets/video/background.mp4';

export interface IHomePage {}

const HomePage = ({}: IHomePage) => {
  const { t } = useTranslate();

  return (
    <AnimationView.FadeIn className='bg-background w-screen h-screen m-0 p-0 overflow-x-hidden'>
      <ScreenSection
        className='flex flex-row justify-center items-center bg-cover'
        overflowHidden
      >
        <VideoBackground src={backgroundVideoLight} className='bg-cover relative'>
          <div className='flex w-full h-full flex-row justify-center items-center'>
            <div className='animate-spin_4 p-1 border-solid border-2 border-b-0 border-t-0  border-danger-200 rounded-full shadow-inner'>
              <div className='animate-spin_3 p-2 border-solid border-2 border-b-0 border-t-0  border-danger-200 rounded-full shadow-inner'>
                <div className='animate-spin_2 p-4 border-solid border-2 border-b-0 border-t-0  border-danger-200 rounded-full shadow-inner'>
                  <div
                    className='w-16 h-16 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full'
                  />
                </div>
              </div>
            </div>
            <div className='absolute'>
              <img
                className='w-16 h-16 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full shadow-xl'
                src={avartarImage}
                alt='avatar'
              />
            </div>
          </div>
        </VideoBackground>
      </ScreenSection>
      <div className='h-96'></div>
    </AnimationView.FadeIn>
  );
};

export default HomePage;
