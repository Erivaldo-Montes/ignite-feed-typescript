import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// ! no final do código indica que o elemento vai sempre existir
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
