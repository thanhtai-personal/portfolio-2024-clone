import { AnimationView, ContentSection, IntersectionObserverView, VideoBackground } from '@/components/index';
import { Banner } from './Banner';
import { Summary } from './Summary';
import { Footer } from 'flowbite-react';
import { Skills } from './Skills';
import { Experience } from './Experience';
import { Education } from './Education';
import { SideProjects } from './SideProjects';

export interface IHomePage { }

const HomePage = ({ }: IHomePage) => {
  return (
    <AnimationView.FadeIn className='bg-background w-screen h-screen m-0 p-0 overflow-x-hidden'>
      <Banner />
      <IntersectionObserverView className=' min-h-2'>
        <AnimationView.FadeIn>
          <ContentSection>
            <Summary />
          </ContentSection>
        </AnimationView.FadeIn>
      </IntersectionObserverView>
      <IntersectionObserverView className='min-h-20'>
        <AnimationView.FadeIn>
          <Skills />
        </AnimationView.FadeIn>
      </IntersectionObserverView>
      <IntersectionObserverView className='min-h-20'>
        <AnimationView.FadeIn>
          <Experience />
        </AnimationView.FadeIn>
      </IntersectionObserverView>
      <IntersectionObserverView className='min-h-20'>
        <AnimationView.FadeIn>
          <Education />
        </AnimationView.FadeIn>
      </IntersectionObserverView>
      <IntersectionObserverView className='min-h-20'>
        <AnimationView.FadeIn>
          <SideProjects />
        </AnimationView.FadeIn>
      </IntersectionObserverView>
      <Footer className="w-full h-56">
        <VideoBackground
          id="smoke-button"
          classes={{
            container: "h-auto"
          }}
          src="https://video.wixstatic.com/video/d47472_58cce06729c54ccb935886c4b3647274/1080p/mp4/file.mp4"
          className="flex justify-center w-full h-full"
        >
          <div className="flex justify-center items-center">

          </div>
        </VideoBackground>
      </Footer>
    </AnimationView.FadeIn>
  );
};

export default HomePage;
