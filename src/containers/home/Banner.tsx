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
import { Animates, EczarText, ThemeSettingBoard } from '@/components/index';
import { UserInfo } from './UserInfo';
import { ThemeContext } from '@/context/theme';
import { useTranslate } from '@/hooks/useTranslate';
import { SocialIcons } from './SocialIcons';
import preloadImage from "@/assets/images/preload-image.jpg"
import { HomeSectionIds } from "@/context/home";
import { FaDownload } from 'react-icons/fa';
import { goToSection } from '@/utils/index';

export const Banner = () => {
  const themeData = ThemeContext.useDataContext();

  const { t } = useTranslate();

  const content =
    <div className='relative w-full h-full'>
      <Animates.GlowingBallAnim id="ball-1" className='animation-slide_down_vh bottom-0 right-0' delay={2500} />
      <Animates.GlowingBallAnim id="ball-1" className='animation-slide_down_vh flex lg:hidden top-8 -left-16' delay={2500} />
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
            </div>
            <div className='bg-transparent flex flex-row justify-end items-start pr-2'>
              <div className='flex flex-row w-fit'>
                <div>
                  <LanguageSetting classes={{ container: "mx-2" }} />
                </div>
                <div>
                  <ThemeSettingBoard classes={{ container: 'flex relative my-2 items-start' }} />
                </div>
              </div>
            </div>

            <div className='bg-transparent'></div>
            <div className='bg-transparent flex justify-center items-start lg:items-center col-span-2'>
              <div className='bg-transparent p-2 flex flex-col justify-start items-center'>
                <BannerAvartar classes={{ container: ' flex lg:hidden' }} />
                <AnimationView.TextAppearance delay={3000}>
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
                    <div className='text-text text-1xl lg:text-2xl whitespace-nowrap mr-2'>
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
              <AnimationView.FadeInLTR delay={3000}>
                <UserInfo />
              </AnimationView.FadeInLTR>
            </div>
            <div className='bg-transparent col-span-2 flex flex-row justify-center '>
              <div className='flex w-full h-full justify-center items-end'>
                <div className='z-40'>
                  <Animates.RippleButton className='w-32 h-12 cursor-pointer bg-red-400' id="project-section-btn"
                    onClick={() => goToSection("projects")}
                  >
                    {t("Projects")}
                  </Animates.RippleButton>
                </div>
              </div>
            </div>
            <div className='bg-transparent p-2'>

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
