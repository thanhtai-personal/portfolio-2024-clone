import { useEffect } from "react"

export const useCustomCursor = (elementId: string) => {

  const handleMouseMove = (event: MouseEvent) => {
    const customCursorElement = document.getElementById(elementId);
    if (!customCursorElement) return;
    const x = event.clientX;
    const y = event.clientY;
    customCursorElement.style.top = `${y - 5}px`;
    customCursorElement.style.left = `${x - 5}px`;
  }

  const handleMouseClick = (_: MouseEvent) => {
    const customCursorElement = document.getElementById(elementId);
    if (!customCursorElement) return;
    customCursorElement.classList.add("animate-mouse_click");
    setTimeout(() => {
      customCursorElement.classList.remove("animate-mouse_click");
    }, 200)
  }



  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, false);
    window.addEventListener("click", handleMouseClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove, false);
      window.removeEventListener("click", handleMouseClick);
    }
  }, []);
}