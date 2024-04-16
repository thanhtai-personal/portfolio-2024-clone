import { GridView } from "../viewFrame";

export interface ILoadingBlock {
  className?: string;
}

export const LoadingBlock = ({ className }: ILoadingBlock) => {

  return <div className={`loading-block w-12 h-12  ${className}`}>
    <GridView classes={{ container: "w-full h-full" }} cols={2} gap="1">
      <div className="bg-red-400"></div>
      <div className="bg-green-400"></div>
      <div className="bg-blue-400"></div>
      <div className="bg-text"></div>
    </GridView>
  </div>
}