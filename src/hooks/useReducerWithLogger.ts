import { useEffect, useReducer, Reducer, Dispatch } from "react"

export const useReducerWithLogger = <T, Action>(reducer: Reducer<T, Action>, initialData: T): [T, Dispatch<Action>] => {
  const [state, dispatch] = useReducer(reducer, initialData);
  
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.info('Next state', state);
    }
  }, [state]);

  return [state, dispatch];
};
