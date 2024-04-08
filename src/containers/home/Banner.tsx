import {
  ScreenSection,
  VideoBackground,
  ContentSection,
  GridView,
  AnimationView,
} from '@/components/viewFrame';
import backgroundVideoLight from '@/assets/video/background.mp4';
import { DevelopmentIconsMobile } from './DevelopmentIconsMobile';
import { BannerAvartar } from './BannerAvartar';
import { LanguageSetting } from './LanguageSetting';
import { Animates, LoadingPageAnim, ThemeSettingBoard } from '@/components/index';
import { ThemeContext } from '@/context/theme';
import { useTranslate } from '@/hooks/useTranslate';
import { SocialIcons } from './SocialIcons';
import preloadImage from "@/assets/images/preload-image.jpg"
import { HomeActionType, HomeContext, HomeSectionIds } from "@/context/home";
import { FaDownload } from 'react-icons/fa';
import { BsCaretDownFill } from 'react-icons/bs';

export const Banner = () => {
  const themeData = ThemeContext.useDataContext();
  const homeDispatcher = HomeContext.useDataDispatchContext();
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
            <div className='relative overflow-visible'>
              <div className='absolute'>
                <div className='bg-transparent p-2 flex flex-col'>
                  <SocialIcons
                    classes={{
                      container:
                        'w-full hidden lg:flex flex-col justify-start items-start',
                    }}
                  />
                </div>
              </div>
            </div>
            <div className='w-full justify-center items-center col-span-2'>
              <AnimationView.FadeIn delay={3000} className='mt-14 hidden lg:block'>
                <Animates.WaterText
                  content='Tài Trần Thanh'
                  className='text-center'
                  textClass=' text-[2xl] lg:text-[3rem] font-bold'
                />
              </AnimationView.FadeIn>
            </div>
            <div className='bg-transparent flex flex-row justify-end items-start pr-2'>
              <div className='flex flex-row w-fit'>
                <div className='flex justify-center items-center'>
                  <LanguageSetting classes={{ container: "mx-2" }} />
                </div>
                <div className='flex justify-center items-center'>
                  <ThemeSettingBoard classes={{ container: 'flex relative my-2 items-start' }} />
                </div>
              </div>

            </div>

            <div className='row-span-12 bg-transparent'></div>
            <div className='row-span-12 bg-transparent flex justify-center items-start col-span-2'>
              <div className='bg-transparent p-2 flex flex-col justify-start items-center'>
                <BannerAvartar classes={{ container: ' flex lg:hidden' }} />
                <AnimationView.TextAppearance delay={3000}>
                  <div className='text-text text-lg lg:text-xl whitespace-normal text-wrap text-center mt-4 lg:mr-6'>
                    {t(
                      "I'm a web application developer who's passionate about creating and building applications on the web platform. Outside of work, I enjoy reading fantasy novels and history. The worlds of martial arts fiction and historical stories are major sources of inspiration for me, helping me relax and learn about significant periods in human history."
                    )}
                  </div>

                  <div className='text-text text-lg lg:text-xl whitespace-normal text-wrap text-center mt-4 lg:mr-6'>
                    {t(
                      "I'm excited to connect and share more about my interests and work with everyone!"
                    )}
                  </div>
                  <div className='w-full mt-6 lg:hidden'>
                    <DevelopmentIconsMobile />
                  </div>
                  <div className='flex flex-row justify-center items-center mt-6 w-full'>
                    <div className='text-text text-lg lg:text-xl whitespace-nowrap mr-2'>
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
            <div className='row-span-12 bg-transparent'>
              <BannerAvartar classes={{ container: ' hidden lg:flex' }} />
            </div>

            <div className='bg-transparent'>
              <div className='bg-transparent hidden lg:flex justify-start items-end p-2'>
              </div>
            </div>

            <div className='bg-transparent col-span-2 flex flex-row justify-center '>
              <AnimationView.FadeIn delay={4000}>
                <div className='flex w-full h-full justify-center items-end'>
                  <div className='z-40'>
                    <Animates.RippleButton className='mb-4 flex flex-col items-center justify-center cursor-pointer' id="project-section-btn"
                      onClick={() => homeDispatcher &&
                        homeDispatcher({
                          type: HomeActionType.updateActiveSection,
                          payload: {
                            value: HomeSectionIds.projects,
                          },
                        })}
                    >
                      <BsCaretDownFill className='w-4 h-4' />
                    </Animates.RippleButton>
                  </div>
                </div>
              </AnimationView.FadeIn>
            </div>
            <div className='bg-transparent p-2'>
            </div>
          </GridView>
        </ContentSection>
      </div>
    </div>

  return (
    <ScreenSection
      className={`flex flex-row justify-center items-center bg-cover shadow-lg rounded-b-lg `}
      id={HomeSectionIds.banner}
      overflowHidden
    >
      <LoadingPageAnim alive={1950} />
      {themeData?.theme?.key != "dark" ? <VideoBackground
        id='banner-background'
        src={backgroundVideoLight}
        preloadSrc={preloadImage}
        className='bg-cover relative'
      >
        {content}
      </VideoBackground>
        : content}
    </ScreenSection>
  );
};
