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
import CommonLoading from "@/component/CommonLoading/CommonLoading";
import Link from "next/link";
import SimpleCard from "@/component/SimpleCard/SimpleCard";
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
  const randomNumber = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
  const randomNumber2 = Math.floor(Math.random() * (6 - 2 + 2)) + 2;

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
      <hr />
      <section className="container-body">
        <div className="row">
          <div className="col-12">
            <h1 className="my-5 font-semibold text-4xl">Description</h1>
            <hr />
            <p className="my-2">
              <b>Company Name : </b> {data?.brand}
            </p>
            <p className="my-2">
              <b>Little Description : </b> {data?.description}
            </p>
            <p className="my-2">
              <b> Top speed of car : </b> {data?.topSpeed}
            </p>
            <p className="my-2">
              <b> Production of car : </b> {data?.production}
            </p>
            <p className="my-2">
              <b> Class Type of car : </b> {data?.classType}
            </p>
            <p className="my-2">
              <b> Body style of car : </b> {data?.bodyStyle}
            </p>
            <p className="my-2">
              <b> Car Length : </b> {data?.length}
            </p>
            <p className="my-2">
              <b> Car Width : </b> {data?.carWidth}
            </p>
            <p className="my-2">
              <b> Car Hieght : </b> {data?.carHeight}
            </p>
          </div>
        </div>
      </section>
      <section className="container-body">
        <div className="row">
          <div className="col-12">
            <h1 className=" text-4xl font-semibold my-5 text-center">
              Related Car
            </h1>
          </div>
          {datas.length === 0 ? (
            <CommonLoading />
          ) : (
            datas.slice(randomNumber, randomNumber2)?.map((data) => (
              <div
                key={data.id}
                className="col-10 col-md-6 col-lg-4 mx-auto md:mx-0 my-4"
              >
                <SimpleCard data={data} />
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default SellDetails;
