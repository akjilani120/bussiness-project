import React from "react";

const SimpleSelect = ({
  options,
  selectedValue,
  setSelectedValue,
  selectTitle,
}) => {
  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };
  return (
    <div>
      {selectTitle ? <label>{selectTitle}</label> : null}
      {/* <label>Select an option:</label> */}
      <select
        style={{ borderRadius: "8px" }}
        value={selectedValue}
        onChange={handleSelectChange}
        className={selectTitle ? " ml-3" : "ml-0"}
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
