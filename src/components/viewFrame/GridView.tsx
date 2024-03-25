import { ReactNode } from "react";

export interface IGridView {
  cols?: number;
  gap?: string;
  renderItem?: (item: any) => ReactNode;
  items?: any[];
  children?: ReactNode;
  classes?: {
    container?: string;
  }
}

export const GridView = ({
  items = [],
  renderItem,
  cols,
  gap,
  children,
  classes
}: IGridView) => {

  return (
    <div className={`grid p-2 bg-transparent grid-cols-${cols || 4} gap-${gap || 4} ${classes?.container}`}>
      {items?.map(child => renderItem ? renderItem(child) : "")}
      {children && children}
    </div>
  );
}