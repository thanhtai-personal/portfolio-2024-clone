import { useEffect, useState } from "react"

export const useDelayedDisplay = (delayTime?: number) => {
  const [isDisplay, setIsDisplay] = useState(!delayTime);

  useEffect(() => {
    if (delayTime && delayTime > 0) {
      setTimeout(() => {
        setIsDisplay(true);
      }, delayTime)
    }
  }, [delayTime])

  return isDisplay
}