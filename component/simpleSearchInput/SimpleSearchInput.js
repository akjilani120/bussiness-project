import React from "react";
import CommonInput from "../formComponent/CommonInput";
import { BiSearch } from "react-icons/bi";

const SimpleSearchInput = ({ searchValue, setSearchValue }) => {
  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <div className=" relative mr-5">
      <CommonInput
        value={searchValue}
        onChange={handleSearchValue}
        placeholder="Search"
        className=" border-2  border-black p-2 rounded-md"
      />

      <p
        className=" bg-black text-white absolute px-2"
        style={{
          top: "0",
          right: "-35px",
          height: "44px",
          borderRadius: "0px 5px 5px 0px ",
        }}
      >
        <BiSearch
          className="mt-2 text-2xl"
          style={{ lineHeight: "30px", width: "25px" }}
        />
      </p>
    </div>
  );
};

export default SimpleSearchInput;
