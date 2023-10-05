"use client";
import StarRatingComponent from "react-star-rating-component";
import { BsStarFill } from "react-icons/bs";

import Image from "next/image";
import firstImage from "../../public/case-1.jpeg";
import secondImage from "../../public/case-2.jpeg";
import "../../app/moreStyleShit/simpleCard.css";
const SimpleSmallCard = ({ data, imageHight, imageWidth }) => {
  const { id, productShowImg, name, rating, offerPercentage, price, model } =
    data;
  return (
    <div className="row">
      <div className="card-img-body col-5">
        <Image
          src={productShowImg[2]}
          alt="Picture of the author"
          width={imageWidth}
          height={imageHight}
          className="small-card-image1"
        />

        <div className="card-second-image ">
          <Image
            src={productShowImg[3]}
            className="card-img2 small-card-image2"
            alt="Picture of the author"
            width={imageWidth}
            height={imageHight}
          />
        </div>
      </div>

      <div className="col-7">
        <p className=" opacity-40">{name}</p>

        <StarRatingComponent
          name="rate2"
          editing={false}
          renderStarIcon={() => <BsStarFill />}
          starCount={5}
          value={rating}
        />

        <p className="opacity-40">$250</p>
      </div>
    </div>
  );
};

export default SimpleSmallCard;
