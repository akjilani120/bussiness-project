import React from "react";

const SimpleProgress = ({ ProgressTitle, style }) => {
  return (
    <div>
      <h3 style={style} className=" font-semibold text-white text-2xl">
        {ProgressTitle}
      </h3>
      <p className="first-progre-bar"></p>
      <p className="second-progre-bar"></p>
    </div>
  );
};

export default SimpleProgress;
