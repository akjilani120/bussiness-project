"use client";
import StarRatingComponent from "react-star-rating-component";
import { BsStarFill, BsFillHeartFill } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import { GrView } from "react-icons/gr";
import Image from "next/image";
import "../../app/moreStyleShit/simpleCard.css";
import { useState } from "react";
import Link from "next/link";
const SimpleCard = ({ cardStyle, data }) => {
  const {
    id,
    productShowImg,
    name,
    rating,
    offerPercentage,
    price,
    model,
    quantity,
  } = data;

  const [addColor, setAddColor] = useState(false);
  const handleColor = () => {
    setAddColor(!addColor);
  };
  return (
    <div className="card" style={cardStyle}>
      <div className="card-img-body">
        <div className="">
          <Image
            src={productShowImg[0]}
            alt="Picture of the author"
            width={331}
            height={334}
            className="card-img1"
          />
        </div>
        <div className="card-second-image">
          <Image
            src={productShowImg[1]}
            className="card-img2"
            alt="Picture of the author"
            width={331}
            height={334}
          />
        </div>
        <div className="card-icons z-40">
          <BiShoppingBag className="inline  card-icon" />

          <Link href={`/${model}`}>
            <GrView className=" inline    card-icon" />
          </Link>
        </div>

        {offerPercentage != "" ? (
          <div className="card-offer">
            <span className="text-sm">{offerPercentage}</span>{" "}
          </div>
        ) : quantity == 0 ? (
          <div className="card-offer">
            <span className="text-sm">SOLDOUT</span>{" "}
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="flex justify-between mt-1 ">
        <div className="">
          {name ? <p className=" opacity-40">{name}</p> : ""}

          <StarRatingComponent
            name="rate2"
            editing={false}
            renderStarIcon={() => <BsStarFill />}
            starCount={5}
            value={rating}
          />

          <p className="opacity-40">${price}</p>
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
