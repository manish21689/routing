import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RoleContextProvider } from "./RoleContext";
import App from "./App";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
console.log("Index");
root.render(
  <StrictMode>
    <RoleContextProvider>
      <App />
    </RoleContextProvider>
  </StrictMode>
);
