import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { SearchValue } from "./table";
import App from "./App";
import Filterization from "./ClausesFilter/Filterization";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    {/* {<App />} */}
    {/* <SearchValue /> */}
    <Filterization />
  </StrictMode>,
  rootElement
);
