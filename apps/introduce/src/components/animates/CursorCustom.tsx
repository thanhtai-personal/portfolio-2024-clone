import { useCustomCursor } from "@/hooks/index";
import { useEffect } from "react";
import { FaHandPointUp } from "react-icons/fa";

export const CursorCustom = () => {
  const listCursor: string[] = [];
  useCustomCursor('custom-cursor');

  useEffect(() => {
    const all = document.body.getElementsByTagName("*") as HTMLCollectionOf<HTMLElement>;
    for (var i = 0;  i < all.length; ++i) {
      listCursor.push(all[i].style.cursor)
      all[i].style.cursor = "none";
    }
    return () => {
      for (var i = 0;  i < all.length; ++i) {
        if (listCursor[i]) {
          all[i].style.cursor = listCursor[i];
        }
      }
    }
  }, []);

  return (
    <div
      id='custom-cursor'
      className='absolute w-8 h-8 left-[-100px] top-0] z-[60] duration-0 pointer-events-none'
    >
      <div className='relative'>
        <FaHandPointUp className='absolute left-1 top-3 w-8 h-8 text-text bg-transparent ' />
      </div>
    </div>

  )
}