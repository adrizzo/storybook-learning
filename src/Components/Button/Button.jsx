import React from "react";
import "./Button.css";

function Button(props) {
  const { variant = "primary", log, children } = props;
  return (
    <button className={`button ${variant}`} onClick={log}>
      {children}
    </button>
  );
}

export default Button;
