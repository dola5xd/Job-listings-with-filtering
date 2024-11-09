import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import { JobsProvider } from "./context/JobsContext.tsx";
import { FilterProvider } from "./context/FilterContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <JobsProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </JobsProvider>
  </React.StrictMode>
);
