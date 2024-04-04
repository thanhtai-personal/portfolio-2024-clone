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
  return (
    <div
      className={`${classes?.container}`}
    >
      <a
        target='_blank'
        href='https://vi-vn.facebook.com/mindinme'
        className=' cursor-pointer rounded-full hover:scale-110 text-text hover:text-text-active m-2'
      >
        <SlSocialFacebook className='w-8 h-8' />
      </a>
      <a
        target='_blank'
        href='https://join.skype.com/invite/gTOdyRdTjN2f'
        className=' cursor-pointer rounded-full hover:scale-110 text-text hover:text-text-active m-2'
      >
        <SlSocialSkype className='w-8 h-8' />
      </a>
      <a
        target='_blank'
        href='https://www.linkedin.com/in/tran-thanh-tai-539250129/'
        className=' cursor-pointer rounded-full hover:scale-110 text-text hover:text-text-active m-2'
      >
        <SlSocialLinkedin className='w-8 h-8 ' />
      </a>
      <a
        target='_blank'
        href='https://twitter.com/TiTrn93656888'
        className=' cursor-pointer rounded-full hover:scale-110 text-text hover:text-text-active m-2'
      >
        <SlSocialTwitter className='w-8 h-8' />
      </a>
    </div>
  );
};
