"use client";
import React, { useState } from "react";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import "./accordion.css";
const CustomAccordion = ({ accordionItems, title }) => {
  const [addstyle, setAddStyle] = useState(false);
  const handleAccordin = () => {
    setAddStyle(!addstyle);
  };
  return (
    <div className="accordion-container" onClick={() => setAddStyle(!addstyle)}>
      {title ? (
        <div className="flex justify-between items-center cursor-pointer  border-b  border-blue-100 px-1 py-3">
          {" "}
          <h6 className=" text-sm font-semibold text-gray-500 hover:text-black">
            {title}
          </h6>{" "}
          <MdOutlineKeyboardDoubleArrowDown
            className={
              addstyle
                ? "text-xl rotate-180 text-gray-500"
                : "text-xl text-gray-500 "
            }
          />
        </div>
      ) : null}
      <div
        className={
          addstyle ? "accordion-body-show accordion-body" : "accordion-body"
        }
      >
        {accordionItems
          ? accordionItems?.map((item, index) => (
              <ul className="" key={index}>
                <li className="  py-1 text-gray-500 cursor-pointer text-sm  border-b  border-blue-100">
                  {item}
                </li>
              </ul>
            ))
          : null}
      </div>
    </div>
  );
};

export default CustomAccordion;
