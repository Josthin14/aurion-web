import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Horizon from "./Horizon";

function Router() {
  const path = window.location.pathname;

  if (path === "/horizon") {
    return <Horizon />;
  }

  return <App />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);