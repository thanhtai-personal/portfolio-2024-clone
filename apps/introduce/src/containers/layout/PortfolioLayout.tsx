import { ReactNode } from "react"
import { PortfolioHeader } from "./portfolio";

export interface IPortfolioLayoutProps {
  children: ReactNode;
}

export const PortfolioLayout = ({ children }: IPortfolioLayoutProps) => {

  return <div className="flex w-full flex-col">
  <PortfolioHeader authenMenu={{
    items: [
      {
        id: "universe",
        url: "/universe",
        className: "p-0 rounded-full w-fit h-fit p-2 text-center",
        label: "Resume",
      }
    ]
  }} />
  {children}
  </div>
}