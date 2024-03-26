import {
  ScreenSection,
  VideoBackground,
  ContentSection,
  GridView,
} from '@/components/viewFrame';
import backgroundVideoLight from '@/assets/video/background.mp4';
import backgroundVideoDark from '@/assets/video/background_dark.mp4';
import { SocialIcons } from './SocialIcons';
import { DevelopmentIcons } from './DevelopmentIcons';
import { BannerAvartar } from './BannerAvartar';
import { LanguageSetting } from './LanguageSetting';
import { EczarText } from './EczarText';
import { UserInfo } from './UserInfo';
import { ThemeContext } from '@/context/theme';
import { useMemo } from 'react';

export const Banner = () => {
  const themeData = ThemeContext.useDataContext();

  const videoSrc = useMemo(() => {
    return themeData?.theme?.key === 'dark'
      ? backgroundVideoDark
      : backgroundVideoLight;
  }, [themeData?.theme?.key]);

  return (
    <ScreenSection
      className='flex flex-row justify-center items-center bg-cover shadow-lg rounded-b-lg'
      overflowHidden
    >
      <VideoBackground src={videoSrc} className='bg-cover relative'>
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
                  <EczarText content='Web developer' />
                  <DevelopmentIcons />
                </div>
                <div className='bg-transparent col-span-2'></div>
                <div className='bg-transparent p-2'>
                  <LanguageSetting />
                </div>

                <div className='bg-transparent'></div>
                <div className='bg-transparent col-span-2'>
                  <BannerAvartar />
                </div>
                <div className='bg-transparent'></div>

                <div className='bg-transparent flex justify-start items-end p-2'>
                  <UserInfo />
                </div>
                <div className='bg-transparent col-span-2'></div>
                <div className='bg-transparent p-2'>
                  <SocialIcons />
                </div>
              </GridView>
            </ContentSection>
          </div>
        </div>
      </VideoBackground>
    </ScreenSection>
  );
};
