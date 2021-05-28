import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { SearchValue } from "./table";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    {/* {<App />} */}
    <SearchValue />
  </StrictMode>,
  rootElement
);
