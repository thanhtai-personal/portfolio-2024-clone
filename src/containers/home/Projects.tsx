import {
  Animates,
  AnimationView,
  IListItem,
  LazyLoadImage,
  ListView,
  ScreenSection,
  TitleText,
} from '@/components/index';
import { AnimationRef, useTranslate } from '@/hooks/index';
import { SkillItem, skillData } from './Skills';
import { ReactNode, useMemo, useRef, useState } from 'react';
import defaultImage from '@/assets/images/default_image.jpg';
import { HomeActionType, HomeContext, HomeSectionIds } from '@/context/home';
import { BsCaretDownFill, BsCaretUpFill } from 'react-icons/bs';

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
  const animationRef = useRef<AnimationRef>(null);
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
    <AnimationView.SlideUp ref={animationRef} className={`
      absolute z-[70] w-screen h-screen top-0 left-0
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
        <div className='absolute top-0 left-[45%]'>
          <AnimationView.FadeIn delay={100}>
            <div className='flex w-full h-full justify-center items-start'>
              <div className='z-40'>
                <Animates.RippleButton className='w-32 h-16 mb-4 flex flex-col items-center justify-center cursor-pointer' id="project-section-btn"
                  onClick={() => {
                    if (animationRef && animationRef.current) {
                      animationRef.current.triggerQuitAnimate("animate-disappear_slide");
                    }
                    setTimeout(() => {
                      homeDispatcher &&
                        homeDispatcher({
                          type: HomeActionType.updateActiveSection,
                          payload: {
                            value: HomeSectionIds.banner,
                          },
                        })
                    }, 700)
                  }}
                >
                  <BsCaretUpFill className='w-4 h-4' />
                  {t("Home")}
                </Animates.RippleButton>
              </div>
            </div>
          </AnimationView.FadeIn>
        </div>
      </ScreenSection>
    </AnimationView.SlideUp>
  );
};
