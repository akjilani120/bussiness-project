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
const SimpleCard = () => {
  const [addColor, setAddColor] = useState(false);
  const handleColor = () => {
    setAddColor(!addColor);
  };
  return (
    <div className="card">
      <div className="card-img-body">
        <div className="">
          <Image
            src={firstImage}
            alt="Picture of the author"
            width={"100%"}
            height={280}
          />
        </div>
        <div className="card-second-image">
          <Image
            src={secondImage}
            className="card-img2"
            alt="Picture of the author"
            width={"100%"}
            height={280}
          />
        </div>
        <div className="card-icons z-40">
          <BiShoppingBag className="inline  card-icon" />

          <GrView className=" inline    card-icon" />
        </div>
        <div className="card-offer">
          <span className="text-sm">-41%</span>
        </div>
      </div>

      <div className="flex justify-between mt-1 ">
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
        <div>
          <BsFillHeartFill
            onClick={handleColor}
            className={
              addColor
                ? "text-2xl text-red-600"
                : "text-2xl text-gray-300  bg-transparent"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default SimpleCard;
