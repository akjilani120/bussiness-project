"use client";
import BannerCard from "@/component/BannerCard/BannerCard";

import ZoomInSliderBanner from "@/component/ZoomInSlider/ZoomInSlider";
import { LiaShippingFastSolid } from "react-icons/lia";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { RiTimeLine } from "react-icons/ri";
import CustomAccordion from "@/component/Accordion/Accordion";
import CommonSlider from "@/component/CommonSlider/CommonSlider";
import "./moreStyleShit/homepage.css";
import SimpleSmallCard from "@/component/SimpleCard/SimpleSmallCard";
import NameplateCard from "@/component/NameplateCard/NameplateCard";
import SimpleCard from "@/component/SimpleCard/SimpleCard";
import CommonInput from "@/component/formComponent/CommonInput";
import { useState } from "react";
import Image from "next/image";
export default function Home() {
  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];
  const accordionItems = ["First items", "Second items", "Third items"];
  const titleStyle = {
    fontSize: "70px",
    textAlign: "center",
  };
  const cardStyle = {
    display: "flex",
    alignItems: "center",
    margin: "20px 0px",
    justifyContent: "center",
  };
  const [subcribEmail, setSubcribEmail] = useState("");
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSubcribEmail(value);
  };
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
    },
  ];
  const testomoniyaData = [
    {
      image:
        "https://m2.portotheme.com/media/wysiwyg/smartwave/porto/homepage/13/shop13_off.png",
      headName: "Jakir kha",
      headtitle: "AK band Ceo",
      description: "This is best ecommerce website",
    },
    {
      image:
        "https://m2.portotheme.com/media/wysiwyg/smartwave/porto/homepage/13/shop13_off.png",
      headName: "Jakir kha",
      headtitle: "AK band Ceo",
      description: "This is best ecommerce website",
    },
    {
      image:
        "https://m2.portotheme.com/media/wysiwyg/smartwave/porto/homepage/13/shop13_off.png",
      headName: "Jakir kha",
      headtitle: "AK band Ceo",
      description: "This is best ecommerce website",
    },
  ];
  return (
    <>
      <section className="container my-4">
        <div className="row">
          <div className="col-lg-9 col-md-12 col-12">
            <ZoomInSliderBanner
              images={images}
              style={{ height: "500px" }}
              isIndicators={true}
            />
          </div>
          <div className="col-lg-3 col-md-12 col-12 md:mt-0 mt-3">
            <BannerCard />
          </div>
        </div>
      </section>
      <section className="container  py-6  bg-sky-950 ">
        <div className="row ">
          <div className="col-11 mx-auto col-lg-4 col-md-6  md:my-3 lg:my-0 my-5">
            <NameplateCard
              icon={LiaShippingFastSolid}
              titleName={"Free Shipping and Return"}
              sortDescribe={"Free Shipping on All Orders Over $99."}
            />
          </div>
          <div className=" col-11 mx-auto col-lg-4 col-md-6 md:my-3 lg:my-0 my-5">
            <NameplateCard
              icon={HiOutlineCurrencyDollar}
              titleName={"Money back Guarantee"}
              sortDescribe={"100% Money Back Guarantee"}
            />
          </div>
          <div className="col-11 mx-auto col-lg-4 col-md-6  md:my-3 lg:my-0 my-5">
            <NameplateCard
              icon={RiTimeLine}
              titleName={"ONLINE SUPPORT 24/7"}
              sortDescribe={"We have 24 hours support system"}
            />
          </div>
        </div>
      </section>
      <section className="lg:flex lg:px-5 md:px-3 px-2 py-7">
        <div className="lg:w-3/4 md:w-2/4 w-full  ">
          <div className="lg:flex justify-around">
            <div className=" w-4/5 lg:w-1/3 px-2 mt-2 lg:mt-0 mb-7">
              <SimpleCard />
            </div>
            <div className=" w-4/5 lg:w-1/3  mt-2 lg:mt-0  mb-7">
              <SimpleCard />
            </div>
            <div className=" lg:w-1/3 w-4/5  mt-2 lg:mt-0 mb-7">
              <SimpleCard />
            </div>
          </div>
          <div className="p pr-2 my-5">
            <div
              className="show-car-body"
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "350px",
              }}
            >
              <div className="showCar-overflow flex justify-center items-center">
                <div>
                  <h1>Abdul Kader Jilani</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="px-5">
            <div className="md:flex justify-between">
              <div className="lf lg:w-1/4 w-1/2">
                <h2>Top Rated Products</h2>
                <div>
                  <SimpleSmallCard
                    cardStyle={cardStyle}
                    imageHight={100}
                    imageWidth={100}
                  />
                </div>
                <div>
                  <SimpleSmallCard
                    cardStyle={cardStyle}
                    imageHight={100}
                    imageWidth={100}
                  />
                </div>
                <div>
                  <SimpleSmallCard
                    cardStyle={cardStyle}
                    imageHight={100}
                    imageWidth={100}
                  />
                </div>
                <div>
                  <SimpleSmallCard
                    cardStyle={cardStyle}
                    imageHight={100}
                    imageWidth={100}
                  />
                </div>
                <div>
                  <SimpleSmallCard
                    cardStyle={cardStyle}
                    imageHight={100}
                    imageWidth={100}
                  />
                </div>
              </div>
              <div className="lf lg:w-1/4 w-1/2">
                <h2>Top Rated Products</h2>
                <div>
                  <SimpleSmallCard
                    cardStyle={cardStyle}
                    imageHight={100}
                    imageWidth={100}
                  />
                </div>
                <div>
                  <SimpleSmallCard
                    cardStyle={cardStyle}
                    imageHight={100}
                    imageWidth={100}
                  />
                </div>
                <div>
                  <SimpleSmallCard
                    cardStyle={cardStyle}
                    imageHight={100}
                    imageWidth={100}
                  />
                </div>
                <div>
                  <SimpleSmallCard
                    cardStyle={cardStyle}
                    imageHight={100}
                    imageWidth={100}
                  />
                </div>
                <div>
                  <SimpleSmallCard
                    cardStyle={cardStyle}
                    imageHight={100}
                    imageWidth={100}
                  />
                </div>
              </div>
              <div className="lf lg:w-1/4 w-1/2">
                <h2>Top Rated Products</h2>
                <div>
                  <SimpleSmallCard
                    cardStyle={cardStyle}
                    imageHight={100}
                    imageWidth={100}
                  />
                </div>
                <div>
                  <SimpleSmallCard
                    cardStyle={cardStyle}
                    imageHight={100}
                    imageWidth={100}
                  />
                </div>
                <div>
                  <SimpleSmallCard
                    cardStyle={cardStyle}
                    imageHight={100}
                    imageWidth={100}
                  />
                </div>
                <div>
                  <SimpleSmallCard
                    cardStyle={cardStyle}
                    imageHight={100}
                    imageWidth={100}
                  />
                </div>
                <div>
                  <SimpleSmallCard
                    cardStyle={cardStyle}
                    imageHight={100}
                    imageWidth={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:w-1/4 md:w-2/4 w-full pr-4">
          <div className="border border-solid  border-blue-100 ">
            <div className="text-center py-3 bg-slate-300">
              <h4 className=" ">BROWSE CATEGORIES</h4>
            </div>
            <div className="px-3">
              <CustomAccordion
                accordionItems={accordionItems}
                title={"My items"}
              />
              <CustomAccordion
                accordionItems={accordionItems}
                title={"My items"}
              />
              <CustomAccordion
                accordionItems={accordionItems}
                title={"My items"}
              />
              <CustomAccordion
                accordionItems={accordionItems}
                title={"My items"}
              />
              <CustomAccordion
                accordionItems={accordionItems}
                title={"My items"}
              />
            </div>
          </div>
          <div className="p-5 mt-6" style={{ border: "1px solid silver" }}>
            <CommonSlider slidesItems={slidesItems} titleStyle={titleStyle} />
          </div>
          <div className="my-5">
            <div className=" p-5 bg-slate-300 text-center">
              <h3 className=" font-bold">SUBSCRIBE NEWSLETTER</h3>
              <p className="my-5">
                Get all the latest information on Events, Sales and Offers.
              </p>
              <div
                className="flex items-center bg-white  px-4 "
                style={{
                  borderRadius: "47px",
                  overflow: "hidden",
                  height: "45px",
                }}
              >
                <div>
                  <AiOutlineMail
                    className="mt-1"
                    style={{ fontSize: "30px" }}
                  />
                </div>

                <CommonInput
                  type="email"
                  style={{ border: "none", height: "24px", padding: "5px" }}
                  placeholder="Email Address"
                  onChange={handleInputChange}
                  value={subcribEmail}
                  className="ml-1"
                />
              </div>
              <button className="p-3 mt-4 mb-3 rounded-md focus:outline-none bg-black text-white hover:bg-red-700">
                SUBSCRIBE
              </button>
            </div>
          </div>
          <section className="p-5 mt-6" style={{ border: "3px solid red" }}>
            <CommonSlider
              slidesItems={testomoniyaData}
              titleStyle={titleStyle}
              imageStyle={{
                height: "70px",
                width: "70px",
                marginRight: "15px",
                borderRadius: "50%",
              }}
              slideDuration={3000}
            />
          </section>
        </div>
      </section>
    </>
  );
}
