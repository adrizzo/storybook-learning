import React from "react";
import './Input.css'

function Input(props) {
  const { size = "medium", type = "text", placeholder = "Placeholder here" } = props;
  return <input className={`input ${size}`} type={type} placeholder={placeholder} />;
}

export default Input;
