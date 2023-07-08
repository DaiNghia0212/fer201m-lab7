import { useContext } from "react";
import { GlobalContext } from "../context/global/GlobalProvider";
import { ColorModeEnum, GlobalActionEnum } from "../context/global/constants";

import { IconButton } from "@mui/material";
import { Brightness7, Brightness4 } from "@mui/icons-material";

const ColorMode = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const handleChangeColorMode = () => {
    dispatch({
      type: GlobalActionEnum.SET_COLOR_MODE,
      payload: {
        colorMode:
          state.colorMode === ColorModeEnum.LIGHT
            ? ColorModeEnum.DARK
            : ColorModeEnum.LIGHT,
      },
    });
  };

  return (
    <IconButton sx={{ ml: 1 }} onClick={handleChangeColorMode} color="inherit">
      {state.colorMode === ColorModeEnum.DARK ? (
        <Brightness7 />
      ) : (
        <Brightness4 />
      )}
    </IconButton>
  );
};

export default ColorMode;
