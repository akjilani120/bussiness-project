import React from "react";
import { Slide } from "react-slideshow-image";
import SimpleButton from "../Extra-method/SimpleButton";
import Image from "next/image";
const CommonSlider = ({
  imageStyle,
  titleStyle,
  slidesItems,
  slideDuration,
  sliderBodyStyle,
  slideAutoPlay,
}) => {
  const indicators = (index) => <div className="indicator"></div>;
  return (
    <div style={sliderBodyStyle}>
      <Slide
        autoplay={slideAutoPlay ? slideAutoPlay : false}
        arrows={false}
        indicators={indicators}
        duration={slideDuration ? slideDuration : 2000}
      >
        {slidesItems?.map((slidesItem, index) => (
          <React.Fragment key={index}>
            <div className="flex justify-center items-center py-4">
              {slidesItem?.image ? (
                <div>
                  <Image
                    src={slidesItem?.image}
                    style={imageStyle}
                    alt="slider image"
                    width={200}
                    height={200}
                  />
                </div>
              ) : null}
              {slidesItem?.name && slidesItem?.positionTitle ? (
                <div>
                  <h6 className="m-0 p-0 font-semibold">{slidesItem?.name}</h6>
                  <p className="m-0 p-0 text-sm opacity-5">
                    {slidesItem?.positionTitle}
                  </p>
                </div>
              ) : null}
            </div>
            <div>
              {slidesItem?.title ? (
                <h6 className="py-3" style={titleStyle}>
                  {slidesItem?.title}
                </h6>
              ) : null}
              {slidesItem?.description ? (
                <p className="py-3 text-center">{slidesItem?.description}</p>
              ) : null}
              <div className="py-5 text-center">
                {slidesItem?.showMoreBtn ? (
                  <SimpleButton title={slidesItem?.showMoreBtn} />
                ) : null}
              </div>
            </div>
          </React.Fragment>
        ))}
      </Slide>
    </div>
  );
};

export default CommonSlider;
