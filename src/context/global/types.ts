import { ReactNode, Dispatch } from "react";
import { ColorModeEnum, GlobalActionEnum } from "./constants";

type GlobalProviderProps = {
  children: ReactNode;
};

type GlobalStateType = {
  colorMode: ColorModeEnum;
};

type GlobalContextType = {
  state: GlobalStateType;
  dispatch: Dispatch<GlobalActionType>;
};

type GlobalActionPayLoad = {
  colorMode: string;
};

type GlobalActionType = {
  type: GlobalActionEnum;
  payload: GlobalActionPayLoad;
};

export type {
  GlobalProviderProps,
  GlobalStateType,
  GlobalContextType,
  GlobalActionType,
  GlobalActionPayLoad,
};
