import { AnimationView } from '@/components/viewFrame';
import { GiAirplane } from "react-icons/gi";
import {
  SlSocialSkype,
  SlSocialLinkedin,
  SlSocialTwitter,
  SlSocialFacebook,
} from 'react-icons/sl';

export const SocialIcons = ({
  classes = {
    container: 'w-full h-full flex flex-col justify-end items-end',
  },
  disabledAnimation
}: {
  classes?: { container?: string };
  disabledAnimation?: boolean;
}) => {
  return (
    <div className={`${classes?.container} relative`}>
      <AnimationView.Bird
        className={disabledAnimation ? "m-4" : `m-4 animate-duration-[1.5s] animate-delay-[50ms]`}
      >
        <a
          target='_blank'
          href='https://vi-vn.facebook.com/mindinme'
          className='cursor-pointer rounded-full hover:scale-110 text-text hover:text-text-active'
        >
          <SlSocialFacebook className='w-8 h-8' />
        </a>
      </AnimationView.Bird>
      <AnimationView.Bird
        className={disabledAnimation ? "m-4" : `m-4 animate-duration-[1.5s] animate-delay-[200ms]`}
      >
        <a
          target='_blank'
          href='https://join.skype.com/invite/gTOdyRdTjN2f'
          className=' cursor-pointer rounded-full hover:scale-110 text-text hover:text-text-active'
        >
          <SlSocialSkype className='w-8 h-8' />
        </a>
      </AnimationView.Bird>
      <AnimationView.Bird
        className={disabledAnimation ? "m-4" : `m-4 animate-duration-[1.5s] animate-delay-[550ms]`}
      >
        <a
          target='_blank'
          href='https://www.linkedin.com/in/tran-thanh-tai-539250129/'
          className=' cursor-pointer rounded-full hover:scale-110 text-text hover:text-text-active'
        >
          <SlSocialLinkedin className='w-8 h-8 ' />
        </a>
      </AnimationView.Bird>
      <AnimationView.Bird
        className={disabledAnimation ? "m-4" : `m-4 animate-duration-[1.5s] animate-delay-[800ms]`}
      >
        <a
          target='_blank'
          href='https://twitter.com/TiTrn93656888'
          className=' cursor-pointer rounded-full hover:scale-110 text-text hover:text-text-active'
        >
          <SlSocialTwitter className='w-8 h-8' />
        </a>
      </AnimationView.Bird>
    </div>
  );
};
