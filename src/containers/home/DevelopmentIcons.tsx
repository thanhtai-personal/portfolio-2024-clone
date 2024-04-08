import { FaReact, FaGithub, FaNodeJs } from 'react-icons/fa';
import { TbBrandTypescript, TbBrandJavascript } from 'react-icons/tb';
import { SiDotnet, SiTailwindcss } from "react-icons/si";
import { Animates } from '@/components/index';


export const DevelopmentIcons = ({ className }: { className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      <Animates.SpaceIn id="react"
        delay={1800}
        className='absolute -translate-x-[150px] translate-y-[200px] duration-200'
      >
        <Animates.BubbleWrapper id="react">
          <a
            target='_blank'
            href='https://react.dev/'
            className='flex flex-col justify-center items-center m-2 md:m-4 rounded-full hover:scale-110 hover:text-text-active my-2'
          >
            <FaReact color="#0c7fa5" className='w-4 h-4 md:w-8 md:h-8' />
            <div className='text-text-active text-nowrap text-xs'>ReactJS</div>
          </a>
        </Animates.BubbleWrapper>
      </Animates.SpaceIn>
      <Animates.SpaceIn id="nodejs" delay={2000} className='absolute -translate-x-[280px] translate-y-[200px] duration-[250ms]'>
        <Animates.BubbleWrapper id="nodejs">
          <a
            target='_blank'
            href='https://react.dev/'
            className='flex flex-col justify-center items-center m-2 md:m-4 rounded-full hover:scale-110 hover:text-text-active my-2'
          >
            <FaNodeJs color="#0c7fa5" className='w-4 h-4 md:w-8 md:h-8' />
            <div className='text-text text-nowrap text-xs'>NodeJS</div>
          </a>
        </Animates.BubbleWrapper>
      </Animates.SpaceIn>
      <Animates.SpaceIn id="JS" delay={2200} className='absolute -translate-x-[400px] translate-y-[200px] duration-[300ms]'>
        <Animates.BubbleWrapper id="JS">
          <a
            target='_blank'
            href=''
            className='flex flex-col justify-center items-center m-2 md:m-4 rounded-full hover:scale-110 hover:text-text-active my-2'
          >
            <TbBrandJavascript color="var(--text-color)" className='w-4 h-4 md:w-8 md:h-8' />
            <div className='text-text-active text-nowrap text-xs'>HTML/CSS/JS</div>
          </a>
        </Animates.BubbleWrapper>
      </Animates.SpaceIn>
      <Animates.SpaceIn id="TS" delay={2300} className='absolute -translate-x-[520px] translate-y-[200px] duration-[350ms]'>
        <Animates.BubbleWrapper id="TS">
          <a
            target='_blank'
            href=''
            className='flex flex-col justify-center items-center m-2 md:m-4 rounded-full hover:scale-110 hover:text-text-active my-2'
          >
            <TbBrandTypescript color="var(--text-color)" className='w-4 h-4 md:w-8 md:h-8' />
            <div className='text-text-active text-nowrap text-xs'>Typescript</div>
          </a>
        </Animates.BubbleWrapper>
      </Animates.SpaceIn>
      <Animates.SpaceIn id="Tailwindcss" delay={2500} className='absolute -translate-x-[640px] translate-y-[200px] duration-[350ms]'>
        <Animates.BubbleWrapper id="Tailwindcss">
          <a
            target='_blank'
            href=''
            className='flex flex-col justify-center items-center m-2 md:m-4 rounded-full hover:scale-110 hover:text-text-active my-2'
          >
            <SiTailwindcss color="var(--text-color)" className='w-4 h-4 md:w-8 md:h-8' />
            <div className='text-text text-nowrap text-xs'>Tailwindcss</div>
          </a>
        </Animates.BubbleWrapper>
      </Animates.SpaceIn>
      <Animates.SpaceIn id="dotnet" delay={2700} className='absolute -translate-x-[780px] translate-y-[200px] duration-[350ms]'>
        <Animates.BubbleWrapper id="dotnet">
          <a
            target='_blank'
            href='https://learn.microsoft.com/en-us/dotnet'
            className='flex flex-col justify-center items-center m-2 md:m-4 rounded-full hover:scale-110 hover:text-text-active my-2'
          >
            <SiDotnet color="rgb(0, 117, 180)" className='w-4 h-4 md:w-8 md:h-8' />
            <div className='text-text text-nowrap text-xs'>.Net</div>
          </a>
        </Animates.BubbleWrapper>
      </Animates.SpaceIn>
      <Animates.SpaceIn id="git" delay={2900} className='absolute -translate-x-[900px] translate-y-[200px] duration-[350ms]'>
        <Animates.BubbleWrapper id="git">
          <a
            target='_blank'
            href=''
            className='flex flex-col justify-center items-center m-2 md:m-4 rounded-full hover:scale-110 hover:text-text-active my-2'
          >
            <FaGithub color="var(--text-color)" className='w-4 h-4 md:w-8 md:h-8' />
            <div className='text-text text-nowrap text-xs'>Git</div>
          </a>
        </Animates.BubbleWrapper>
      </Animates.SpaceIn>
    </div>
  );
};
