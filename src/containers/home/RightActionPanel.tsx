import {
  AnimationView,
  ScrollingButton,
  MenuButton,
  ThemeSettingBoard,
} from '@/components/index';
import { SectionButtons } from "./SectionButtons";
import { HomeActionType, HomeContext } from "@/context/home";

export const RightActionPanel = () => {
  const homeData = HomeContext.useDataContext();
  const homeDispatcher = HomeContext.useDataDispatchContext();

  return (
    <div
      id='right-panel-wrapper'
      className={`flex fixed w-20 top-0 right-0 flex-col h-screen z-40 py-4 hover:shadow-xl ${
        homeData?.isOpenActionPane ? 'bg-[rgba(255,0,0,0.15)]' : 'bg-[rgba(0,0,0,0.01)]'
      }`}
      onMouseEnter={() => homeDispatcher && homeDispatcher({
        type: HomeActionType.openActionPane,
        payload: {
          isOpenActionPane: true
        }
      })}
      onMouseLeave={() => homeDispatcher && homeDispatcher({
        type: HomeActionType.openActionPane,
        payload: {
          isOpenActionPane: false
        }
      })}
    >
      <MenuButton
        id={'right-action-menu'}
        ariaControls={'action-menu'}
        classes={{
          container: "hidden sm:flex",
          button: homeData?.isOpenActionPane ? 'text-text hover' : 'text-text',
        }}
      >
        <div></div>
      </MenuButton>
      {homeData?.isOpenActionPane && (
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
                hidden
              />
            </div>
          </div>
        </AnimationView.FadeInRTL>
      )}
    </div>
  );
};
