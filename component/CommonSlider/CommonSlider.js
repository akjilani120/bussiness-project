import React from "react";
import { Slide } from "react-slideshow-image";
import SimpleButton from "../Extra-method/SimpleButton";
const CommonSlider = ({ imageStyle, titleStyle }) => {
  const slidesItems = [
    {
      image:
        "https://m2.portotheme.com/media/wysiwyg/smartwave/porto/homepage/13/shop13_off.png",
      headName: "",
      headtitle: "",
      title: "45%",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis orci tortor",
      showMoreBtn: "View Sale",
    },
    {
      image:
        "https://m2.portotheme.com/media/wysiwyg/smartwave/porto/homepage/13/shop13_off.png",
      headName: "",
      headtitle: "",
      title: "45%",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis orci tortor",
      showMoreBtn: "View Sale",
    },
    {
      image:
        "https://m2.portotheme.com/media/wysiwyg/smartwave/porto/homepage/13/shop13_off.png",
      headName: "",
      headtitle: "",
      title: "45%",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis orci tortor",
      showMoreBtn: "View Sale",
    },
  ];
  const indicators = (index) => <div className="indicator"></div>;
  return (
    <div className="slide-container">
      <Slide arrows={false} indicators={indicators} duration={2000}>
        {slidesItems?.map((slidesItem, index) => (
          <div key={index}>
            <div className="flex justify-center items-center py-4">
              {slidesItem?.image ? (
                <div>
                  <img
                    src={slidesItem?.image}
                    style={imageStyle}
                    alt="slider image"
                  />
                </div>
              ) : null}
              {slidesItem?.headName && slidesItem?.headtitle ? (
                <div>
                  <h6 className="m-0 p-0">{slidesItem?.headName}</h6>
                  <p className="m-0 p-0">{slidesItem?.headtitle}</p>
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
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default CommonSlider;
