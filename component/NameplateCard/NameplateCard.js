import React from "react";
import "../../app/moreStyleShit/smallCardStyle.css";
const NameplateCard = ({ icon, titleName, sortDescribe }) => {
  const Icon = icon;
  return (
    <div className="back-light ">
      <div className="flex justify-around smarlCard-body items-center">
        <div className="small-left w-1/4">
          <Icon className="" style={{ fontSize: "40px" }} />
        </div>
        <div className="small-right w-3/4 ">
          {titleName ? (
            <h5 className="p-0 m-0 text-base font-semibold text-center">
              {titleName}
            </h5>
          ) : null}
          {sortDescribe ? (
            <p className="font-light text-sm p-0 m-0  text-center ml-4">
              {sortDescribe}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default NameplateCard;
