"use client";
import React from "react";
import { Zoom } from "react-slideshow-image";
import SimpleButton from "../Extra-method/SimpleButton";

const ZoomInSliderBanner = ({
  images,
  style,
  littleDiscri,
  title,
  offerBalance,
  moreOFBtn,
  isIndicators,
  arrowsShow,
}) => {
  const indicators = (index) => <div className="indicator"></div>;
  return (
    <div>
      {images ? (
        <Zoom
          scale={1.4}
          indicators={isIndicators ? indicators : false}
          arrows={arrowsShow ? arrowsShow : false}
          duration={2000}
        >
          {images.map((each, index) => (
            <div
              key={index}
              className="flex justify-center items-center"
              style={{
                backgroundImage: `url(${each})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                ...style,
              }}
            >
              <div>
                {littleDiscri ? <p>{littleDiscri}</p> : null}
                {title ? <h1>{title}</h1> : null}
                {offerBalance ? <h2>{offerBalance}</h2> : null}
                {moreOFBtn ? <SimpleButton title={moreOFBtn} /> : null}
              </div>
            </div>
          ))}
        </Zoom>
      ) : null}
    </div>
  );
};

export default ZoomInSliderBanner;
