import React from "react";

const CommonInput = ({
  id = "",
  title = "",
  name,
  placeholder = "",
  value = "",
  bodyClass,
  type = "text",
  className = "",
  onChange,
  onBlur,
  onFocus,
  error,
  required = false,
  disabled = false,
  sideText,
  isEditable = true,
  minTime,
  maxTime,
  style = {},
}) => {
  return (
    <div className={bodyClass}>
      <p className="p-0 mt-2">
        {sideText && <label htmlFor="">{sideText}</label>}
      </p>
      <input
        type={type}
        value={value}
        name={name}
        className={className}
        style={style}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        min={minTime}
        max={maxTime}
        required={required}
        disabled={disabled}
      />
    </div>
  );
};

export default CommonInput;
