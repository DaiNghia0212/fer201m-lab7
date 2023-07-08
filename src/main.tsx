import ReactDOM from "react-dom/client";
import GlobalProvider from "./context/global/GlobalProvider";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <GlobalProvider>
    <App />
  </GlobalProvider>
);
