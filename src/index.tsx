import ReactDOM from "react-dom/client";
import App from "./App";
import { ContextAppProvider } from "./context/Provider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ContextAppProvider>
    <App />
  </ContextAppProvider>
);
