import React from "react";
import ReactDom from "react-dom";
import Heading from "./components/heading.jsx";
import List from "./components/list";
ReactDom.render(
  <div>
    <Heading />
    <List />
  </div>,
  document.getElementById("root")
);
