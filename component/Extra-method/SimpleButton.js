import React from "react";

const SimpleButton = ({ title, style, className }) => {
  return (
    <button className="glow-on-hover" type="button" style={style}>
      {title ? title : null}
    </button>
  );
};

export default SimpleButton;
