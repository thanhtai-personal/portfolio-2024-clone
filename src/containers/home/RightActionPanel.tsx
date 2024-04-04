import {
  AnimationView,
  ScrollingButton,
  MenuButton,
  ThemeSettingBoard,
} from '@/components/index';
import { useState } from 'react';
import { SectionButtons } from "./SectionButtons";

export const RightActionPanel = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      id='right-panel-wrapper'
      className={`flex fixed w-20 top-0 right-0 flex-col h-screen z-40 py-4 hover:shadow-xl ${
        isHover ? 'bg-[rgba(255,0,0,0.15)]' : 'bg-[rgba(0,0,0,0.01)]'
      }`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <MenuButton
        id={'right-action-menu'}
        ariaControls={'action-menu'}
        classes={{
          button: isHover ? 'text-text hover' : 'text-text',
        }}
      >
        <div></div>
      </MenuButton>
      {isHover && (
        <AnimationView.FadeInRTL className='h-full w-full'>
          <div
            id='right-panel-content'
            className='flex flex-col h-full w-full py-4 justify-between items-center'
          >
            <div className='flex'>
              <ThemeSettingBoard classes={{ container: 'flex relative' }} />
            </div>
            <div className='flex'>
              <SectionButtons vertical />
            </div>
            <div className='w-full flex justify-center items-end'>
              <ScrollingButton
                scrollContainer={document.getElementById('scroll-container')}
                // listSection={[
                //   'section-banner',
                //   'section-summary',
                //   'section-skills',
                //   'section-experience',
                //   'section-education',
                //   'section-side-projects',
                // ]}
                // offset={250}
                hidden
              />
            </div>
          </div>
        </AnimationView.FadeInRTL>
      )}
    </div>
  );
};
