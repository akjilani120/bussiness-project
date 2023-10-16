import React from "react";

const SimpleAnotherButton = ({ btnName, style, className, disabled }) => {
  return (
    <>
      <button
        disabled={disabled}
        style={style}
        className={
          disabled
            ? ` opacity-10 bg-slate-300 border border-black px-3 py-2 `
            : "border border-black px-3 py-2 w-full"
        }
      >
        {btnName}
      </button>
    </>
  );
};

export default SimpleAnotherButton;
