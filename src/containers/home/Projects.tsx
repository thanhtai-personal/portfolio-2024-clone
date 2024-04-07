import {
  Animates,
  AnimationView,
  IListItem,
  LazyLoadImage,
  ListView,
  ScreenSection,
  TitleText,
} from '@/components/index';
import { useTranslate } from '@/hooks/index';
import { SkillItem, skillData } from './Skills';
import { ReactNode, useMemo, useState } from 'react';
import defaultImage from '@/assets/images/default_image.jpg';
import { HomeActionType, HomeContext, HomeSectionIds } from '@/context/home';
import { CursorShadow } from '@/components/animates/CursorShadow';
import { BsCaretDownFill } from 'react-icons/bs';

export interface Project {
  id: number;
  name: string;
  techStack: string;
  teamSize: number;
  description: ReactNode | string;
}
export interface SideProjectItem {
  id: number;
  description: ReactNode | string;
  projectName?: string;
  projectLogo?: string;
  site?: string;
  projects?: Project[];
  skills?: SkillItem[];
}

const experienceData: SideProjectItem[] = [
  {
    id: 171,
    site: 'https://www.hptool.vn/',
    description:
      'HP Tool — Online Shopping is a learning project of mine, aimed at utilizing Next.js to construct an e-commerce website. Data is crawled through the Cheerio tool and stored in an Atlas database powered by MongoDB. The user interface comprises a products page, showcasing and facilitating the search of all available products. Additionally, an admin page is included to manage operations such as posting new content or editing crawled data.',
    projectName: 'HP Tool',
    projectLogo:
      'https://firebasestorage.googleapis.com/v0/b/hptool.appspot.com/o/images%2Fhplogo_full.png?alt=media&token=1a55da38-c7ec-4c0e-bd71-18f68ed7134d',
    skills: [
      skillData['ReactJS'],
      skillData['NextJS'],
      skillData['Vercel'],
      skillData['MongoDB'],
      skillData['fireBase'],
      skillData['cheerioCrawler'],
    ],
  },
];

export const Projects = () => {
  const [prepareQuit, setPrepareQuit] = useState(false);
  const homeDispatcher = HomeContext.useDataDispatchContext();
  const { t } = useTranslate();

  const experienceItems: IListItem[] = useMemo(() => {
    return experienceData.map(item => {
      return {
        key: `exp-${item.id.toString()}`,
        className: 'w-full',
        content: (
          <div className='w-full flex flex-row justify-between'>
            <div className='flex flex-row items-center'>
              <div className='hidden lg:flex w-[16rem] h-16'>
                <LazyLoadImage
                  src={item.projectLogo || defaultImage}
                  className='w-[16rem] h-16'
                  imageClass='w-[16rem] h-16 rounded-full mx-2 border-solid  border-[1px] border-text shadow-lg shadow-inner'
                />
              </div>
              <div className='flex flex-col lg:ml-4'>
                <a
                  target='_blank'
                  href={item.site}
                  className='text-text-active underline text-lg font-bold'
                >
                  {item.projectName ? t(item.projectName) : t('Freelancer')}
                </a>
                <div className='text-sm whitespace-normal text-wrap'>
                  {typeof item.description === 'string'
                    ? t(item.description)
                    : item.description}
                </div>
                <div className='flex flex-row justify-start items-center flex-wrap md:w-64'>
                  {item.skills?.map((skill, index) => (
                    <div
                      key={skill.key || `skill-undefined-${index}`}
                      className='m-2'
                    >
                      {skill.image('w-4 h-4')}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ),
        isActive: false,
        onClick: (_item?: IListItem) => { },
        onHover: (_item?: IListItem) => { },
      } as IListItem;
    });
  }, []);

  return (
    <AnimationView.SlideUp quitAnimate={prepareQuit ? "animate-disappear_slide" : ""} className={`
      absolute z-[70] w-screen h-screen overflow-auto bg-red-300 top-0 left-0
    `}>
      <ScreenSection
        className='flex flex-row justify-center items-center bg-cover shadow-lg rounded-b-lg'
        id={HomeSectionIds.banner}
        overflowHidden
      >
        <div className='w-full px-2 py-4'>
          <TitleText content='Projects' />
          <div className='w-full flex flex-col italic text-text mt-3 p-4  pr-6 rounded-lg'>
            <ListView
              unstyled
              classes={{
                container: 'w-full px-2',
              }}
              items={experienceItems}
            />
          </div>
        </div>
        <div className='absolute bottom-0 left-[45%]'>
          <AnimationView.FadeIn delay={100}>
            <div className='flex w-full h-full justify-center items-end'>
              <div className='z-40'>
                <Animates.RippleButton className='w-32 h-16 flex flex-col items-center justify-center cursor-pointer text-red-500' id="project-section-btn"
                  onClick={() => {
                    setPrepareQuit(true);
                    setTimeout(() => {
                      homeDispatcher &&
                        homeDispatcher({
                          type: HomeActionType.updateActiveSection,
                          payload: {
                            value: HomeSectionIds.banner,
                          },
                        })
                    }, 1000)
                  }}
                >
                  {t("Home")}
                  <BsCaretDownFill className='w-4 h-4' />
                </Animates.RippleButton>
              </div>
            </div>
          </AnimationView.FadeIn>
        </div>
      </ScreenSection>
    </AnimationView.SlideUp>
  );
};
