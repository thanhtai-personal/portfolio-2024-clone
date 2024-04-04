import { AnimationView } from '@/components/viewFrame';
import { useEffect, useState } from 'react';
import {
  SlSocialSkype,
  SlSocialLinkedin,
  SlSocialTwitter,
  SlSocialFacebook,
} from 'react-icons/sl';

export const SocialIcons = ({
  classes = {
    container: "w-full h-full flex flex-col justify-end items-end"
  },
}: {
  classes?: { container?: string };
}) => {
  const [firstLoad, setFirstLoad] = useState(false);

  useEffect(() => {
    setFirstLoad(true)
      , []
  })

  return (
    <div
      className={`${classes?.container}`}
    >
      <AnimationView.FadeInLTR className={`m-4 animate-fade_in_ltr_70 animate-duration-[350ms] animate-delay-[50ms] ${!firstLoad && "hidden"}`}>
        <a
          target='_blank'
          href='https://vi-vn.facebook.com/mindinme'
          className=' cursor-pointer rounded-full hover:scale-110 text-text hover:text-text-active'
        >
          <SlSocialFacebook className='w-8 h-8' />
        </a>
      </AnimationView.FadeInLTR>
      <AnimationView.FadeInLTR className={`m-4 animate-fade_in_ltr_70 animate-duration-[350ms] animate-delay-[500ms] ${!firstLoad && "hidden"}`}>
        <a
          target='_blank'
          href='https://join.skype.com/invite/gTOdyRdTjN2f'
          className=' cursor-pointer rounded-full hover:scale-110 text-text hover:text-text-active'
        >
          <SlSocialSkype className='w-8 h-8' />
        </a>
      </AnimationView.FadeInLTR>
      <AnimationView.FadeInLTR className={`m-4 animate-fade_in_ltr_70 animate-duration-[350ms] animate-delay-[950ms] ${!firstLoad && "hidden"}`}>
        <a
          target='_blank'
          href='https://www.linkedin.com/in/tran-thanh-tai-539250129/'
          className=' cursor-pointer rounded-full hover:scale-110 text-text hover:text-text-active'
        >
          <SlSocialLinkedin className='w-8 h-8 ' />
        </a>
      </AnimationView.FadeInLTR>
      <AnimationView.FadeInLTR className={`m-4 animate-fade_in_ltr_70 animate-duration-[350ms] animate-delay-[1400ms] ${!firstLoad && "hidden"}`}>
        <a
          target='_blank'
          href='https://twitter.com/TiTrn93656888'
          className=' cursor-pointer rounded-full hover:scale-110 text-text hover:text-text-active'
        >
          <SlSocialTwitter className='w-8 h-8' />
        </a>
      </AnimationView.FadeInLTR>



    </div>
  );
};
