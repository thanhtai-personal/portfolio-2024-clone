import { Animates } from "@ttt-ui/react-animates";
import { AnimationView, LoadingComponent } from "@/components/index";
import { PortfolioActionType, PortfolioContext } from "@/context/index";
import { useMouseWaveClicker } from "@ttt-utils/react-hooks";
import { useEffect } from "react";

export interface IPortfolioContainer {}

const PortfolioContent = () => {
  const portfolioData = PortfolioContext.useDataContext();
  const portfolioDispatcher = PortfolioContext.useDataDispatchContext();

  useEffect(() => {
    setTimeout(() => {
      portfolioDispatcher &&
        portfolioDispatcher({
          type: PortfolioActionType.updateLoading,
          payload: { loading: true },
        });
    }, 1800);
  }, [portfolioDispatcher]);

  return (
    <AnimationView.FadeIn
      id="scroll-container"
      className="bg-transparent relative w-screen h-screen m-0 p-0 overflow-x-hidden"
    >
      {portfolioData?.loading ? <LoadingComponent>
        <Animates.LoadingBlock />
      </LoadingComponent> : <div>
      
      </div>}
    </AnimationView.FadeIn>
  );
};

const PortfolioContainer = ({}: IPortfolioContainer) => {
  useMouseWaveClicker();
  return (
    <PortfolioContext.Provider>
      <div className="w-screen h-screen bg-bg-gradient">
        <div></div>
        <div className="absolute w-full h-full left-0 top-0 bg-transparent rounded-t-lg">
          <div className="w-full flex flex-row bg-transparent">
            <PortfolioContent />
          </div>
        </div>
      </div>
    </PortfolioContext.Provider>
  );
};

export default PortfolioContainer;
