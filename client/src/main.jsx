import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Switch, Route } from "wouter";
import "./index.css";
import Terminal from "./pages/Terminal";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Switch>
      <Route path="/" component={Terminal} />
      <Route>404 Page Not Found</Route>
    </Switch>
  </StrictMode>,
);
