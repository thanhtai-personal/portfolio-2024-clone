import {
  Accordion,
  Card,
  GridView,
  LazyLoadImage,
  TitleText,
} from '@/components/index';
import { useTranslate } from '@/hooks/index';
import { SkillItem, skillData } from './Skills';
import { ReactNode } from 'react';
import defaultImage from '@/assets/images/default_image.jpg';

export interface Project {
  id: number;
  name: string;
  techStack: string;
  teamSize: number;
  description: ReactNode | string;
  video?: string;
  videoAlt?: string;
}
export interface EducationItem {
  id: number;
  start: Date;
  end?: Date;
  description: ReactNode | string;
  universityName?: string;
  universityLogo?: string;
  site?: string;
  projects?: Project[];
  skills?: SkillItem[];
}

const educationData: EducationItem[] = [
  {
    id: 1,
    start: new Date('05/09/2011'),
    end: new Date('05/09/2015'),
    site: 'https://hcmus.edu.vn/',
    description:
      "The University of Natural Sciences is a center for training, research, development, and application of science and technology, providing human resources and scientific and technological products to meet the requirements of the country's socio-economic development.",
    universityName: 'Ho Chi Minh City University of Science',
    universityLogo:
      'https://hcmus.edu.vn/wp-content/uploads/2023/04/Logo-chinh-e1681638380305.png',
    projects: [
      {
        id: 14,
        name: 'Offline news',
        teamSize: 1,
        techStack: 'Java Android, C#',
        description: 'Android & window phone application',
        videoAlt: defaultImage,
      },
      {
        id: 15,
        name: 'TankVN',
        teamSize: 2,
        techStack: 'C#, ms XNA 4.0',
        description: 'Classical tank game',
        video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/LwJa69CBARk?si=SvPwDfP-0KtUQ70r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      },
      {
        id: 16,
        name: 'Online shop',
        teamSize: 3,
        techStack: 'ASP.net 3.0, SQL server',
        description: 'Shopping online',
        video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/lZLfxjIOJcA?si=qlekt48f_ukCy0c9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      },
    ],
    skills: [
      skillData['Java'],
      skillData['HTML/CSS/JS'],
      skillData['C/C++'],
      skillData['.Net'],
    ],
  },
];

export const Education = () => {
  const { t } = useTranslate();

  const item = educationData.at(0);

  return (
    <div className='w-full px-2 py-4'>
      <TitleText content='Educations' />
      <div className='w-full flex flex-col italic text-text mt-3 p-4 bg-black-100 rounded-lg pr-6 transition duration-200 ease-in-out'>
        <Accordion
          title={
            <div className='w-full flex flex-col sm:flex-row justify-between'>
              <div className='flex flex-row items-center justify-start'>
                <div className='w-20 h-20 hidden md:flex'>
                  <LazyLoadImage
                    src={item!.universityLogo || defaultImage}
                    imageClass='w-16 h-16 rounded-full mx-2 shadow-lg shadow-inner'
                  />
                </div>
                <div className='flex flex-col ml-6'>
                  <a
                    target='_blank'
                    href={item!.site}
                    className='text-text-active underline text-lg font-bold'
                  >
                    {item!.universityName ? t(item!.universityName) : t('---')}
                  </a>
                  <div className='text-sm'>
                    {typeof item!.description === 'string'
                      ? t(item!.description)
                      : item!.description}
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-end mt-3 sm:mt-0'>
                <div className='text-text-active text-sm'>{`${new Date(
                  item!.start
                ).toLocaleDateString()} - ${
                  item!.end
                    ? new Date(item!.end).toLocaleDateString()
                    : t('Current')
                }`}</div>
                <div className='flex flex-row justify-end items-center flex-wrap w-40 md:w-64'>
                  {item!.skills?.map(skill => (
                    <div key={skill.key} className='m-2'>
                      {skill.image('w-4 h-4')}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          }
        >
          <div className='bg-secondary-300 p-4 rounded-lg flex flex-col'>
            <div className="font-bold">{t("Projects")}</div>
            <GridView
              gap='2'
              classes={{
                container:
                  'mt-8 overflow-x-hidden grid-cols-1 md:grid-cols-2',
              }}
            >
              {item?.projects?.map(project => {
                return (
                  <div key={`project-${project.id}`} className=" overflow-hidden">
                    <Card
                      title={project.name}
                      description={project.description as string}
                      defaultFullDes
                      embeddedVideo={project.video}
                      embeddedAlt={project.videoAlt}
                    >
                    </Card>
                  </div>
                );
              })}
            </GridView>
          </div>
        </Accordion>
      </div>
    </div>
  );
};
