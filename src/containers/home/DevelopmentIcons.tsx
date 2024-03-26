import { FaReact, FaPython, FaGithub, FaNodeJs   } from 'react-icons/fa';
import { TbBrandReactNative, TbBrandTypescript } from 'react-icons/tb';
import { FaGitlab } from "react-icons/fa6";
import { SiDotnet, SiVitess, SiTailwindcss } from "react-icons/si";


export const DevelopmentIcons = () => {
  return (
    <div className='w-full flex flex-row flex-wrap justify-center items-start'>
      <a
        target='_blank'
        title="ReactJS"
        href='https://react.dev/'
        className='m-2 md:m-4 cursor-pointer rounded-full hover:scale-110 hover:text-text-active my-2'
      >
        <FaReact color="#0c7fa5" className='w-4 h-4 md:w-8 md:h-8' />
      </a>
      <a
        target='_blank'
        title="NodeJS"
        href='https://react.dev/'
        className='m-2 md:m-4 cursor-pointer rounded-full hover:scale-110 hover:text-text-active my-2'
      >
        <FaNodeJs color="#0c7fa5" className='w-4 h-4 md:w-8 md:h-8' />
      </a>
      <a
        target='_blank'
        title="React native"
        href='https://reactnative.dev/'
        className='m-2 md:m-4 cursor-pointer rounded-full hover:scale-110 hover:text-text-active my-2'
      >
        <TbBrandReactNative color="#0c7fa5" className='w-4 h-4 md:w-8 md:h-8' />
      </a>
      <a
        target='_blank'
        title="Typescript"
        href=''
        className='m-2 md:m-4 cursor-pointer rounded-full hover:scale-110 hover:text-text-active my-2'
      >
        <TbBrandTypescript className='w-4 h-4 md:w-8 md:h-8' />
      </a>
      <a
        target='_blank'
        title="Tailwindcss"
        href=''
        className='m-2 md:m-4 cursor-pointer rounded-full hover:scale-110 hover:text-text-active my-2'
      >
        <SiTailwindcss className='w-4 h-4 md:w-8 md:h-8' />
      </a>
      <a
        target='_blank'
        title="Python"
        href='https://www.python.org/'
        className='m-2 md:m-4 cursor-pointer rounded-full hover:scale-110 hover:text-text-active my-2'
      >
        <FaPython color="rgb(100, 200, 255)" className='w-4 h-4 md:w-8 md:h-8' />
      </a>
      <a
        target='_blank'
        title="Dotnet"
        href='https://learn.microsoft.com/en-us/dotnet'
        className='m-2 md:m-4 cursor-pointer rounded-full hover:scale-110 hover:text-text-active my-2'
      >
        <SiDotnet color="rgb(0, 117, 180)" className='w-4 h-4 md:w-8 md:h-8' />
      </a>
      <a
        target='_blank'
        title="GitLab"
        href=''
        className='m-2 md:m-4 cursor-pointer rounded-full hover:scale-110 hover:text-text-active my-2'
      >
        <FaGitlab className='w-4 h-4 md:w-8 md:h-8' />
      </a>
      <a
        target='_blank'
        title="Dotnet"
        href=''
        className='m-2 md:m-4 cursor-pointer rounded-full hover:scale-110 hover:text-text-active my-2'
      >
        <FaGithub className='w-4 h-4 md:w-8 md:h-8' />
      </a>
      <a
        target='_blank'
        title="Vite"
        href=''
        className='m-2 md:m-4 cursor-pointer rounded-full hover:scale-110 hover:text-text-active my-2'
      >
        <SiVitess className='w-4 h-4 md:w-8 md:h-8' />
      </a>
    </div>
  );
};
