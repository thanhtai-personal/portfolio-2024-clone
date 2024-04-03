import { useKeyboardControll } from "@/hooks/useKeyboardControll";
import { useCallback } from "react";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

export interface IScrollingButton {
  hidden?: boolean;
  fixed?: boolean;
  offset?: number;
  scrollContainer?: HTMLElement | null;
}

export const ScrollingButton = ({
  hidden,
  fixed = true,
  offset = 20,
  scrollContainer
}: IScrollingButton) => {

  const handleUp = useCallback(() => {
    window.scroll({ behavior: "smooth", top: (window.screenY - offset) > 0 ? window.screenY - offset : 0 })
  }, [scrollContainer])

  const handleDown = useCallback(() => {
    window.scroll({ behavior: "smooth", top: window.screenY + offset })
  }, [scrollContainer])

  useKeyboardControll({
    onKeyDown: (e: KeyboardEvent) => {
      switch (e.keyCode) {
        case 38:
          handleUp();
          break;
        case 40:
          handleDown();
          break
        default:
          break;
      }
    }
  });

  return <div className={`flex flex-col justify-center ${fixed && "fixed right-4 top-[42%] z-50"} ${hidden && "hidden"}`}>
    <div className="text-text w-8 h-8 hover:bg-[rgba(0,0,0, 0.15)] cursor-pointer" onClick={handleUp(true)}>
      <BsArrowUp className="text-text w-8 h-8" />
    </div>
    <div className="text-text w-8 h-8 hover:bg-[rgba(0,0,0, 0.15)] cursor-pointer" onClick={handleDown(true)}>
      < BsArrowDown className="text-text w-8 h-8" />
    </div>
  </div>
}