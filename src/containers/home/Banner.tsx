import {
  ScreenSection,
  VideoBackground,
  ContentSection,
  GridView,
} from '@/components/viewFrame';
import backgroundVideoLight from '@/assets/video/background.mp4';
import backgroundVideoDark from '@/assets/video/background_dark.mp4';
import { DevelopmentIcons } from './DevelopmentIcons';
import { BannerAvartar } from './BannerAvartar';
import { LanguageSetting } from './LanguageSetting';
import { Animates, EczarText } from '@/components/index';
import { UserInfo } from './UserInfo';
import { ThemeContext } from '@/context/theme';
// import { useMemo } from 'react';
// import { Button } from 'flowbite-react';
import { useTranslate } from '@/hooks/useTranslate';
// import { FaDownload } from 'react-icons/fa6';
import { SocialIcons } from './SocialIcons';
import preloadImage from "@/assets/images/preload-image.jpg"
import { HomeSectionIds } from "@/context/home";

export const Banner = () => {
  const themeData = ThemeContext.useDataContext();

  const { t } = useTranslate();

  // const videoSrc = useMemo(() => {
  //   return themeData?.theme?.key === 'dark'
  //     ? backgroundVideoDark
  //     : backgroundVideoLight;
  // }, [themeData?.theme?.key]);

  const content =
    <div className='relative w-full h-full'>
      <div className='flex absolute left-0 top-0 w-full h-full flex-row justify-center'>
        <ContentSection className='w-full bg-transparent'>
          <GridView
            cols={4}
            gap={'1'}
            classes={{
              container: 'h-screen',
            }}
          >
            <div className='bg-transparent p-2 flex flex-col'>
              <SocialIcons
                classes={{
                  container:
                    'w-full flex flex-col lg:flex-row justify-start items-start',
                }}
              />
            </div>
            <div></div>
            <div className='bg-transparent col-span-2 flex flex-col-reverse justify-end items-center'>
              <LanguageSetting
                classes={{
                  container: 'flex h-fit mx-2 my-2 lg:my-0 flex md:hidden',
                }}
              />
            </div>

            <div className='bg-transparent'></div>
            <div className='bg-transparent flex justify-center items-center col-span-2'>
              <div className='bg-transparent p-2 flex flex-col items-center'>
                <BannerAvartar classes={{ container: ' flex lg:hidden' }} />
                <EczarText
                  content='Sr. Full stack JS developer'
                  className='hidden sm:flex text-center animate-text_appear'
                />
                <EczarText
                  content='Sr. JS developer'
                  className='flex sm:hidden text-center animate-text_appear'
                />
                <div className='text-text text-1xl lg:text-2xl whitespace-normal text-wrap text-center mt-4 lg:mr-6'>
                  {t(
                    'I am passionate about crafting robust and scalable products, employing top-tier software architecture principles'
                  )}
                  {t(
                    '. Find me at '
                  )}
                  
                </div>
                <div className='w-full mt-6'>
                  <DevelopmentIcons />
                </div>
              </div>
            </div>
            <div className='bg-transparent'>
              <BannerAvartar classes={{ container: ' hidden lg:flex' }} />
            </div>

            <div className='bg-transparent hidden lg:flex justify-start items-end p-2'>
              <UserInfo />
            </div>
            <div className='bg-transparent col-span-2 flex flex-row justify-center items-end'></div>
            <div className='bg-transparent p-2'>
              {/* <SocialIcons /> */}
            </div>
          </GridView>
        </ContentSection>
      </div>
    </div>

  return (
    <ScreenSection
      className='flex flex-row justify-center items-center bg-cover shadow-lg rounded-b-lg'
      id={HomeSectionIds.banner}
      overflowHidden
    >
      {themeData?.theme?.key != "dark" ? <VideoBackground
        id='banner-background'
        src={backgroundVideoLight} //{videoSrc}
        preloadSrc={preloadImage}
        className='bg-cover relative'
      >
        {content}
      </VideoBackground>
      : content}
    </ScreenSection>
  );
};
