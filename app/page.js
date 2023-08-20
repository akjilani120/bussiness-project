"use client";
import BannerCard from "@/component/BannerCard/BannerCard";
import SmallCard from "@/component/SmallCard/SmallCard";
import ZoomInSliderBanner from "@/component/ZoomInSlider/ZoomInSlider";
import { LiaShippingFastSolid } from "react-icons/lia";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { RiTimeLine } from "react-icons/ri";
import SimpleCard from "@/component/SimpleCard/SimpleCard";
import CustomAccordion from "@/component/Accordion/Accordion";
import CommonSlider from "@/component/CommonSlider/CommonSlider";
import "./moreStyleShit/homepage.css";
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
        <div className="w lg:w-1/4 px-2 md:mt-0 ">
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
      <div className="lg:flex lg:px-5 md:px-3 px-2 py-7">
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
          <div>
            <div className="flex justify-between">
              <div>
                <h2></h2>
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
            <CommonSlider titleStyle={titleStyle} />
          </div>
        </div>
      </div>
    </div>
  );
}
