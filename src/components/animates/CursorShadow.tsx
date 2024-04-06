import { useCustomCursor } from "@/hooks/index";

export const CursorShadow = () => {
  const customMouseMove = (e: MouseEvent) => {
    const shadow = document.querySelector('#cursor-shadow .shadow') as HTMLElement;
    if (!shadow) return;
    let x = e.clientX - (document.documentElement.clientWidth * 1.5);
    let y = e.clientY - (document.documentElement.clientHeight * 1.5);
    shadow.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
  }

  useCustomCursor('cursor-shadow', { customMouseMove });

  return (
    <div id="cursor-shadow" className="wrapper">
      <div className="shadow"></div>
    </div>

  )
}