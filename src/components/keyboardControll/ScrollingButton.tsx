import { useKeyboardControll } from '@/hooks/useKeyboardControll';
import { useCallback, useState } from 'react';
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from 'react-icons/fa';

export interface IScrollingButton {
  hidden?: boolean;
  fixed?: boolean;
  offset?: number;
  scrollContainer?: HTMLElement | null;
  listSection?: string[];
}

export const ScrollingButton = ({
  hidden,
  fixed,
  offset = 20,
  listSection,
}: IScrollingButton) => {
  const [activeId, setActiveId] = useState(0);

  const handleUp = useCallback(() => {
    if (listSection?.at(0)) {
      const newActive =
        listSection.length - 1 ? activeId + 1 : listSection.length - 1;
      const elementId = listSection?.at(newActive);
      if (elementId) {
        setActiveId(newActive);
        const element = document.getElementById(elementId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollBy({
        top: offset,
        behavior: "smooth"
      });
    }
  }, [activeId, listSection?.length]);

  const handleDown = useCallback(() => {
    if (listSection?.at(0)) {
      const newActive = activeId > 0 ? activeId - 1 : 0;
      const elementId = listSection?.at(newActive);
      if (elementId) {
        setActiveId(newActive);
        const element = document.getElementById(elementId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollBy({
        top: offset,
        behavior: "smooth"
      });
    }
  }, [activeId]);

  useKeyboardControll({
    onKeyDown: (e: KeyboardEvent) => {
      switch (e.keyCode) {
        case 38:
          handleUp();
          break;
        case 40:
          handleDown();
          break;
        default:
          break;
      }
    },
  });

  return (
    <div
      className={`flex flex-col justify-center items-center ${
        fixed && 'fixed right-4 top-[42%] z-50'
      } ${hidden && 'hidden'}`}
    >
      <div
        className='hover:bg-[rgba(0,255,0,0.4)] rounded-full cursor-pointer'
        onClick={handleDown}
      >
        {((activeId > 0)  || (offset > 100)) && <FaArrowAltCircleUp className='text-text w-8 h-8' />}
      </div>
      <div
        className='hover:bg-[rgba(0,255,0,0.4)] rounded-full cursor-pointer'
        onClick={handleUp}
      >
        {((listSection && activeId < listSection?.length - 1) || (offset > 100)) && (
          <FaArrowAltCircleDown className='text-text w-8 h-8' />
        )}
      </div>
    </div>
  );
};
