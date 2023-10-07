import Link from "next/link";
import React from "react";

const ShowStillPageName = ({ pageTitle }) => {
  return (
    <div>
      {pageTitle ? (
        <div className=" p-5 " style={{ backgroundColor: "whitesmoke" }}>
          {" "}
          <h1 className=" text-6xl  font-sans mt-4 mb-7">{pageTitle}</h1>{" "}
          <Link className=" mb-3" href={"/"}>
            Home /
          </Link>
          <span className=" opacity-50 text-sm "> {pageTitle}</span>{" "}
        </div>
      ) : null}
    </div>
  );
};

export default ShowStillPageName;
