"use client";
import BannerCard from "@/component/BannerCard/BannerCard";
import SmallCard from "@/component/SmallCard/SmallCard";
import ZoomInSliderBanner from "@/component/ZoomInSlider/ZoomInSlider";
import { LiaShippingFastSolid } from "react-icons/lia";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { RiTimeLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { PageScrollCustomStyle } from "@/utylites/CustomStyle";
import SimpleCard from "@/component/SimpleCard/SimpleCard";

export default function Home() {
  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];
  const [addColor, setAddColor] = useState(false);
  const [addColor2, setAddColor2] = useState(false);
  const clickFunc = () => {
    setAddColor2(!addColor2);
  };
  useEffect(() => {
    PageScrollCustomStyle(setAddColor, 120);
  }, []);
  return (
    <div>
      <div className="lg:flex lg:px-5 md:px-3 px-2 py-7">
        <div className="lg:w-3/4 px-2">
          <ZoomInSliderBanner
            images={images}
            style={{ height: "500px" }}
            isIndicators={true}
          />
        </div>
        <div className="w lg:w-1/4 px-2 md:mt-0 mt-4">
          <BannerCard />
        </div>
      </div>
      <div className="lg:flex justify-around  py-4  bg-sky-950 ">
        <div className=" w-4/5 lg:w-1/3 px-4 mt-2 lg:mt-0 z-50 mb-7">
          <SmallCard
            icon={LiaShippingFastSolid}
            titleName={"Free Shipping and Return"}
            sortDescribe={"Free Shipping on All Orders Over $99."}
          />
        </div>
        <div className=" w-4/5 lg:w-1/3 px-4 mt-2 lg:mt-0 z-50 mb-7">
          <SmallCard
            icon={HiOutlineCurrencyDollar}
            titleName={"Money back Guarantee"}
            sortDescribe={"100% Money Back Guarantee"}
          />
        </div>
        <div className=" lg:w-1/3 w-4/5 px-4 mt-2 lg:mt-0 z-50 mb-7">
          <SmallCard
            icon={RiTimeLine}
            titleName={"ONLINE SUPPORT 24/7"}
            sortDescribe={"We have 24 hours support system"}
          />
        </div>
      </div>
      <div className="lg:flex justify-around  py-4 my-7 ">
        <div className=" w-4/5 lg:w-1/3 px-4 mt-2 lg:mt-0 mb-7">
          <SimpleCard />
        </div>
        <div className=" w-4/5 lg:w-1/3 px-4 mt-2 lg:mt-0  mb-7">
          <SimpleCard />
        </div>
        <div className=" lg:w-1/3 w-4/5 px-4 mt-2 lg:mt-0 mb-7">
          <SimpleCard />
        </div>
      </div>
    </div>
  );
}
