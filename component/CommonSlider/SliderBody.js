import React from "react";
import SimpleButton from "../Extra-method/SimpleButton";
import Image from "next/image";

const SliderBody = (
  slidesItem,
  { slideHeadImageWidth, slideHeadImagehight }
) => {
  const {
    slideHeadImage,
    headName,
    headtitle,
    title,
    description,
    showMoreBtn,
  } = slidesItem;
  return (
    <div>
      <div className="flex justify-center items-center">
        {slideHeadImage ? (
          <div>
            <Image
              src={slideHeadImage}
              width={slideHeadImageWidth}
              height={slideHeadImagehight}
              alt="slider image"
            />
          </div>
        ) : null}
        {headName && headtitle ? (
          <div>
            <h6 className="m-0 p-0">{headName}</h6>
            <p className="m-0 p-0">{headtitle}</p>
          </div>
        ) : null}
      </div>
      <div>
        {title ? <h6>{title}</h6> : null}
        {description ? <h6>{description}</h6> : null}
        {showMoreBtn ? <SimpleButton title={showMoreBtn} /> : null}
      </div>
    </div>
  );
};

export default SliderBody;
