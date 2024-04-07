import { Animates } from "@/components/index"
import { ThemeContext } from "@/context/theme"

export const ShootingAnim = () => {
  const themeData = ThemeContext.useDataContext();

  return (
    <>
      {themeData?.theme?.key === "dark" && <div className='absolute pointer-events-none opacity-0 top-0 left-0 bg-text animate-shoot_x animate-duration-[3s] animate-delay-[.2s]'>
        <Animates.GlowingLineAnim id="ver-line-1" className='h-16 w-1 rotate-90 translate-x-[50%]' />
      </div>}
      {themeData?.theme?.key === "dark" && <div className='absolute pointer-events-none opacity-0 top-0 left-0 bg-text animate-shoot_x animate-duration-[3s] animate-delay-[.4s]'>
        <Animates.GlowingLineAnim id="ver-line-2" className='h-16 w-1 rotate-90 translate-x-[50%]' />
      </div>}
      {themeData?.theme?.key === "dark" && <div className='absolute pointer-events-none opacity-0 top-0 left-0 bg-text animate-shoot_x animate-duration-[3s] animate-delay-[.6s]'>
        <Animates.GlowingLineAnim id="ver-line-3" className='h-16 w-1 rotate-90 translate-x-[50%]' />
      </div>}
      {themeData?.theme?.key === "dark" && <div className='absolute pointer-events-none opacity-0 top-0 left-0 bg-text animate-shoot_x animate-duration-[3s] animate-delay-[.9s]'>
        <Animates.GlowingLineAnim id="ver-line-4" className='h-16 w-1 rotate-90 translate-x-[50%]' />
      </div>}
      {themeData?.theme?.key === "dark" && <div className='absolute pointer-events-none opacity-0 top-0 left-0 bg-text animate-shoot_x animate-duration-[3s] animate-delay-[1.2s]'>
        <Animates.GlowingLineAnim id="ver-line-5" className='h-16 w-1 rotate-90 translate-x-[50%]' />
      </div>}

      {themeData?.theme?.key === "dark" && <div className='absolute pointer-events-none opacity-0 top-0 left-0 bg-text animate-shoot_x animate-duration-[3s] animate-delay-[.3s]'>
        <Animates.GlowingLineAnim id="ver-line-6" className='h-16 w-1 rotate-90 translate-x-[50%] -translate-y-16' />
      </div>}
      {themeData?.theme?.key === "dark" && <div className='absolute pointer-events-none opacity-0 top-0 left-0 bg-text animate-shoot_x animate-duration-[3s] animate-delay-[.6s]'>
        <Animates.GlowingLineAnim id="ver-line-7" className='h-16 w-1 rotate-90 translate-x-[50%] -translate-y-16' />
      </div>}
      {themeData?.theme?.key === "dark" && <div className='absolute pointer-events-none opacity-0 top-0 left-0 bg-text animate-shoot_x animate-duration-[3s] animate-delay-[.8s]'>
        <Animates.GlowingLineAnim id="ver-line-8" className='h-16 w-1 rotate-90 translate-x-[50%] -translate-y-16' />
      </div>}
      {themeData?.theme?.key === "dark" && <div className='absolute pointer-events-none opacity-0 top-0 left-0 bg-text animate-shoot_x animate-duration-[3s] animate-delay-[1s]'>
        <Animates.GlowingLineAnim id="ver-line-9" className='h-16 w-1 rotate-90 translate-x-[50%] -translate-y-16' />
      </div>}
      {themeData?.theme?.key === "dark" && <div className='absolute pointer-events-none opacity-0 top-0 left-0 bg-text animate-shoot_x animate-duration-[3s] animate-delay-[1.3s]'>
        <Animates.GlowingLineAnim id="ver-line-10" className='h-16 w-1 rotate-90 translate-x-[50%] -translate-y-16' />
      </div>}

      {themeData?.theme?.key === "dark" && <div className='absolute pointer-events-none opacity-0 top-0 left-0 bg-text animate-shoot_x animate-duration-[3s] animate-delay-[.5s]'>
        <Animates.GlowingLineAnim id="ver-line-11" className='h-16 w-1 rotate-90 translate-x-[50%] translate-y-16' />
      </div>}
      {themeData?.theme?.key === "dark" && <div className='absolute pointer-events-none opacity-0 top-0 left-0 bg-text animate-shoot_x animate-duration-[3s] animate-delay-[.6s]'>
        <Animates.GlowingLineAnim id="ver-line-12" className='h-16 w-1 rotate-90 translate-x-[50%] translate-y-16' />
      </div>}
      {themeData?.theme?.key === "dark" && <div className='absolute pointer-events-none opacity-0 top-0 left-0 bg-text animate-shoot_x animate-duration-[3s] animate-delay-[.7s]'>
        <Animates.GlowingLineAnim id="ver-line-13" className='h-16 w-1 rotate-90 translate-x-[50%] translate-y-16' />
      </div>}
      {themeData?.theme?.key === "dark" && <div className='absolute pointer-events-none opacity-0 top-0 left-0 bg-text animate-shoot_x animate-duration-[3s] animate-delay-[1s]'>
        <Animates.GlowingLineAnim id="ver-line-14" className='h-16 w-1 rotate-90 translate-x-[50%] translate-y-16' />
      </div>}
      {themeData?.theme?.key === "dark" && <div className='absolute pointer-events-none opacity-0 top-0 left-0 bg-text animate-shoot_x animate-duration-[3s] animate-delay-[1.3s]'>
        <Animates.GlowingLineAnim id="ver-line-15" className='h-16 w-1 rotate-90 translate-x-[50%] translate-y-16' />
      </div>}
    </> 
  )
}