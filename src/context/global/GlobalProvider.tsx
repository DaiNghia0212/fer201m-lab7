import { createContext, useReducer } from "react";

import {
  GlobalProviderProps,
  GlobalStateType,
  GlobalContextType,
  GlobalActionType,
} from "./types";
import { ColorModeEnum, GlobalActionEnum } from "./constants";

const initialGlobalState: GlobalStateType = {
  colorMode: ColorModeEnum.LIGHT,
};

const GlobalContext = createContext<GlobalContextType>({
  state: initialGlobalState,
  dispatch: () => {
    return;
  },
});

const reducer = (state: GlobalStateType, action: GlobalActionType) => {
  switch (action.type) {
    case GlobalActionEnum.SET_COLOR_MODE:
      return Object.assign({}, state, {
        colorMode: action.payload.colorMode,
      });
    default:
      return state;
  }
};

const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialGlobalState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
export { GlobalContext };
