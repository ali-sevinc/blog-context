import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import BlogContextProvider from "./store/BlogContext.tsx";
import DarkModeContextProvider from "./store/DarkModeContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BlogContextProvider>
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
    </BlogContextProvider>
  </React.StrictMode>
);
