"use client";
import React from "react";
import { Zoom } from "react-slideshow-image";
import SimpleButton from "../Extra-method/SimpleButton";
const ZoomInSliderBanner = ({
  style,
  isIndicators,
  arrowsShow,
  zoomslideItems,
}) => {
  const indicators = (index) => <div className="indicator"></div>;
  return (
    <div>
      {zoomslideItems ? (
        <Zoom
          scale={1.4}
          indicators={isIndicators ? indicators : false}
          arrows={arrowsShow ? arrowsShow : false}
          duration={2000}
        >
          {zoomslideItems.map((item, index) => (
            <div
              key={index}
              className="flex  justify-start items-end"
              style={{
                backgroundImage: `url(${item?.image})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                ...style,
              }}
            >
              <div className="mb-5 ml-4">
                {item?.littleDiscri ? (
                  <p
                    style={{
                      color: "white",
                      fontWeight: "500",
                    }}
                  >
                    {item?.littleDiscri}
                  </p>
                ) : null}
                {item?.title ? (
                  <h1 className="zoomslide-title m-0 p-0 text-white">
                    {item?.title}
                  </h1>
                ) : null}
                {item?.offerBalance ? (
                  <h2
                    className=" p-0  zoomslide-offer"
                    style={{ color: "#3383FF" }}
                  >
                    {item?.offerBalance}
                  </h2>
                ) : null}
                {item?.moreOFBtn ? (
                  <SimpleButton title={item?.moreOFBtn} />
                ) : null}
              </div>
            </div>
          ))}
        </Zoom>
      ) : null}
    </div>
  );
};

export default ZoomInSliderBanner;
