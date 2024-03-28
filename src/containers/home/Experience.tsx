import { IListItem, LazyLoadImage, ListView, TitleText } from "@/components/index";
import { useTranslate } from "@/hooks/index";
import { SkillItem, skillData } from "./Skills";
import { ReactNode, useMemo } from "react";
import defaultImage from "@/assets/images/default_image.jpg"
import fujinet from "@/assets/images/fujinet.png"
import gameLoft from "@/assets/images/gameloft.png"
import titan from "@/assets/images/titan.png"
import { Tooltip } from "flowbite-react";

export interface Project {
  id: number;
  name: string;
  techStack: string;
  teamSize: number;
  description: ReactNode | string;
}
export interface ExperienceItem {
  id: number;
  start: Date;
  end?: Date;
  description: ReactNode | string;
  companyName?: string;
  conpanyLogo?: string;
  site?: string;
  projects?: Project[];
  skills?: SkillItem[];
}

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    start: new Date("01/07/2015"),
    end: new Date("01/09/2015"),
    site: "https://www.fujinet.net",
    description: "Offshore - AI research and development",
    companyName: "Fujinet",
    conpanyLogo: fujinet,
    projects: [],
    skills: [skillData["Java"], skillData["HTML/CSS/JS"]],
  },
  {
    id: 2,
    start: new Date("01/09/2015"),
    end: new Date("01/10/2016"),
    site: "https://www.gameloft.com/gameloft-studios/saigon",
    description: "Passionate & creative talents of the gaming industry",
    companyName: "GameLoft",
    conpanyLogo: gameLoft,
    projects: [{
      id: 1,
      name: "Contra",
      teamSize: 1,
      techStack: "J2me",
      description: ""
    }, {
      id: 2,
      name: "Asphalt Nitro",
      teamSize: 10,
      techStack: "C/C++, Java",
      description: ""
    }],
    skills: [skillData["Java"], skillData["C/C++"]],
  },
  {
    id: 3,
    start: new Date("01/10/2016"),
    end: new Date("01/04/2017"),
    site: "https://citynow.vn/",
    description: "Transforming the world through technology",
    companyName: "Citynow",
    conpanyLogo: "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-1/301950845_436355955152459_1195302355091238014_n.png?stp=dst-png_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=_8I6RLYiQqoAX_6YSDN&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfCUvQK96NurgLKfzs5v_IIv_7zvTnGePYujRCJpkgToKA&oe=66087E4C",
    projects: [{
      id: 3,
      name: "Delorean",
      teamSize: 7,
      techStack: "ReactJS, ScalaJS, PostgreSQL",
      description: "ERP"
    }, {
      id: 4,
      name: "Swallow",
      teamSize: 7,
      techStack: "ReactJS, ScalaJS, PostgreSQL",
      description: "Japan Study & Job Recruiter in the past, and citynow home page at current (https://citynow.vn/)"
    }],
    skills: [skillData["ReactJS"], skillData["ScalaJS"], skillData["GIT Flow"], skillData["PostgreSQL"]],
  },
  {
    id: 4,
    start: new Date("01/05/2017"),
    end: new Date("01/12/2018"),
    site: "#",
    description: "Company is a family",
    companyName: "Kolab LLC / Curio",
    conpanyLogo: "https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/signboard_closed.png",
    projects: [{
      id: 5,
      name: "Meastro",
      teamSize: 15,
      techStack: "ReactJS, .Net, SQL server, Jira",
      description: "Celebrity Event Planning Platform"
    }, {
      id: 6,
      name: "WorkID",
      teamSize: 3,
      techStack: "ReactJS, ExpressJS, PostgreSQL, Jira",
      description: "Job recruitment website"
    }],
    skills: [skillData["ReactJS"], skillData["Jira"], skillData["GIT Flow"]],
  },
  {
    id: 5,
    start: new Date("01/01/2019"),
    end: new Date("01/06/2021"),
    site: "https://www.titancorpvn.com/",
    description: "INSPIRE YOUR WORK",
    companyName: "Titan Technology Corporation",
    conpanyLogo: titan,
    projects: [{
      id: 6,
      name: "Auvenir",
      teamSize: 7,
      techStack: "ReactJS, .Net, SQL server, Micro-service, Jira",
      description: "Oursourcing project for the Auvenir"
    }],
    skills: [skillData["ReactJS"], skillData[".Net"], skillData["SQL"], skillData["Jira"], skillData["MicroServices"]],
  },
  {
    id: 6,
    start: new Date("01/07/2021"),
    end: new Date("01/06/2022"),
    site: "https://isofh.com/",
    description: "Leading MedTech",
    companyName: "ISofh",
    conpanyLogo: "https://isofh.com/images/logo.png",
    projects: [{
      id: 7,
      name: "Care pathway", // Chỉ đạo tuyến
      teamSize: 2,
      techStack: "ReactJS, Java",
      description: "Medical management"
    }, {
      id: 8,
      name: "Command center", // Trung tâm điều hành
      teamSize: 2,
      techStack: "ReactJS, Java",
      description: "Medical management"
    }],
    skills: [skillData["ReactJS"], skillData["HTML/CSS/JS"], skillData["webpack"], skillData["Medical"]],
  },
  {
    id: 7,
    start: new Date("01/07/2022"),
    end: new Date("01/04/2023"),
    site: "https://0xtool.io",
    description: "Sharks tracker",
    companyName: "Oxtool team",
    conpanyLogo: "https://vn.cloud-ace.com/wp-content/uploads/2023/10/0xtool.jpg",
    projects: [{
      id: 9,
      name: "0xtool",
      teamSize: 2,
      techStack: "ReactJS, NodeJS, mongodb, blockchain, web3",
      description: "NFT and Token Tracking Web Platform"
    }],
    skills: [skillData["ReactJS"], skillData["TypeScript"], skillData["HTML/CSS/JS"], skillData["Blockchain"]],
  },
  {
    id: 8,
    start: new Date("01/04/2023"),
    site: "https://www.titancorpvn.com/",
    description: "INSPIRE YOUR WORK",
    companyName: "Titan Technology Corporation",
    conpanyLogo: titan,
    projects: [{
      id: 10,
      name: "CMS",
      teamSize: 7,
      techStack: "ReactJS, .Net-core",
      description: "CMS for the Auvenir Commerce"
    }, {
      id: 11,
      name: "Auvenir Comerce",
      teamSize: 7,
      techStack: "ReactJS, .Net-core, micro-services",
      description: "Auditing platform for Auvenir"
    }, {
      id: 12,
      name: "Flymore",
      teamSize: 10,
      techStack: "ReactJS, Ts.ed, typescript",
      description: "The website selling aircraft equipment"
    }, {
      id: 13,
      name: "TiTan core",
      teamSize: 10,
      techStack: "ReactJS, .Net-core, typescript, mono-repository, vitest, npm publish",
      description: "Source base for TiTan projects"
    }],
    skills: [
      skillData["ReactJS"], skillData["TypeScript"],
      skillData[".Net"], skillData["HTML/CSS/JS"], skillData["Python"],
      skillData["TypeORM"], skillData["SQL"], skillData["PostgreSQL"],
      skillData["webpack"], skillData["NPM Publish"], skillData["GIT Flow"], skillData["Jira"],
      skillData["MicroServices"]
    ]
  },
]

export const Experience = () => {
  const { t } = useTranslate();

  const experienceItems: IListItem[] = useMemo(() => {
    return experienceData.map((item) => {
      return {
        key: `exp-${item.id.toString()}`,
        className: "w-full",
        content: <div className="w-full flex flex-row justify-between">
          <div className="flex flex-row items-center">
            <div className="">
              <LazyLoadImage
                src={item.conpanyLogo || defaultImage}
                imageClass="w-16 h-16 rounded-full mx-2 border-solid  border-[1px] border-text  shadow-lg shadow-inner"
              />
            </div>
            <div className="flex flex-col">
              <a target="_blank" href={item.site} className="text-text-active underline text-lg font-bold">{item.companyName ? t(item.companyName) : t("Freelancer")}</a>
              <div className="text-sm whitespace-normal text-nowrap">
                {typeof item.description === "string" ? t(item.description) : item.description}
              </div>
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center">{
            item.projects?.map((project) => {
              return <Tooltip key={`project-${project.id}`} content={
                <div className="flex flex-col w-full p-2">
                  <div className="text-sm whitespace-normal text-nowrap">
                    {`${t("Team size")}: ${project.teamSize}`}
                  </div>
                  <div className="text-sm whitespace-normal text-nowrap">
                    {`${t("Techstack")}: ${project.techStack}`}
                  </div>
                  <div className="text-sm whitespace-normal text-nowrap">
                    {`${t("Summary")}: `}
                    {typeof project.description === "string" ? t(project.description) : project.description}
                  </div>
                </div>
              }>
                <div key={`project-${project.id}`}
                  className="p-2 m-2 text-xs border-solid border-[1px] shadow-inner rounded-md hover:text-text-active">
                  {project.name}
                </div>
              </Tooltip>
            })
          }</div>
          <div className="flex flex-col items-end">
            <div className="text-text-active text-sm">{`${new Date(item.start).toLocaleDateString()} - ${item.end ? new Date(item.end).toLocaleDateString() : t("Current")}`}</div>
            <div className="flex flex-row justify-end items-center flex-wrap w-40 md:w-64">
              {item.skills?.map((skill) => <div key={skill.key} className="m-2">{skill.image("w-4 h-4")}</div>)}
            </div>
          </div>
        </div>,
        isActive: false,
        onClick: (_item?: IListItem) => { },
        onHover: (_item?: IListItem) => { },
      } as IListItem
    })
  }, [])

  return <div className="w-full px-2 py-4">
    <TitleText content='Experiences' />
    <div className="w-full flex flex-col italic text-text mt-3 p-4 bg-black-100 rounded-lg pr-6">
      <ListView
        unstyled
        classes={{
          container: "w-full px-2"
        }}
        items={experienceItems.reverse()}
      />
    </div>
  </div>
}