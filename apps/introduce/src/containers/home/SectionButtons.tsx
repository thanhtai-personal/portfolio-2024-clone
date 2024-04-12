import { HomeActionType, HomeContext, HomeSectionIds } from '@/context/home';
import { useTranslate } from '@/hooks/useTranslate';
import { ButtonGroup, Button } from 'flowbite-react';

export const SectionButtons = ({ vertical }: { vertical?: boolean }) => {
  const { t } = useTranslate();

  const homeDispatcher = HomeContext.useDataDispatchContext();
  const homeData = HomeContext.useDataContext();

  return (
    <div className='flex flex-col'>
      <ButtonGroup className={`flex ${vertical ? 'flex-col' : 'flex-row'}`}>
        <Button
          className={` duration-200 ${vertical ? 'm-1 rounded-lg' : ''} ${homeData?.activeSection === HomeSectionIds.banner ? " -translate-x-2" : ""}`}
          onClick={() =>
            homeDispatcher &&
            homeDispatcher({
              type: HomeActionType.updateActiveSection,
              payload: {
                value: HomeSectionIds.banner,
              },
            })
          }
        >
          {t('Home')}
        </Button>
        <Button
          className={` duration-200 ${vertical ? 'm-1 rounded-lg' : ''} ${homeData?.activeSection === HomeSectionIds.summary ? " -translate-x-2" : ""}`}
          onClick={() =>
            homeDispatcher &&
            homeDispatcher({
              type: HomeActionType.updateActiveSection,
              payload: {
                value: HomeSectionIds.summary,
              },
            })
          }
        >
          {t('Summary')}
        </Button>
        <Button
          className={` duration-200 ${vertical ? 'm-1 rounded-lg' : ''} ${homeData?.activeSection === HomeSectionIds.skills ? " -translate-x-2" : ""}`}
          onClick={() =>
            homeDispatcher &&
            homeDispatcher({
              type: HomeActionType.updateActiveSection,
              payload: {
                value: HomeSectionIds.skills,
              },
            })
          }
        >
          {t('Skills')}
        </Button>
        <Button
          className={` duration-200 ${vertical ? 'm-1 rounded-lg' : ''} ${homeData?.activeSection === HomeSectionIds.experience ? " -translate-x-2" : ""}`}
          onClick={() =>
            homeDispatcher &&
            homeDispatcher({
              type: HomeActionType.updateActiveSection,
              payload: {
                value: HomeSectionIds.experience,
              },
            })
          }
        >
          {t('Experience')}
        </Button>
        <Button
          className={` duration-200 ${vertical ? 'm-1 rounded-lg' : ''} ${homeData?.activeSection === HomeSectionIds.education ? " -translate-x-2" : ""}`}
          onClick={() =>
            homeDispatcher &&
            homeDispatcher({
              type: HomeActionType.updateActiveSection,
              payload: {
                value: HomeSectionIds.education,
              },
            })
          }
        >
          {t('Education')}
        </Button>
        <Button
          className={` duration-200 ${vertical ? 'm-1 rounded-lg' : ''} ${homeData?.activeSection === HomeSectionIds.projects ? " -translate-x-2" : ""}`}
          onClick={() =>
            homeDispatcher &&
            homeDispatcher({
              type: HomeActionType.updateActiveSection,
              payload: {
                value: HomeSectionIds.projects,
              },
            })
          }
        >
          {t('My Projects')}
        </Button>
      </ButtonGroup>
    </div>
  );
};
