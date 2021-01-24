import React from "react";
import ReactDOM from "react-dom";
import Component from "./ModelComponent";
const Model = (props) => {
  return ReactDOM.createPortal(
    <>
      <Component title={props.title} onDelete={props.onDelete} />
    </>,
    document.querySelector("#model")
  );
};

export default Model;
