import React from "react";

const SimpleSelect = ({ options, selectTitle, style, required, onChange }) => {
  return (
    <div>
      {selectTitle ? <label>{selectTitle} : </label> : null}
      <select
        style={{
          ...style,
          borderRadius: "8px",
          border: "1px solid black",
          padding: "5px",
        }}
        onChange={onChange}
        className={selectTitle ? " ml-3" : "ml-0"}
        required={required}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SimpleSelect;
