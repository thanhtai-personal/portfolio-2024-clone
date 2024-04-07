import { useCustomCursor } from "@/hooks/index";

export const CursorShadow = ({ className }: { className?: string }) => {
  const customMouseMove = (e: MouseEvent) => {
    const shadow = document.querySelector('#custom-cursor-shadow .shadow') as HTMLElement;
    if (!shadow) return;
    let x = e.clientX - (document.documentElement.clientWidth * 1.5);
    let y = e.clientY - (document.documentElement.clientHeight * 1.5);
    shadow.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
  }

  useCustomCursor('custom-cursor-shadow', { customMouseMove });

  return (
    <div id="custom-cursor-shadow" className={`wrapper ${className}`}>
      <div className="shadow"></div>
    </div>

  )
}