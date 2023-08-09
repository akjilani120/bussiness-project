import React from "react";
import "../../app/moreStyleShit/simpleCard.css";
const SimpleCard = () => {
  return (
    <div className="card">
      <div className="card-img-body">
        <div className="">
          <img
            className="w-full card-img"
            src="https://m2.portotheme.com/media/catalog/product/cache/11458dcde882ed1dfb2833d935bf9253/p/r/product-14-grey_2.jpeg"
            alt=""
          />
        </div>
        <div className="card-second-image">
          <img
            className="w-full card-img card-img2"
            src="https://m2.portotheme.com/media/catalog/product/cache/11458dcde882ed1dfb2833d935bf9253/p/r/product-99-2-grey.jpeg"
            alt=""
          />
        </div>
        <div className="card-icons z-40">
          <span className="card-icon"> icon</span>
          <span className="card-icon"> icon 2</span>
        </div>
        <div className="card-offer">
          <span className="text-sm">-41%</span>
        </div>
      </div>

      <div>
        <div>
          <p>Women Red bag</p>
          <p>
            <span>Star</span>
          </p>
          <p>$250</p>
        </div>
      </div>
    </div>
  );
};

export default SimpleCard;
