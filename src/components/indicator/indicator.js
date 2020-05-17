import React from "react";
import "./indicator.css";

const Indicator = ({ type, message }) => {
  const availableTypes = ["warning", "success", "primary"];

  const typeClass = availableTypes.includes(type) ? type : "warning";

  return (
    <div className={`alert alert-dismissible alert-${typeClass}`}>
      <p className="mb-0">{message}</p>
    </div>
  );
};

export default Indicator;
