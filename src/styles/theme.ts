import { PaletteMode, createTheme } from "@mui/material";

const theme = (mode?: PaletteMode) =>
  createTheme({
    palette: {
      mode: mode
    },
  });

export { theme };
