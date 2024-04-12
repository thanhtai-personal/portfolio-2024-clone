import { ReactNode } from "react"

export const DrawingBorderButton = ({ children, className, onClick }: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) => {

  return (
    <button onClick={onClick} className={`drawingBtn draw-border ${className}`}>{
      children
    }</button>
  )
}