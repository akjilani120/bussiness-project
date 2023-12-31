"use client";
import BannerCard from "@/component/BannerCard/BannerCard";
import dynamic from "next/dynamic";
import ZoomInSliderBanner from "@/component/ZoomInSlider/ZoomInSlider";
import { LiaShippingFastSolid } from "react-icons/lia";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { RiTimeLine } from "react-icons/ri";
import CustomAccordion from "@/component/Accordion/Accordion";
import CommonSlider from "@/component/CommonSlider/CommonSlider";
import zoomslideItems from "../productDatas/zoomslideData.json";
import slidesItems from "../productDatas/slidesItems.json";
import testomoniyaData from "../productDatas/testomoniyaData.json";
import SimpleSmallCard from "@/component/SimpleCard/SimpleSmallCard";
import NameplateCard from "@/component/NameplateCard/NameplateCard";
import SimpleCard from "@/component/SimpleCard/SimpleCard";
import CommonInput from "@/component/formComponent/CommonInput";
import { useEffect, useState } from "react";
import Link from "next/link";
import CommonLoading from "@/component/CommonLoading/CommonLoading";
import "./moreStyleShit/homepage.css";
export async function getData() {
  const res = await fetch("datas.json");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const datas = await res.json();
  return datas;
}
const Home = () => {
  const [datas, setDatas] = useState([]);
  const [subcribEmail, setSubcribEmail] = useState("");
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSubcribEmail(value);
  };

  useEffect(() => {
    const cashData = async () => {
      const datas = await getData();
      setDatas(datas);
    };
    cashData();
  }, []);

  const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
    ssr: false,
  });

  const accordionItems = ["First items", "Second items", "Third items"];
  const titleStyle = {
    fontSize: "70px",
    textAlign: "center",
  };
  const cardStyle = {
    display: "flex",
    alignItems: "center",
    margin: "20px 0px",
  };

  const smallCardShow = (startSlice, endSlice, loading) => {
    return (
      <div className="">
        {datas.length === 0 && loading == true ? (
          <CommonLoading />
        ) : (
          datas.slice(startSlice, endSlice)?.map((data) => (
            <div key={data.id} className="my-2">
              <Link href={`/${data?.model}`}>
                <SimpleSmallCard
                  imageHight={100}
                  imageWidth={100}
                  data={data}
                />
              </Link>
            </div>
          ))
        )}
      </div>
    );
  };
  const simpleAccordion = (title) => {
    return <CustomAccordion accordionItems={accordionItems} title={title} />;
  };
  return (
    <>
      <section className="container-body my-4">
        <div className="row">
          <div className="col-lg-9 col-md-12 col-12">
            <ZoomInSliderBanner
              zoomslideItems={
                zoomslideItems.length == 0 ? <CommonLoading /> : zoomslideItems
              }
              style={{ height: "500px" }}
              isIndicators={true}
            />
          </div>
          <div className="col-lg-3 col-md-12 col-12 md:mt-0 mt-3">
            <BannerCard />
          </div>
        </div>
      </section>
      <section className="container-body  py-6  bg-sky-950 ">
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
      <section className="container-body py-7">
        <div className="row">
          <div className="col-12 col-md-9 col-lg-9">
            <div className="row">
              {datas.length === 0 ? (
                <CommonLoading />
              ) : (
                datas.slice(1, 10)?.map((data) => (
                  <div
                    key={data.id}
                    className="col-10 col-md-6 col-lg-4 mx-auto md:mx-0 my-4"
                  >
                    <Link href={`/${data?.model}`}>
                      {" "}
                      <SimpleCard data={data} />
                    </Link>
                  </div>
                ))
              )}
            </div>
            <div className="p pr-2 my-5">
              <div
                className="show-car-body"
                style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80")`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: "400px",
                }}
              >
                <div className="showCar-overflow flex justify-center items-center p-5">
                  <div
                    className=" flex justify-center items-center"
                    style={{
                      backgroundImage: `url("https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1400&q=80")`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      height: "100%",
                      width: "100%",
                      borderRadius: "10px",
                    }}
                  >
                    <div>
                      <h1 className="text-center text-4xl font-bold font-mono text-sky-700">
                        Mercedes Benz
                      </h1>
                      <p className=" text-justify text-lg font-medium">
                        {" "}
                        The Mercedes Benz has special offer. We are giving 40%
                        discout.This discout time is limited{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-body">
              <div className="row">
                <div className="col-8 mx-auto md:mx-0 col-sm-6 col-lg-4">
                  <h2 className=" font-bold text-3xl mb-4">
                    Top Rated Products
                  </h2>
                  {smallCardShow(1, 4, true)}
                </div>
                <div className="col-8 mx-auto md:mx-0 col-sm-6 col-lg-4">
                  <h2 className=" font-bold text-3xl mb-4">
                    Top Seller Products
                  </h2>
                  {smallCardShow(4, 7)}
                </div>
                <div className="col-8 mx-auto md:mx-0 col-sm-6 col-lg-4">
                  <h2 className=" font-bold text-3xl mb-4">
                    Top Lover Products
                  </h2>
                  {smallCardShow(8, 11)}
                </div>
              </div>
            </div>
          </div>
          <div className="col-9 mx-auto col-md-3 col-lg-3">
            <div className="border border-solid  border-blue-100 ">
              <div className="text-center py-3 bg-slate-300">
                <h4 className=" ">BROWSE CATEGORIES</h4>
              </div>
              <div className="px-3">
                {simpleAccordion("BMW  car Items")}
                {simpleAccordion("Rolls Royal car Items")}
                {simpleAccordion("LamborGini car Items")}
                {simpleAccordion("Range Rover car Items")}
                {simpleAccordion("Tata car  Items")}
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
                slidesItems={
                  testomoniyaData.length == 0 ? (
                    <CommonLoading />
                  ) : (
                    testomoniyaData
                  )
                }
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
        </div>
      </section>
    </>
  );
};

export default Home;
