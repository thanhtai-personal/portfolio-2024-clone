import {
  AnimationView,
  ScrollingButton,
  MenuButton,
  ThemeSettingBoard,
} from '@/components/index';
import { SectionButtons } from "./SectionButtons";
import { HomeActionType, HomeContext } from "@/context/home";
import { LanguageSetting } from './LanguageSetting';

export const RightActionPanel = () => {
  const homeData = HomeContext.useDataContext();
  const homeDispatcher = HomeContext.useDataDispatchContext();

  return (
    <>
      {!homeData?.isOpenActionPane && <MenuButton
        id={'right-action-menu'}
        ariaControls={'action-menu'}
        classes={{
          container: "fixed right-4 top-4 w-fit z-50",
          button: homeData?.isOpenActionPane ? 'text-text hover' : 'text-text',
        }}
        onClick={() => homeDispatcher && homeDispatcher({
          type: HomeActionType.openActionPane,
          payload: {
            isOpenActionPane: !homeData?.isOpenActionPane
          }
        })}
      >
        <div></div>
      </MenuButton>}
      <div
        id='right-panel-wrapper'
        className={`flex fixed w-20 top-0 right-0 flex-col z-50 py-4 hover:shadow-xl ${homeData?.isOpenActionPane ? 'bg-[rgba(255,0,0,0.15)] h-screen' : 'bg-[rgba(0,0,0,0.01)] h-fit'
          }`}

      >
        {homeData?.isOpenActionPane && (
          <AnimationView.FadeInRTL className='h-full w-full'>
            <div
              id='right-panel-content'
              className='flex flex-col h-full w-full justify-between items-center'
            >
              <div>
                <MenuButton
                  id={'right-action-menu'}
                  ariaControls={'action-menu'}
                  classes={{
                    container: "fixed right-4 top-4 w-fit",
                    button: homeData?.isOpenActionPane ? 'text-text hover' : 'text-text',
                  }}
                  onClick={() => homeDispatcher && homeDispatcher({
                    type: HomeActionType.openActionPane,
                    payload: {
                      isOpenActionPane: !homeData?.isOpenActionPane
                    }
                  })}
                >
                  <div></div>
                </MenuButton>
              </div>
              <div className='flex flex-col justify-start items-center'>
                <LanguageSetting
                  classes={{
                    container: 'flex h-fit mx-2 my-2 lg:my-0 lg:hidden',
                  }}
                />
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
    </>
  );
};
