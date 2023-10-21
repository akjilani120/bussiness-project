import React from "react";

const SimpleAnotherButton = ({ btnName, style, className, disabled }) => {
  return (
    <>
      <button
        disabled={disabled}
        style={style}
        className={"border border-black px-3 py-2 w-full"}
      >
        {btnName}
      </button>
    </>
  );
};

export default SimpleAnotherButton;
