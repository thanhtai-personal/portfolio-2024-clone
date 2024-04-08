import {
  Animates,
  AnimationView,
  ContentSection,
  GridView,
  IListItem,
  LazyLoadImage,
  ListView,
  ScreenSection,
  ThemeSettingBoard,
  TitleText,
  VideoBackground,
} from '@/components/index';
import { AnimationRef, useTranslate } from '@/hooks/index';
import { SkillItem, Skills, skillData } from './Skills';
import { ReactNode, useMemo, useRef } from 'react';
import preloadImage from '@/assets/images/preload-image.jpg';
import { HomeActionType, HomeContext, HomeSectionIds } from '@/context/home';
import { BsCaretUpFill } from 'react-icons/bs';
import { LanguageSetting } from './LanguageSetting';

export interface Project {
  id: number;
  name: string;
  techStack: string;
  teamSize: number;
  description: ReactNode | string;
}
export interface ProjectItem {
  id: number;
  description: ReactNode | string;
  responsibility: ReactNode | string;
  projectName?: string;
  projectLogo?: string;
  site?: string;
  projects?: Project[];
  skills?: SkillItem[];
}

export const Projects = () => {
  const animationRef = useRef<AnimationRef>(null);
  const homeDispatcher = HomeContext.useDataDispatchContext();
  // const themeData = ThemeContext.useDataContext();
  const { t } = useTranslate();

  const projectItems: IListItem[] = useMemo(() => {
    return projectData.map(item => {
      return {
        key: `exp-${item.id.toString()}`,
        className: 'w-full',
        content: (
          <div className='w-full flex flex-row justify-between'>
            <div className='flex flex-row items-center'>
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
                <div className='text-sm whitespace-normal text-wrap mt-2'>
                  {typeof item.responsibility === 'string'
                    ? t(item.responsibility)
                    : item.responsibility}
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
      absolute z-[70] w-screen h-auto top-0 left-0
    `}>
      {/* {themeData?.theme?.key === "dark" && <Animates.CursorShadow />} */}
      <div className='w-full h-screen bg-background'>
        <VideoBackground
          id='page-background'
          classes={{
            container: 'opacity-30',
          }}
          preloadSrc={preloadImage}
          src='https://video.wixstatic.com/video/d47472_58cce06729c54ccb935886c4b3647274/1080p/mp4/file.mp4'
          className='flex justify-center w-full h-full'
        >
          <div></div>
        </VideoBackground>
        <div className='absolute top-0 left-0 bg-transparent w-screen h-screen overflow-auto'>
          <ContentSection
            className='flex flex-row justify-center items-center bg-cover shadow-lg rounded-b-lg'
          >
            <GridView
              cols={4}
              gap={'1'}
            >
              <div></div>
              <div className=' col-span-2 flex justify-center items-start'>
                <div className='mt-16'>
                  <TitleText content='My Projects' />
                </div>
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

              <div className=' col-span-4 row-span-12'>
                <div className='w-full px-2 py-4'>
                  <div className='w-full flex flex-col italic text-text mt-3 p-4 pr-6 rounded-lg'>
                    <ListView
                      unstyled
                      classes={{
                        container: 'w-full px-2',
                      }}
                      items={projectItems}
                    />
                  </div>
                </div>
              </div>
            </GridView>
            <div className='absolute top-0 left-0 w-full justify-center pointer-events-none'>
              <AnimationView.FadeIn delay={100}>
                <div className='flex w-full h-full justify-center items-start'>
                  <div className='z-40'>
                    <Animates.RippleButton className=' pointer-events-auto mb-4 flex flex-col items-center justify-center cursor-pointer' id="project-section-btn"
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
                    </Animates.RippleButton>
                  </div>
                </div>
              </AnimationView.FadeIn>
            </div>
          </ContentSection>
        </div>
      </div>
    </AnimationView.SlideUp>
  );
};



var projectData: ProjectItem[] = [
  {
    id: 1,
    site: 'TiTan Technology',
    projectName: 'Auvenir/Deloitte Auditing platform',
    projectLogo:
      'https://firebasestorage.googleapis.com/v0/b/hptool.appspot.com/o/images%2Fhplogo_full.png?alt=media&token=1a55da38-c7ec-4c0e-bd71-18f68ed7134d',
    description:
      'Developed by more than 200 developers, this is a significant outsourced project and the flagship endeavor of TiTan. The backend is built on .Net Core microservices, the database is a SQL project, and the frontend is developed in ReactJS.',
    responsibility: 'My responsibility in this project is to implement new features and fix bugs. Some of the features I have worked on include creating an engagement screen, handling logout in multi-tab, multi-browser scenarios, and managing content updates,...',
    skills: [
      skillData["ReactJS"],
      skillData["Javascript"],
      skillData["SQL"],
      skillData[".Net"],
    ],
  },
  {
    id: 2,
    projectName: 'Flymore',
    description: 'Aside from the Auvenir/Deloitte Auditing platform, Flymore is another project of TiTan. It is developed by approximately 20 developers and is a TypeScript full-stack e-commerce application available on both web and mobile platforms, utilizing PostgreSQL. This project employs a microservices architecture communicated by event-driven in its structure',
    responsibility: 'My responsibility in this project is to implement new features and fix bugs. Some of the features I have worked on include creating agreements and handling the bidding system, and creating a migrated database script.',
    projectLogo: '',
    site: '',
    skills: [
      skillData["ReactJS"],
      skillData["Javascript"],
      skillData["TypeScript"],
      skillData["HTML/CSS/JS"],
      skillData["TypeORM"],
      skillData["PostgreSQL"],
    ],
  },
  {
    id: 3,
    projectName: 'Titan core',
    description: 'TiTan Core is a pivotal project within TiTan, designed to create modular bases for utilization across various other projects within the JavaScript stack. This monorepo source encompasses several tiers, including client modules, SDKs, applications, and domains. Clients aggregate all UI packages, applications encapsulate business logic packages, domains provide API packages, and SDKs consolidate all SDK packages that facilitate the connection and usage of API packages by UI packages.',
    responsibility: 'In this project, my primary responsibility lies in implementing all UI packages and SDK packages for the initial phase. This includes React-core, unittest-vitest, SDKs for user management and authentication, as well as UI packages for authentication and user management. Additionally, I am tasked with documenting each component thoroughly',
    projectLogo: '',
    site: '',
    skills: [
      skillData["ReactJS"],
      skillData["Javascript"],
      skillData["TypeScript"],
      skillData["HTML/CSS/JS"],
      skillData["NPM Publish"],
    ],
  },
  {
    id: 4,
    projectName: '0xtool',
    description: '0xtool is a project that offers tools for tracking token shark accounts, reviewing tokens, and NFTs. This project is being developed by myself and one other developer.',
    responsibility: 'My responsibility lies in the UI aspect of the project, which is being handled using React with TypeScript.',
    projectLogo: '',
    site: '',
    skills: [
      skillData["ReactJS"],
      skillData["Javascript"],
      skillData["TypeScript"],
      skillData["HTML/CSS/JS"],
    ],
  },
  {
    id: 5,
    projectName: 'Command center',
    description: 'The Command Center project in the medical field serves as an operational hub within a hospital. It connects to another Electronic Medical Record project of ISOFH to display patient records, manage inpatient and outpatient information, and oversee medical record management.',
    responsibility: 'This project utilizes Java for the backend and ReactJS with Redux for the frontend. My primary responsibility in this project is to implement all UI features',
    projectLogo: '',
    site: '',
    skills: [
      skillData["ReactJS"],
      skillData["Javascript"],
      skillData["HTML/CSS/JS"],
    ],
  },
  {
    id: 6,
    projectName: 'Maestro',
    description: 'The Maestro Celebrity Event Planning Platform, developed by approximately 20 developers, utilizes .NET for the backend and ReactJS for the frontend.',
    responsibility: 'In this project, my role as a frontend developer entails implementing various features on ReactJS. Specifically, I focus on functionalities like calendar event management and report printing services',
    projectLogo: '',
    site: '',
    skills: [
      skillData["ReactJS"],
      skillData["Javascript"],
      skillData["HTML/CSS/JS"],
    ],
  },
  {
    id: 7,
    projectName: 'Delorean',
    description: 'Delorean marks the inaugural project of CityNow, outsourced for a Japanese company, aiming to develop an ERP system tailored to their needs. This undertaking was carried out by a small team of 7 developers. The database was built on PostgreSQL, while ScalaJS was utilized for the backend and ReactJS for the frontend.',
    responsibility: 'In this project, my role as a full-stack JS developer entails implementing various features. Specifically, I am responsible for handling authentication and user management functionalities',
    projectLogo: '',
    site: '',
    skills: [
      skillData["ReactJS"],
      skillData["ScalaJS"],
      skillData["HTML/CSS/JS"],
      skillData["Javascript"],
      skillData["PostgreSQL"],
    ],
  },
  {
    id: 8,
    projectName: 'Swallow',
    description: 'Swallow, a product of CityNow, focuses on Japan Study & Job Recruitment, offering insights into job and study opportunities in Japan. Following Delorean, this project is built by a small team of 7 developers, utilizing a JavaScript stack.',
    responsibility: 'My role in this project involves implementing full features from backend to frontend. A notable contribution of mine is the development of a rich text editor, facilitating the posting of content on public sites.',
    projectLogo: '',
    site: '',
    skills: [
      skillData["ReactJS"],
      skillData["ScalaJS"],
      skillData["HTML/CSS/JS"],
      skillData["Javascript"],
      skillData["PostgreSQL"],
    ],
  },
  {
    id: 9,
    projectName: 'Asphalt Nitro',
    description: 'Asphalt Nitro is an adrenaline-pumping racing game developed by Gameloft, known for its high-speed action and stunning graphics. As part of the development team, I had the opportunity to contribute to this exciting project by addressing bugs across multiple platforms.',
    responsibility: 'Working on Asphalt Nitro allowed me to dive into the intricacies of game development and hone my skills in debugging and troubleshooting. With its multi-platform nature, I tackled issues across various devices, ensuring smooth gameplay experiences for players on both mobile and desktop platforms.',
    projectLogo: '',
    site: '',
    skills: [
      skillData["C/C++"],
      skillData["Java"],
    ],
  },
  {
    id: 10,
    projectName: 'TankVN (Battle city)',
    description: 'TankVN is a nostalgic yet innovative project inspired by the classic Battle City game. With a fresh user interface and exciting new features, TankVN brings the beloved retro gaming experience into the modern era. TankVN is developed by a small team with me and 1 other utilizing microsoft XNA 4.0, and AI technique for enemy objects in game (find the shortest way to go and kill player).',
    responsibility: 'At its core, TankVN retains the essence of Battle City, where players navigate a maze-like battlefield, strategically maneuvering their tanks to eliminate enemy forces and defend their base. However, TankVN goes beyond mere homage by introducing captivating new elements, including visually stunning graphics and challenging boss battles.',
    projectLogo: '',
    site: '',
    skills: [
      skillData[".Net"],
      skillData["SQL"],
    ],
  },
  {
    id: 11,
    projectName: 'HP tool',
    description: 'HP Tool — Online Shopping is a learning project of mine, aimed at utilizing Next.js to construct an e-commerce website. Data is crawled through the Cheerio tool and stored in an Atlas database powered by MongoDB. The user interface comprises a products page, showcasing and facilitating the search of all available products. Additionally, an admin page is included to manage operations such as posting new content or editing crawled data.',
    responsibility: 'My private project',
    projectLogo: '',
    site: '',
    skills: [
      skillData["ReactJS"],
      skillData["NextJS"],
      skillData["HTML/CSS/JS"],
      skillData["TypeScript"],
      skillData["Javascript"],
      skillData["fireBase"],
      skillData["cheerioCrawler"],
      skillData["Vercel"],
    ],
  }
];