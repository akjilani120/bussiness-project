"use client";
import ShowStillPageName from "@/component/ShowStillPageName/ShowStillPageName";
import React, { useEffect, useState } from "react";
import datas from "../../../productDatas/datas.json";
import Image from "next/image";
import ReactImageMagnify from "react-image-magnify";
import "../../moreStyleShit/sellDetail.css";
import StarRatingComponent from "react-star-rating-component";
import { BsStarFill } from "react-icons/bs";
import SimpleSmallImages from "@/component/SmallImages/SimpleSmallImages";
import { BiMinus, BiPlus } from "react-icons/bi";
import SimpleModal from "@/component/SimpleModal/SimpleModal";
const SellDetails = ({ params }) => {
  let data;
  if (params.sellDetail != "" && datas.length != 0) {
    datas?.find((item) => {
      if (item.sellDetail == params.sellDetail) {
        data = item;
      }
    });
  }
  const [showImage, setShowImage] = useState(data?.productShowImg[0]);
  const [quantity, setQuantity] = useState(1);
  const colorImageStyle = {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
  };
  const containerStyle = {
    justifyContent: "start",
  };

  return (
    <div>
      <ShowStillPageName pageTitle={data?.name} />
      <section className="container-body my-5">
        <div className="row">
          <div className=" col-md-6 col-8">
            <div className=" ">
              <ReactImageMagnify
                {...{
                  className: "mag-image",
                  smallImage: {
                    alt: "banner image",
                    isFluidWidth: true,
                    src: showImage,
                  },
                  largeImage: {
                    src: showImage,
                    alt: "banner image",
                    width: 800,
                    height: 400,
                  },
                }}
              />
              <div className="my-5">
                <SimpleSmallImages
                  photos={data?.productShowImg}
                  setShowImage={setShowImage}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-8">
            {data?.name ? (
              <h1 className=" mt-3 font-semibold text-xl">
                Car Name: {data?.name}
              </h1>
            ) : null}
            <div className=" mt-3">
              {" "}
              <StarRatingComponent
                name="rate2"
                editing={false}
                renderStarIcon={() => <BsStarFill />}
                starCount={5}
                value={data?.rating}
              />
              <span> 4 reviews</span>
            </div>
            {data?.model ? (
              <p className=" mt-4">Model Name: {data?.model}</p>
            ) : null}
            {data?.quantity ? (
              <p className=" mt-4">
                Availability: {data?.quantity}{" "}
                <span className=" text-red-600 font-bold">In Stock</span>
              </p>
            ) : null}
            {data?.price ? (
              <p className="mt-4">Price : $ {data?.price}</p>
            ) : null}
            {data?.productShowImg.length > 0 ? (
              <div className="flex justify-start items-center mt-4">
                <p className="mr-2">Color : </p>
                <SimpleSmallImages
                  photos={data?.productShowImg}
                  setShowImage={setShowImage}
                  imageStyle={colorImageStyle}
                  containerStyle={containerStyle}
                />
              </div>
            ) : null}
            <div className="flex mt-4 ">
              <p className=" mr-3">Quantity : </p>
              <div className="flex items-center">
                <button
                  disabled={quantity == 1}
                  onClick={() => setQuantity((prev) => prev - 1)}
                  className={
                    quantity == 1
                      ? " opacity-40 bg-slate-300 rounded-md px-2 py-1 "
                      : " bg-slate-300 rounded-md px-2 py-1"
                  }
                >
                  <BiMinus />
                </button>
                <p className=" px-6 w-20">{quantity}</p>
                <button
                  disabled={quantity == data?.quantity}
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className={
                    quantity == data?.quantity
                      ? " opacity-40 bg-slate-300 rounded-md px-2 py-1 "
                      : " bg-slate-300 rounded-md px-2 py-1"
                  }
                >
                  <BiPlus />
                </button>
              </div>
            </div>
            <div className=" my-7 w-2/4 ">
              <SimpleModal
                modalName={"Add To cart"}
                productQuantity={quantity}
                productImage={showImage}
                productName={data?.name}
                productTotalPrice={quantity * data?.price}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SellDetails;
