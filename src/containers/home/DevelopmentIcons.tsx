import { FaReact, FaGithub, FaNodeJs } from 'react-icons/fa';
import { TbBrandTypescript, TbBrandJavascript } from 'react-icons/tb';
import { SiDotnet, SiVitess, SiTailwindcss } from "react-icons/si";


export const DevelopmentIcons = ({ className }: { className?: string }) => {
  return (
    <div className={`w-full flex justify-center items-center overflow-hidden ${className}`}>
      <div className='w-full max-w-[90vw] md:max-w-[60vw] lg:max-w-lg flex flex-row flex-nowrap justify-center items-start marquee'>
        <a
          target='_blank'
          href='https://react.dev/'
          className='marquee__item flex flex-col justify-center items-center m-2 md:m-4 rounded-full hover:scale-110 hover:text-text-active my-2'
        >
          <FaReact color="#0c7fa5" className='w-4 h-4 md:w-8 md:h-8' />
          <div className='text-text-active text-nowrap text-xs'>ReactJS</div>
        </a>
        <a
          target='_blank'
          href='https://react.dev/'
          className='marquee__item flex flex-col justify-center items-center m-2 md:m-4 rounded-full hover:scale-110 hover:text-text-active my-2'
        >
          <FaNodeJs color="#0c7fa5" className='w-4 h-4 md:w-8 md:h-8' />
          <div className='text-text text-nowrap text-xs'>NodeJS</div>
        </a>
        <a
          target='_blank'
          href=''
          className='marquee__item flex flex-col justify-center items-center m-2 md:m-4 rounded-full hover:scale-110 hover:text-text-active my-2'
        >
          <TbBrandJavascript color="var(--text-color)" className='w-4 h-4 md:w-8 md:h-8' />
          <div className='text-text-active text-nowrap text-xs'>Javascript</div>
        </a>
        <a
          target='_blank'
          href=''
          className='marquee__item flex flex-col justify-center items-center m-2 md:m-4 rounded-full hover:scale-110 hover:text-text-active my-2'
        >
          <TbBrandTypescript color="var(--text-color)" className='w-4 h-4 md:w-8 md:h-8' />
          <div className='text-text-active text-nowrap text-xs'>Typescript</div>
        </a>
        <a
          target='_blank'
          href=''
          className='marquee__item flex flex-col justify-center items-center m-2 md:m-4 rounded-full hover:scale-110 hover:text-text-active my-2'
        >
          <SiTailwindcss color="var(--text-color)" className='w-4 h-4 md:w-8 md:h-8' />
          <div className='text-text text-nowrap text-xs'>Tailwindcss</div>
        </a>
        <a
          target='_blank'
          href='https://learn.microsoft.com/en-us/dotnet'
          className='marquee__item flex flex-col justify-center items-center m-2 md:m-4 rounded-full hover:scale-110 hover:text-text-active my-2'
        >
          <SiDotnet color="rgb(0, 117, 180)" className='w-4 h-4 md:w-8 md:h-8' />
          <div className='text-text text-nowrap text-xs'>.Net</div>
        </a>
        <a
          target='_blank'
          href=''
          className='marquee__item flex flex-col justify-center items-center m-2 md:m-4 rounded-full hover:scale-110 hover:text-text-active my-2'
        >
          <FaGithub color="var(--text-color)" className='w-4 h-4 md:w-8 md:h-8' />
          <div className='text-text text-nowrap text-xs'>Git</div>
        </a>
        <a
          target='_blank'
          href=''
          className='marquee__item flex flex-col justify-center items-center m-2 md:m-4 rounded-full hover:scale-110 hover:text-text-active my-2'
        >
          <SiVitess color="var(--text-color)" className='w-4 h-4 md:w-8 md:h-8' />
          <div className='text-text text-nowrap text-xs'>Vite</div>
        </a>

        <a
          target='_blank'
          href='https://react.dev/'
          className='marquee__item flex flex-col justify-center items-center m-2 md:m-4 rounded-full hover:scale-110 hover:text-text-active my-2'
        >
          <FaReact color="#0c7fa5" className='w-4 h-4 md:w-8 md:h-8' />
          <div className='text-text-active text-nowrap text-xs'>ReactJS</div>
        </a>
        <a
          target='_blank'
          href='https://react.dev/'
          className='marquee__item flex flex-col justify-center items-center m-2 md:m-4 rounded-full hover:scale-110 hover:text-text-active my-2'
        >
          <FaNodeJs color="#0c7fa5" className='w-4 h-4 md:w-8 md:h-8' />
          <div className='text-text text-nowrap text-xs'>NodeJS</div>
        </a>
        <a
          target='_blank'
          href=''
          className='marquee__item flex flex-col justify-center items-center m-2 md:m-4 rounded-full hover:scale-110 hover:text-text-active my-2'
        >
          <TbBrandJavascript color="var(--text-color)" className='w-4 h-4 md:w-8 md:h-8' />
          <div className='text-text-active text-nowrap text-xs'>Javascript</div>
        </a>
        <a
          target='_blank'
          href=''
          className='marquee__item flex flex-col justify-center items-center m-2 md:m-4 rounded-full hover:scale-110 hover:text-text-active my-2'
        >
          <TbBrandTypescript color="var(--text-color)" className='w-4 h-4 md:w-8 md:h-8' />
          <div className='text-text-active text-nowrap text-xs'>Typescript</div>
        </a>
        <a
          target='_blank'
          href=''
          className='marquee__item flex flex-col justify-center items-center m-2 md:m-4 rounded-full hover:scale-110 hover:text-text-active my-2'
        >
          <SiTailwindcss color="var(--text-color)" className='w-4 h-4 md:w-8 md:h-8' />
          <div className='text-text text-nowrap text-xs'>Tailwindcss</div>
        </a>
        <a
          target='_blank'
          href='https://learn.microsoft.com/en-us/dotnet'
          className='marquee__item flex flex-col justify-center items-center m-2 md:m-4 rounded-full hover:scale-110 hover:text-text-active my-2'
        >
          <SiDotnet color="rgb(0, 117, 180)" className='w-4 h-4 md:w-8 md:h-8' />
          <div className='text-text text-nowrap text-xs'>.Net</div>
        </a>
        <a
          target='_blank'
          href=''
          className='marquee__item flex flex-col justify-center items-center m-2 md:m-4 rounded-full hover:scale-110 hover:text-text-active my-2'
        >
          <FaGithub color="var(--text-color)" className='w-4 h-4 md:w-8 md:h-8' />
          <div className='text-text text-nowrap text-xs'>Git</div>
        </a>
        <a
          target='_blank'
          href=''
          className='marquee__item flex flex-col justify-center items-center m-2 md:m-4 rounded-full hover:scale-110 hover:text-text-active my-2'
        >
          <SiVitess color="var(--text-color)" className='w-4 h-4 md:w-8 md:h-8' />
          <div className='text-text text-nowrap text-xs'>Vite</div>
        </a>

        <a
          target='_blank'
          href='https://react.dev/'
          className='marquee__item flex flex-col justify-center items-center m-2 md:m-4 rounded-full hover:scale-110 hover:text-text-active my-2'
        >
          <FaReact color="#0c7fa5" className='w-4 h-4 md:w-8 md:h-8' />
          <div className='text-text-active text-nowrap text-xs'>ReactJS</div>
        </a>
        <a
          target='_blank'
          href='https://react.dev/'
          className='marquee__item flex flex-col justify-center items-center m-2 md:m-4 rounded-full hover:scale-110 hover:text-text-active my-2'
        >
          <FaNodeJs color="#0c7fa5" className='w-4 h-4 md:w-8 md:h-8' />
          <div className='text-text text-nowrap text-xs'>NodeJS</div>
        </a>
        <a
          target='_blank'
          href=''
          className='marquee__item flex flex-col justify-center items-center m-2 md:m-4 rounded-full hover:scale-110 hover:text-text-active my-2'
        >
          <TbBrandJavascript color="var(--text-color)" className='w-4 h-4 md:w-8 md:h-8' />
          <div className='text-text-active text-nowrap text-xs'>Javascript</div>
        </a>
        <a
          target='_blank'
          href=''
          className='marquee__item flex flex-col justify-center items-center m-2 md:m-4 rounded-full hover:scale-110 hover:text-text-active my-2'
        >
          <TbBrandTypescript color="var(--text-color)" className='w-4 h-4 md:w-8 md:h-8' />
          <div className='text-text-active text-nowrap text-xs'>Typescript</div>
        </a>
        <a
          target='_blank'
          href=''
          className='marquee__item flex flex-col justify-center items-center m-2 md:m-4 rounded-full hover:scale-110 hover:text-text-active my-2'
        >
          <SiTailwindcss color="var(--text-color)" className='w-4 h-4 md:w-8 md:h-8' />
          <div className='text-text text-nowrap text-xs'>Tailwindcss</div>
        </a>
        <a
          target='_blank'
          href='https://learn.microsoft.com/en-us/dotnet'
          className='marquee__item flex flex-col justify-center items-center m-2 md:m-4 rounded-full hover:scale-110 hover:text-text-active my-2'
        >
          <SiDotnet color="rgb(0, 117, 180)" className='w-4 h-4 md:w-8 md:h-8' />
          <div className='text-text text-nowrap text-xs'>.Net</div>
        </a>
        <a
          target='_blank'
          href=''
          className='marquee__item flex flex-col justify-center items-center m-2 md:m-4 rounded-full hover:scale-110 hover:text-text-active my-2'
        >
          <FaGithub color="var(--text-color)" className='w-4 h-4 md:w-8 md:h-8' />
          <div className='text-text text-nowrap text-xs'>Git</div>
        </a>
        <a
          target='_blank'
          href=''
          className='marquee__item flex flex-col justify-center items-center m-2 md:m-4 rounded-full hover:scale-110 hover:text-text-active my-2'
        >
          <SiVitess color="var(--text-color)" className='w-4 h-4 md:w-8 md:h-8' />
          <div className='text-text text-nowrap text-xs'>Vite</div>
        </a>
      </div>
    </div>
  );
};
