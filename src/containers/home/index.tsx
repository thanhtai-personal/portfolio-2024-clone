import {
  Animates,
  AnimationView,
  ContentSection,
  IntersectionObserverView,
  VideoBackground,
} from '@/components/index';
import { Banner } from './Banner';
// import { Summary } from './Summary';
import { Footer } from 'flowbite-react';
// import { Skills } from './Skills';
// import { Experience } from './Experience';
// import { Education } from './Education';
import { Projects } from './Projects';
// import { RightActionPanel } from './RightActionPanel';
import preloadImage from '@/assets/images/preload-image.jpg';
import { HomeContext, HomeSectionIds } from '@/context/index';
import { useMouseWaveClicker } from '@/hooks/useMouseWaveClicker';
import { ThemeContext } from '@/context/theme';

export interface IHomePage { }

const HomePageContent = () => {
  const homeData = HomeContext.useDataContext();

  return (
    <AnimationView.FadeIn
      id='scroll-container'
      className='bg-transparent relative w-screen h-screen m-0 p-0 overflow-x-hidden'
    >
      {/* <RightActionPanel /> */}
      <Banner />
      {/* <IntersectionObserverView id={HomeSectionIds.summary}>
        <AnimationView.FadeIn>
          <AnimationView.SlideIn>
            <ContentSection>
              <Summary />
            </ContentSection>
          </AnimationView.SlideIn>
        </AnimationView.FadeIn>
      </IntersectionObserverView> */}
      {/* <IntersectionObserverView id={HomeSectionIds.skills}>
        <AnimationView.FadeIn>
          <AnimationView.SlideIn>
            <ContentSection>
              <Skills />
            </ContentSection>
          </AnimationView.SlideIn>
        </AnimationView.FadeIn>
      </IntersectionObserverView> */}
      {/* <IntersectionObserverView id={HomeSectionIds.experience}>
        <AnimationView.FadeIn>
          <AnimationView.SlideIn>
            <ContentSection>
              <Experience />
            </ContentSection>
          </AnimationView.SlideIn>
        </AnimationView.FadeIn>
      </IntersectionObserverView> */}
      {/* <IntersectionObserverView id={HomeSectionIds.education}>
        <AnimationView.FadeIn>
          <AnimationView.SlideIn>
            <ContentSection>
              <Education />
            </ContentSection>
          </AnimationView.SlideIn>
        </AnimationView.FadeIn>
      </IntersectionObserverView> */}
      {/* <IntersectionObserverView id={HomeSectionIds.projects}> */}
      {homeData?.activeSection === HomeSectionIds.projects && <Projects />}
      {/* </IntersectionObserverView> */}
      {/* <Footer className='w-full h-4 relative'>
        <div className='absolute w-full h-full left-0 top-0 rounded-t-lg'>
          <div className='w-full h-full flex flex-row items-end justify-center'>
            <div className='text-xs text-gray-600 font-mono font-bold w-full text-center justify-center items-center h-4 bg-[rgba(255,100,125,0.25)] dark:bg-[rgba(0,15,5,0.7)]'>
              @2024 taitran
            </div>
          </div>
        </div>
      </Footer> */}
    </AnimationView.FadeIn>
  );
};

const HomePage = ({ }: IHomePage) => {
  useMouseWaveClicker();
  const themeData = ThemeContext.useDataContext();
  return (
    <HomeContext.Provider>
      <div className='w-screen h-screen bg-bg-gradient'>
        {themeData?.theme?.key === "dark" && <Animates.CursorShadow />}
        <VideoBackground
          id='page-background'
          classes={{
            container: 'opacity-30',
          }}
          preloadSrc={preloadImage}
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
