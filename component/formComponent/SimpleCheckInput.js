import React from "react";

const SimpleCheckInput = ({
  onClick,
  onChange,
  name,
  id,
  checkboxTitle,
  required,
}) => {
  return (
    <div>
      <label>
        <input
          onclick={onClick}
          onChange={onChange}
          type="checkbox"
          name={name}
          id={id}
          required={required}
        />
        <span> {checkboxTitle}</span>
      </label>
    </div>
  );
};

export default SimpleCheckInput;
