import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { RequestProvider } from "../src/Components/RequestContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <RequestProvider>
      <App />
    </RequestProvider>
  </BrowserRouter>
);
