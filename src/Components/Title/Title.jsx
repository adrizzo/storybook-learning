import React from "react";
import './Title.css'

function Title(props) {
  const { children, variant = "primaryH1" } = props;
  return <h1 className={`h1 ${variant}`}>{children}</h1>;
}

export default Title;
