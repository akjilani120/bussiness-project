"use client";
import StarRatingComponent from "react-star-rating-component";
import { BsStarFill, BsFillHeartFill } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import { GrView } from "react-icons/gr";
import Image from "next/image";
import firstImage from "../../public/case-1.jpeg";
import secondImage from "../../public/case-2.jpeg";
import "../../app/moreStyleShit/simpleCard.css";
import { useState } from "react";
const SimpleSmallCard = ({
  images,
  offerPercentage,
  productName,
  ratingPoint,
  offerCutBalance,
  mainBalance,
  cardStyle,
  imageHight,
  imageWidth,
  loveReact,
}) => {
  return (
    <div className="small-card" style={cardStyle}>
      <div className="card-img-body" style={{ width: "60%" }}>
        <Image
          src={firstImage}
          alt="Picture of the author"
          width={imageWidth}
          height={imageHight}
        />

        <div className="card-second-image">
          <Image
            src={secondImage}
            className="card-img2"
            alt="Picture of the author"
            width={imageWidth}
            height={imageHight}
          />
        </div>
      </div>

      <div className="">
        <div className="">
          <p className=" opacity-40">Women Red bag</p>

          <StarRatingComponent
            name="rate2"
            editing={false}
            renderStarIcon={() => <BsStarFill />}
            starCount={5}
            value={3}
          />

          <p className="opacity-40">$250</p>
        </div>
      </div>
    </div>
  );
};

export default SimpleSmallCard;
