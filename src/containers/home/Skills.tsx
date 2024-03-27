import { GridView, SelectList, Card, TitleText } from '@/components/index';
import { ReactNode, useState } from 'react';
import {
  DiDotnet,
  DiJava,
  DiJavascript,
  DiMongodb,
  DiPostgresql,
} from 'react-icons/di';
import {
  FaDatabase,
  FaGamepad,
  FaGit,
  FaHandHoldingMedical,
  FaHtml5,
  FaJira,
  FaNodeJs,
  FaNpm,
  FaPython,
  FaReact,
  FaTrello,
} from 'react-icons/fa';
import { GiCommercialAirplane } from 'react-icons/gi';
import { SiBackendless, SiNativescript, SiWebpack } from 'react-icons/si';
import {
  TbArrowsTransferUp,
  TbBrandNextjs,
  TbBrandReactNative,
  TbSql,
} from 'react-icons/tb';

enum SkillType {
  FrontEnd = 'FrontEnd',
  BackEnd = 'BackEnd',
  Deployment = 'Deployment',
  Database = 'Database',
  Tools = 'Tools',
  Business = 'Business',
  Game = 'Game',
}

export interface SkillItem {
  key?: string;
  image?: string | ReactNode;
  types: SkillType[];
  rating: number;
  ratingDetail: string;
  shortDescription: string;
}

const skillData: { [key: string]: SkillItem } = {
  ReactJS: {
    types: [SkillType.FrontEnd],
    image: <FaReact className='animate-spin w-16 h-16' />,
    rating: 100,
    ratingDetail: 'Rating based on familiarity',
    shortDescription:
      'ReactJS is a JavaScript library for building user interfaces, particularly for single-page applications. It allows developers to create reusable UI components and efficiently manage the application state.',
  },
  'HTML/CSS/JS': {
    types: [SkillType.FrontEnd],
    image: <FaHtml5 className='w-16 h-16' />,
    rating: 90,
    ratingDetail: 'Rating based on familiarity',
    shortDescription:
      'The combination of HTML, CSS, and JavaScript refers to the fundamental technologies used for building and styling web pages. HTML provides the structure, CSS controls the presentation and layout, and JavaScript adds interactivity and behavior to web pages.',
  },
  ReactNative: {
    types: [SkillType.FrontEnd],
    image: <TbBrandReactNative className='animate-spin w-16 h-16' />,
    rating: 50,
    ratingDetail: 'Rating based on familiarity',
    shortDescription:
      'React Native is a framework for building mobile applications using JavaScript and React. It allows developers to write code once and deploy it across multiple platforms, such as iOS and Android, while maintaining a native-like user experience.',
  },
  Javascript: {
    types: [SkillType.FrontEnd, SkillType.BackEnd],
    image: <DiJavascript className='w-16 h-16' />,
    rating: 90,
    ratingDetail: 'Rating based on familiarity',
    shortDescription:
      'JS is a scripting language capable of interacting with web browsers to create dynamic web pages and various other interactive features',
  },
  ExpressJS: {
    types: [SkillType.BackEnd],
    image: <FaNodeJs className='w-16 h-16' />,
    rating: 50,
    ratingDetail: 'Rating based on familiarity',
    shortDescription:
      'ExpressJS is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. It is designed to create APIs and web servers quickly and easily with JavaScript',
  },
  NextJS: {
    types: [SkillType.BackEnd],
    image: <TbBrandNextjs className='w-16 h-16' />,
    rating: 50,
    ratingDetail: 'Rating based on familiarity',
    shortDescription:
      'Next.js is a React framework for building server-side rendered and statically generated web applications. It provides features such as automatic code splitting, server-side rendering, and route pre-fetching, making it easy to build fast and scalable React applications.',
  },
  Java: {
    types: [SkillType.BackEnd],
    image: <DiJava className='w-16 h-16' />,
    rating: 90,
    ratingDetail: 'Rating based on familiarity',
    shortDescription:
      'Java is a high-level, object-oriented programming language developed by Sun Microsystems (now owned by Oracle). It is known for its platform independence, strong typing, and extensive libraries, making it widely used for building desktop, web, and mobile applications.',
  },
  '.Net': {
    types: [SkillType.BackEnd],
    image: <DiDotnet className='w-16 h-16' />,
    rating: 40,
    ratingDetail: 'Rating based on familiarity',
    shortDescription:
      '.NET is a software development framework developed by Microsoft that supports building and running applications for Windows, macOS, Linux, iOS, and Android. It provides a comprehensive set of tools, libraries, and runtime environments for developing various types of applications, including web, desktop, mobile, cloud, and IoT applications.',
  },
  Python: {
    types: [SkillType.BackEnd],
    image: <FaPython className='w-16 h-16' />,
    rating: 10,
    ratingDetail: 'Rating based on familiarity',
    shortDescription:
      "Python is a high-level, interpreted programming language known for its simplicity and readability. It supports multiple programming paradigms and is widely used for web development, data analysis, artificial intelligence, scientific computing, and more. Python's extensive standard library and thriving ecosystem of third-party packages make it a versatile and popular choice among developers.",
  },
  TypeORM: {
    types: [SkillType.BackEnd],
    image: <FaDatabase className='w-16 h-16' />,
    rating: 30,
    ratingDetail: 'Rating based on familiarity',
    shortDescription:
      'TypeORM is an Object-Relational Mapping (ORM) library for TypeScript and JavaScript. It enables developers to work with relational databases using object-oriented programming techniques, allowing for easier database integration and manipulation. TypeORM supports various database systems, including PostgreSQL, MySQL, SQLite, and others.',
  },
  Phaser: {
    types: [SkillType.Game],
    image: <FaGamepad className='w-16 h-16' />,
    rating: 40,
    ratingDetail: 'Rating based on familiarity',
    shortDescription:
      'Phaser is a fast and flexible HTML5 game framework built with JavaScript. It provides a comprehensive set of tools and features for game development, including physics engines, sprite management, input handling, sound effects, and more. Phaser is widely used for creating both 2D and 2.5D games for web and mobile platforms.',
  },
  SQL: {
    types: [SkillType.Database],
    image: <TbSql className='w-16 h-16' />,
    rating: 70,
    ratingDetail: 'Rating based on familiarity',
    shortDescription:
      'SQL stands for Structured Query Language. It is a programming language used to manage and manipulate relational databases. SQL allows users to perform various operations such as querying, updating, inserting, and deleting data in a database.',
  },
  MongoDB: {
    types: [SkillType.Database, SkillType.BackEnd],
    image: <DiMongodb className='w-16 h-16' />,
    rating: 40,
    ratingDetail: 'Rating based on familiarity',
    shortDescription:
      'MongoDB is a popular NoSQL database system known for its flexibility and scalability. It stores data in a flexible, JSON-like format called BSON and is designed for handling large volumes of data across distributed systems. MongoDB is widely used for various types of applications, including web, mobile, and IoT, where flexible data structures and scalability are required.',
  },
  PostgreSQL: {
    types: [SkillType.Database, SkillType.BackEnd],
    image: <DiPostgresql className='w-16 h-16' />,
    rating: 60,
    ratingDetail: 'Rating based on familiarity',
    shortDescription:
      'PostgreSQL is a powerful open-source relational database management system (RDBMS) known for its reliability, robustness, and advanced features. It supports SQL (Structured Query Language) and is highly extensible, offering features such as ACID compliance, transactions, triggers, and stored procedures. PostgreSQL is commonly used for mission-critical applications, data warehousing, and analytics',
  },
  webpack: {
    types: [SkillType.Deployment],
    image: <SiWebpack className='w-16 h-16' />,
    rating: 20,
    ratingDetail: 'Rating based on familiarity',
    shortDescription:
      'Webpack is a popular module bundler for JavaScript applications. It takes modules with dependencies and generates static assets that represent those modules. Webpack is often used in modern web development workflows to bundle, optimize, and manage front-end assets such as JavaScript, CSS, and images. It also supports features like code splitting, hot module replacement, and tree shaking for efficient application development.',
  },
  'NPM Publish': {
    types: [SkillType.Deployment],
    image: <FaNpm className='w-16 h-16' />,
    rating: 50,
    ratingDetail: 'Rating based on familiarity',
    shortDescription:
      "NPM (Node Package Manager) is the default package manager for Node.js. It allows developers to publish and distribute packages of reusable code to the broader JavaScript community. By using the 'npm publish' command, developers can share their packages on the NPM registry, making them available for others to install and use in their projects.",
  },
  'GIT Flow': {
    types: [SkillType.Deployment, SkillType.Tools],
    image: <FaGit className='w-16 h-16' />,
    rating: 90,
    ratingDetail: 'Rating based on familiarity',
    shortDescription:
      'Git Flow is a branching model for Git, introduced by Vincent Driessen, that defines a set of rules for managing branches in a Git repository.',
  },
  JIRA: {
    types: [SkillType.Tools],
    image: <FaJira className='w-16 h-16' />,
    rating: 60,
    ratingDetail: 'Rating based on familiarity',
    shortDescription:
      'Jira is a popular project management tool developed by Atlassian. It is used by teams to plan, track, and manage software development projects and tasks',
  },
  TRELLO: {
    types: [SkillType.Tools],
    image: <FaTrello className='w-16 h-16' />,
    rating: 60,
    ratingDetail: 'Rating based on familiarity',
    shortDescription:
      'Trello is a web-based project management tool that utilizes a system of boards, lists, and cards to help teams organize and prioritize their work',
  },
  Logistic: {
    types: [SkillType.Business],
    image: <TbArrowsTransferUp className='w-16 h-16' />,
    rating: 80,
    ratingDetail: 'Rating based on familiarity',
    shortDescription:
      'Logistics refers to the process of planning, implementing, and controlling the efficient and effective flow of goods, services, and information from the point of origin to the point of consumption. It involves activities such as transportation, warehousing, inventory management, packaging, and distribution, with the goal of meeting customer requirements while minimizing costs and maximizing profitability. Logistics plays a critical role in supply chain management, ensuring that products are delivered to the right place, at the right time, and in the right condition.',
  },
  Medical: {
    types: [SkillType.Business],
    image: <FaHandHoldingMedical className='w-16 h-16' />,
    rating: 80,
    ratingDetail: 'Rating based on familiarity',
    shortDescription:
      'Medical refers to the field of healthcare that involves the diagnosis, treatment, and prevention of diseases and disorders in humans. It encompasses various disciplines such as medicine, nursing, pharmacy, dentistry, and allied health professions. Medical professionals work to promote health, alleviate suffering, and improve the quality of life for individuals and communities. They use a combination of medical knowledge, diagnostic tools, therapeutic interventions, and patient care to address a wide range of health issues, from minor ailments to life-threatening conditions. Medical practice is guided by ethical principles, evidence-based guidelines, and regulatory standards to ensure the safety and well-being of patients',
  },
  'E-commerce': {
    types: [SkillType.Business],
    image: <GiCommercialAirplane className='w-16 h-16' />,
    rating: 70,
    ratingDetail: 'Rating based on familiarity',
    shortDescription:
      'E-commerce, short for electronic commerce, refers to the buying and selling of goods and services over the internet. E-commerce platforms often provide features such as online catalogs, shopping carts, secure payment gateways, and order processing systems to facilitate transactions between buyers and sellers. E-commerce has transformed the way businesses operate and how consumers shop, offering convenience, accessibility, and a global marketplace for products and services.',
  },
};

export const Skills = () => {
  const [filter, setFilter] = useState<{
    types?: SkillType[];
  }>({
    types: [],
  });

  return (
    <div className='w-full min-h-7 px-2 py-4'>
      <TitleText content='SKILLS' />
      <div className='w-full flex flex-col italic text-text mt-3 p-4 bg-black-100 rounded-lg'>
        <div className='flex flex-row'>
          <SelectList
            options={Object.keys(SkillType).map((key: string) => {
              return {
                key,
                value: key,
                name: SkillType[key as keyof typeof SkillType] as string,
              };
            })}
            value={filter.types?.at(0) || ''}
            onChange={(value: string) =>
              setFilter(prev => ({
                ...prev,
                types: value ? ([value] as SkillType[]) : [],
              }))
            }
          />
        </div>
        <GridView
          gap='2'
          classes={{
            container: 'mt-8 overflow-x-hidden grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
          }}
        >
          {Object.keys(skillData)
            .map((key: string) => ({
              key,
              ...(skillData[key as keyof typeof skillData] || {}),
            }))
            .filter((skillItem: SkillItem) => {
              return (
                filter.types?.length === 0 ||
                !!filter.types?.find(t => skillItem.types.includes(t))
              );
            })
            .map((item: SkillItem) => {
              return (
                <Card
                  renderImage={() => {
                    return (
                      <div className='w-full flex flex-row justify-center p-2 py-4'>
                        {item.image}
                      </div>
                    );
                  }}
                  rating={{
                    point: item.rating,
                    baseOn: item.ratingDetail,
                  }}
                  key={item?.key}
                  title={item.key}
                  description={item.shortDescription}
                />
              );
            })}
        </GridView>
      </div>
    </div>
  );
};
