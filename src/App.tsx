import { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";

import { GlobalContext } from "./context/global/GlobalProvider";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { theme } from "./styles/theme";

const App = () => {
  const { state } = useContext(GlobalContext);

  return (
    <ThemeProvider theme={theme(state.colorMode)}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
