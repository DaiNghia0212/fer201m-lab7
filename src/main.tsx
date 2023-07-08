import ReactDOM from "react-dom/client";
import GlobalProvider from "./context/global/GlobalProvider";
import App from "./App.tsx";
import AuthProvider from "./context/authentication/AuthProvider.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <GlobalProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </GlobalProvider>
);
