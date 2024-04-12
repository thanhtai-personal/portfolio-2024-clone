import {
  AnimationView,
  VideoBackground,
} from '@/components/index';
import { Banner } from './Banner';
import { Projects } from './Projects';
import { HomeContext, HomeSectionIds } from '@/context/index';
import { useMouseWaveClicker } from '@ttt-utils/react-hooks';

export interface IHomePage { }

const HomePageContent = () => {
  const homeData = HomeContext.useDataContext();

  return (
    <AnimationView.FadeIn
      id='scroll-container'
      className='bg-transparent relative w-screen h-screen m-0 p-0 overflow-x-hidden'
    >
      <Banner />
      {homeData?.activeSection === HomeSectionIds.projects && <Projects />}
    </AnimationView.FadeIn>
  );
};

const HomePage = ({ }: IHomePage) => {
  useMouseWaveClicker();
  return (
    <HomeContext.Provider>
      <div className='w-screen h-screen bg-bg-gradient'>
        <VideoBackground
          id='page-background'
          classes={{
            container: 'opacity-30',
          }}
          preloadSrc={""}
          src='https://video.wixstatic.com/video/d47472_58cce06729c54ccb935886c4b3647274/1080p/mp4/file.mp4'
          className='flex justify-center w-full h-full'
        >
          <div></div>
        </VideoBackground>
        <div className='absolute w-full h-full left-0 top-0 bg-transparent rounded-t-lg'>
          <div className='w-full flex flex-row bg-transparent'>
            <HomePageContent />
          </div>
        </div>
      </div>
    </HomeContext.Provider>
  );
};

export default HomePage;
