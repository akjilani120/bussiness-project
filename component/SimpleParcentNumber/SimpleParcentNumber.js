import React from "react";
import { BiUpArrowAlt } from "react-icons/bi";

const SimpleParcentNumber = ({ percentNumber, percentDetails }) => {
  return (
    <div>
      <div className="flex  justify-around items-center">
        {percentNumber ? (
          <h4 className=" font-medium text-4xl percent-number m-0 p-0">
            {percentNumber} <span className="">%</span>
          </h4>
        ) : (
          ""
        )}

        <BiUpArrowAlt className=" percent-arrow-icon m-0 p-0" />
      </div>
      {percentDetails ? (
        <p className="text-white text-xs font-medium p-0 m-0">
          {percentDetails}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default SimpleParcentNumber;
