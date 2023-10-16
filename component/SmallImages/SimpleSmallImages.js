import Image from "next/image";
import React from "react";

const SimpleSmallImages = ({
  setShowImage,
  photos,
  imageClassName,
  imageStyle,
  containerStyle,
}) => {
  const handleFadeImage = (img) => {
    setShowImage(img);
  };

  return (
    <div className="flex justify-around my-5" style={containerStyle}>
      {photos?.map((img, idx) => (
        <div key={idx} className=" p-2">
          <Image
            className={
              imageClassName
                ? `${imageClassName} sell-slide-image mx-2 `
                : " sell-slide-image mx-2 "
            }
            style={imageStyle}
            src={img}
            height={80}
            width={200}
            onClick={() => handleFadeImage(img)}
            alt="slide image"
          />
        </div>
      ))}
    </div>
  );
};

export default SimpleSmallImages;
