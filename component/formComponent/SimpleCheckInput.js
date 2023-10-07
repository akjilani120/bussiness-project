import React from "react";

const SimpleCheckInput = ({ onClick, onChange, name, id, checkboxTitle }) => {
  return (
    <div>
      <label>
        <input
          onclick={onClick}
          onChange={onChange}
          type="checkbox"
          name={name}
          id={id}
        />
        <span> {checkboxTitle}</span>
      </label>
    </div>
  );
};

export default SimpleCheckInput;
