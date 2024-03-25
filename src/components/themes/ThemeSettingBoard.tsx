import { Button } from "flowbite-react"
import { TbBrandReact } from "react-icons/tb";

export interface IThemeSettingBoard { }

export const ThemeSettingBoard = ({ }: IThemeSettingBoard) => {

  return <div className={"fixed top-1/2 right-1"}>
    <Button className="animate-spin p-0 m-0 bg-transparent hover:border-none enabled:bg-transparent enabled:hover:bg-transparent enabled:hover:border-none enabled:border-none text-color-text-active">
      <TbBrandReact className="w-10 h-10 text-"/>
    </Button>
  </div>
}