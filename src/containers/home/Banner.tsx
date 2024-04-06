import {
  ScreenSection,
  VideoBackground,
  ContentSection,
  GridView,
  AnimationView,
} from '@/components/viewFrame';
import backgroundVideoLight from '@/assets/video/background.mp4';
import { DevelopmentIcons } from './DevelopmentIcons';
import { BannerAvartar } from './BannerAvartar';
import { LanguageSetting } from './LanguageSetting';
import { Animates, EczarText } from '@/components/index';
import { UserInfo } from './UserInfo';
import { ThemeContext } from '@/context/theme';
import { useTranslate } from '@/hooks/useTranslate';
import { SocialIcons } from './SocialIcons';
import preloadImage from "@/assets/images/preload-image.jpg"
import { HomeSectionIds } from "@/context/home";
import { FaDownload } from 'react-icons/fa';
import { GlowingLine } from '@/components/animates/GlowingLight';

export const Banner = () => {
  const themeData = ThemeContext.useDataContext();

  const { t } = useTranslate();

  const content =
    <div className='relative w-full h-full'>
      {/* {themeData?.theme?.key === "dark" && <div className='absolute pointer-events-none opacity-0 top-0 left-0 bg-text animate-shoot_y animate-duration-[10s] animate-delay-[300ms]'>
        <GlowingLine id="hor-line" className='w-screen h-2' />
      </div>} */}
      {themeData?.theme?.key === "dark" && <div className='absolute pointer-events-none opacity-0 top-0 left-0 bg-text animate-shoot_x animate-duration-[3s]'>
        <GlowingLine id="ver-line" className='w-screen h-1 rotate-90 -translate-x-[50%]' />
      </div>}
      {themeData?.theme?.key === "dark" && <div className='absolute pointer-events-none opacity-0 top-0 left-0 bg-text animate-shoot_x animate-duration-[3s] animate-delay-[.2s]'>
        <GlowingLine id="ver-line" className='w-screen h-2 rotate-90 -translate-x-[50%]' />
      </div>}
      {themeData?.theme?.key === "dark" && <div className='absolute pointer-events-none opacity-0 top-0 left-0 bg-text animate-shoot_x animate-duration-[3s] animate-delay-[.4s]'>
        <GlowingLine id="ver-line" className='w-screen h-2 rotate-90 -translate-x-[50%]' />
      </div>}
      {themeData?.theme?.key === "dark" && <div className='absolute pointer-events-none opacity-0 top-0 left-0 bg-text animate-shoot_x animate-duration-[3s] animate-delay-[.8s]'>
        <GlowingLine id="ver-line" className='w-screen h-3 rotate-90 -translate-x-[50%]' />
      </div>}
      {themeData?.theme?.key === "dark" && <div className='absolute pointer-events-none opacity-0 top-0 left-0 bg-text animate-shoot_x animate-duration-[3s] animate-delay-[1s]'>
        <GlowingLine id="ver-line" className='w-screen h-4 rotate-90 -translate-x-[50%]' />
      </div>}
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
                    'w-full hidden lg:flex flex-row justify-start items-start',
                }}
              />
            </div>
            <div className='w-full justify-center col-span-2'>
              <SocialIcons
                disabledAnimation
                classes={{
                  container:
                    'w-full flex lg:hidden flex-row justify-center items-start',
                }}
              />
            </div>
            <div className='bg-transparent flex flex-col-reverse justify-center items-end pr-10'>
              <LanguageSetting
                classes={{
                  container: 'flex h-fit mx-2 my-2 lg:my-0 hidden lg:flex',
                }}
              />
            </div>

            <div className='bg-transparent'></div>
            <div className='bg-transparent flex justify-center items-start lg:items-center col-span-2'>
              <div className='bg-transparent p-2 flex flex-col justify-start items-center'>
                <AnimationView.SlideLTR delay={2000}>
                  <BannerAvartar classes={{ container: ' flex lg:hidden' }} />
                </AnimationView.SlideLTR>
                <AnimationView.TextAppearance delay={2000}>
                  <EczarText
                    content='Sr. Full stack JS developer'
                    className='hidden sm:flex text-center mt-6'
                  />
                  <EczarText
                    content='Sr. JS developer'
                    className='flex sm:hidden text-center mt-6'
                  />
                  <div className='text-text text-1xl lg:text-2xl whitespace-normal text-wrap text-center mt-4 lg:mr-6'>
                    {t(
                      'I am passionate about crafting robust and scalable products, employing top-tier software architecture principles'
                    )}
                  </div>

                  <div className='w-full mt-6'>
                    <DevelopmentIcons />
                  </div>
                  <div className='flex flex-row justify-center items-center mt-6 w-full'>
                    <div className='text-text text-1xl lg:text-2xl whitespace-normal mr-2'>
                      {t(
                        'Find me at'
                      )}
                    </div>
                    <Animates.DrawingBorderButton
                      className='h-fit flex'
                      onClick={() => {
                        window.open(
                          'https://drive.google.com/file/d/19N3MxtJ0xl52mv5NsEz4_aEJyeZqSEHK/view?usp=sharing',
                          '_blank'
                        );
                      }}
                    >
                      <div className='flex flex-row items-center'>
                        <FaDownload className='mr-2' />
                        {t('Resume')}
                      </div>
                    </Animates.DrawingBorderButton>
                  </div>
                </AnimationView.TextAppearance>
              </div>
            </div>
            <div className='bg-transparent'>
              <BannerAvartar classes={{ container: ' hidden lg:flex' }} />
            </div>

            <div className='bg-transparent hidden lg:flex justify-start items-end p-2'>
              <AnimationView.FadeInLTR delay={2800}>
                <UserInfo />
              </AnimationView.FadeInLTR>
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
