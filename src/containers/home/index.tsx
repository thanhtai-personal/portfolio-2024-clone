import { AnimationView, IntersectionObserverView } from '@/components/index';
import { Banner } from './Banner';

export interface IHomePage {}

const HomePage = ({}: IHomePage) => {
  return (
    <AnimationView.FadeIn className='bg-background w-screen h-screen m-0 p-0 overflow-x-hidden'>
      <Banner />
      <IntersectionObserverView>
        <AnimationView.FadeIn>
          <div className='h-96 bg-black-200'></div>
        </AnimationView.FadeIn>
      </IntersectionObserverView>
      <IntersectionObserverView>
        <AnimationView.FadeIn>
          <div className='h-96 bg-black-300'></div>
        </AnimationView.FadeIn>
      </IntersectionObserverView>
      <IntersectionObserverView>
        <AnimationView.FadeIn>
          <div className='h-96 bg-black-400'></div>
        </AnimationView.FadeIn>
      </IntersectionObserverView>
      <IntersectionObserverView>
        <AnimationView.FadeIn>
          <div className='h-96 bg-black-500'></div>
        </AnimationView.FadeIn>
      </IntersectionObserverView>
      <IntersectionObserverView>
        <AnimationView.FadeIn>
          <div className='h-96 bg-black-600'></div>
        </AnimationView.FadeIn>
      </IntersectionObserverView>
    </AnimationView.FadeIn>
  );
};

export default HomePage;
