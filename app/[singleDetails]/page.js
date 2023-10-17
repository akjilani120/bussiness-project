"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import SimpleButton from "@/component/Extra-method/SimpleButton";
import SimpleProgress from "@/component/SimpleProgress/SimpleProgress";
import SimpleParcentNumber from "@/component/SimpleParcentNumber/SimpleParcentNumber";
import datas from "../../productDatas/datas.json";
import "../moreStyleShit/productStyle.css";
import Link from "next/link";

const AboutPage = ({ params }) => {
  let data;
  if (params.singleDetails != "" && datas.length != 0) {
    datas?.find((item) => {
      if (item.model == params.singleDetails) {
        data = item;
      }
    });
  }

  const [smallNav, setSmallNav] = useState(false);
  const [slideSec, setslideSec] = useState(false);
  const [parsheSec, setParsheSec] = useState(false);
  const [singleParshTitles, setsingleParshTitles] = useState({
    lgTitle: false,
    smTitle: false,
  });

  const [singleParsh, setSingleParsh] = useState({
    lgParse: false,
    smParse: false,
  });
  const [singleParshVideo, setSingleParshVideo] = useState({
    lgVideoShow: false,
    smVideoShow: false,
  });
  const [lightSec, setLightSec] = useState(false);
  const [lightOpacSec2, setLightOpacSec2] = useState({
    lgLightOpa: false,
    smlLightOpa: false,
  });
  const screnWidth = window.innerWidth;
  const screnHieght = window.innerWidth;
  const [screenWidth, setScreenWidth] = useState(screnWidth);
  const [screenHeight, setScreenHeight] = useState(screnHieght);
  const handleSmallNav = () => {
    if (window.scrollY >= 170) {
      setSmallNav(true);
    } else {
      setSmallNav(false);
    }
  };
  const handleSlideSec = () => {
    if (screenWidth >= 955 && screenHeight >= 850) {
      if (window.scrollY >= 875 && window.scrollY <= 1250) {
        setslideSec(true);
      } else {
        setslideSec(false);
      }
    }
  };
  const handleParshSec = () => {
    if (screenWidth >= 955 && screenHeight >= 850) {
      if (window.scrollY >= 1700 && window.scrollY <= 2300) {
        setParsheSec(true);

        if (window.scrollY >= 1700 && window.scrollY <= 1850) {
          setsingleParshTitles({
            lgTitle: true,
            smTitle: false,
          });
        } else {
          setsingleParshTitles({
            lgTitle: false,
          });
        }
        if (window.scrollY >= 1851 && window.scrollY <= 2150) {
          setSingleParsh({
            lgParse: true,
            smParse: false,
          });
        } else {
          setSingleParsh({
            lgParse: false,
          });
        }
        if (window.scrollY >= 2151 && window.scrollY <= 2300) {
          setSingleParshVideo({
            lgVideoShow: true,
            smVideoShow: false,
          });
        } else {
          setSingleParshVideo({
            lgVideoShow: false,
          });
        }
      } else {
        setParsheSec(false);
      }
    } else {
      setsingleParshTitles({
        smTitle: true,
      });
      setSingleParshVideo({
        smVideoShow: true,
      });
    }
  };

  const handleLight = () => {
    if (screenWidth >= 955 && screenHeight >= 850) {
      if (window.scrollY >= 2600 && window.scrollY <= 3000) {
        setLightSec(true);
        if (window.scrollY >= 2750 && window.scrollY <= 3000) {
          setLightOpacSec2({
            lgLightOpa: true,
            smlLightOpa: false,
          });
        } else {
          setLightOpacSec2({
            lgLightOpa: false,
          });
        }
      } else {
        setLightSec(false);
      }
    } else {
      setLightOpacSec2({
        smlLightOpa: true,
      });
    }
  };
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleSmallNav);
    window.addEventListener("scroll", handleSlideSec);
    window.addEventListener("scroll", handleParshSec);
    window.addEventListener("scroll", handleLight);
  }, []);

  const NextArrow = ({ onClick }) => {
    return <div className="arrow next" onClick={onClick}></div>;
  };

  const PrevArrow = ({ onClick }) => {
    return <div className="arrow prev" onClick={onClick}></div>;
  };

  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <ul style={{ marginTop: "20px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <>
      <section
        className={
          smallNav
            ? "products-body border-b-2 border-gray-200 py-1 "
            : " border-b-2 border-gray-200 py-1  "
        }
      >
        <div className="container">
          <div className="row  ">
            <div className="col-12 flex justify-between items-center ">
              <h6 className=" font-medium text-lg  ml-4">{data?.model}</h6>
              <div className="flex">
                <p className=" text-sm  font-semibold mt-2 text-black">
                  Overview
                </p>
                <div className="  lg:ml-20 md:ml-5 ml-4">
                  <Link href={`/${data?.model}/${data?.sellDetail}`}>
                    <SimpleButton
                      title={"Buy now"}
                      style={{
                        padding: "8px 10px",
                        fontSize: "14px",
                        fontWeight: "600",
                        borderRadius: "40px",
                      }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" my-5 mx-auto relative" style={{ height: "90vh" }}>
        <div className=" text-center pt-5">
          <h1 className="text-6xl font-semibold font-mono">
            {data?.model}
            <span className=" rounded-full border border-black p-2">
              {data?.version}
            </span>
          </h1>
          <h4
            className=" text-2xl font-semibold p-0 mt-2 font-mono"
            style={{ marginLeft: "15%" }}
          >
            Co-Engineered by{" "}
            <span
              style={{
                backgroundColor: "#141E8B",
                padding: "13px",
                borderRadius: "30px  0",
              }}
              className=" text-white"
            >
              {data?.brand}
            </span>
          </h4>
          <h1
            className=" font-semibold font-mono  pt-8 "
            style={{ fontSize: "35px" }}
          >
            Photography Redefined
          </h1>
        </div>
        <div className=" absolute bottom-0  lg:left-60 md:left-20  left-6">
          <Image
            className="product-banner"
            src={data?.modelImage}
            height={600}
            width={600}
            alt="banner"
          />
        </div>
      </section>

      <section className=" relative">
        <div
          className={
            slideSec
              ? "slide-body slide-add-style mt-14  flex items-center"
              : "slide-body mt-14 flex items-center"
          }
          style={{ height: "100vh" }}
        >
          <div className="container">
            <div>
              <Slider {...settings}>
                {data?.productShowImg.map((img, idx) => (
                  <div key={idx}>
                    {" "}
                    <Image
                      className={idx === 1 ? "slide-first-img" : ""}
                      src={img}
                      height={600}
                      width={600}
                      alt="slide image"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <section
        className=" bg-black py-6 relative"
        style={
          slideSec
            ? { marginTop: "870px" }
            : { marginTop: "0px", height: "100vh" }
        }
      >
        <div
          className={parsheSec ? "slide-add-style" : ""}
          style={{ height: "100vh" }}
        >
          <div className=" relative">
            <Image
              src={data?.parshData?.parsheBgImage}
              alt="parsh-bg"
              width={1000}
              height={1000}
              style={{ height: "100vh", width: "100%" }}
            />
            <div
              className={" absolute  text-center text-white"}
              style={
                singleParshTitles.lgTitle || singleParshTitles.smTitle
                  ? {
                      top: singleParshTitles.smTitle ? "5%" : "25%",
                      left: singleParshTitles.smTitle ? "10%" : "30%",
                      transition: "800ms",
                      borderRadius: "50%",
                      opacity: "1",
                    }
                  : {
                      top: "5%",
                      left: "10%",
                      transition: "800ms",
                      opacity: "0",
                    }
              }
            >
              <h1 className=" font-semibold font-mono text-4xl">
                This is best Looking head light
              </h1>
              <p>
                Imaging light use for the car . The light has very brightness
              </p>
            </div>
            <div
              className=" absolute  w-1/2 mx-auto"
              style={
                singleParsh.lgParse
                  ? {
                      top: "25%",
                      left: "30%",
                      transition: "800ms",
                      borderRadius: "50%",
                      opacity: "1",
                    }
                  : {
                      transition: "800ms",
                      opacity: "0",
                    }
              }
            >
              <Image
                src={data?.parshData?.parshImage}
                alt="parshe image"
                width={500}
                height={500}
                style={
                  singleParsh.lgParse
                    ? { borderRadius: "50%", transform: "scale(1.2)" }
                    : { borderRadius: "50%" }
                }
              />
            </div>
            <div
              className=" absolute  w-1/2 mx-auto"
              style={
                singleParshVideo.lgVideoShow || singleParshVideo.smVideoShow
                  ? {
                      top: "25%",
                      left: singleParshVideo.smVideoShow ? "10%" : "30%",
                      transition: "800ms",
                      borderRadius: "50%",
                      opacity: "1",
                    }
                  : {
                      top: "40%",
                      left: "10%",
                      transition: "800ms",
                      opacity: "0",
                    }
              }
            >
              <video controls autoplay src={data?.parshData?.videoShow}></video>
            </div>
          </div>
        </div>
      </section>
      <section
        className=" relative   text-white"
        style={parsheSec ? { marginTop: "650px" } : { marginTop: "0" }}
      >
        <div
          className={
            lightSec
              ? "car-light-body  slide-add-style w-full"
              : "car-light-body "
          }
          style={{
            backgroundImage: `url("${data?.lightingImage}")`,
          }}
        >
          <div className="relative w-full flex justify-center items-center h-full">
            <div className=" w-3/4">
              <h1 className=" font-mono font-semibold text-4xl text-center mb-8">
                One Tap to Light It up
              </h1>
              <Image
                style={{ width: "90% ", height: "350px" }}
                width={500}
                height={500}
                src={data?.lightingImage}
                alt="light pic"
              />

              <div className="relative switch-btn-body text-center mt-5">
                <div className="switch-btn-items">
                  <span>ON</span> <span className=" ml-6">OFF</span>
                </div>
                <div
                  className="switch-btn-abslt absolute top-0 "
                  style={
                    lightOpacSec2.lgLightOpa || lightOpacSec2.smlLightOpa
                      ? { left: "60px" }
                      : { left: "0" }
                  }
                ></div>
              </div>
            </div>
            <div
              className="light-sec-overflow absolute top-0 left-0"
              style={
                lightOpacSec2.lgLightOpa || lightOpacSec2.smlLightOpa
                  ? { backgroundColor: "transparent", transition: "500ms" }
                  : { backgroundColor: "#000000cb" }
              }
            ></div>
          </div>
        </div>
      </section>
      <section
        style={
          lightSec
            ? {
                marginTop: "650px",
              }
            : {
                marginTop: "0",
                height: "100vh",
                backgroundImage: `url("https://car-images.bauersecure.com/wp-images/151407/screenshot_2022-06-06_at_18.40.37.png")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                width: "100%",
              }
        }
      >
        <div
          className="flex justify-center items-center py-6  percent-body w-full"
          style={{ height: "100vh" }}
        >
          <div className="container">
            <div className="row my-5 ">
              <div className="col-12 ">
                <h1 className="text-white text-center font-semibold font-sans mb-7 text-4xl">
                  Improved for smoother Exprerice
                </h1>
              </div>
              <div className="col-6 col-lg-4">
                <SimpleProgress ProgressTitle={"Abdul Kader Jilani"} />
              </div>
              <div className="col-6 col-lg-2">
                {" "}
                <SimpleParcentNumber
                  percentNumber={60}
                  percentDetails={"This best rouning car"}
                />{" "}
              </div>
              <div className="col-6 col-lg-4">
                <SimpleProgress ProgressTitle={"Abdul Kader Jilani"} />
              </div>
              <div className="col-6 col-lg-2">
                <SimpleParcentNumber
                  percentNumber={60}
                  percentDetails={"This best rouning car"}
                />{" "}
              </div>
            </div>
            <div className="row my-5">
              <div className="col-6 col-lg-4">
                <SimpleProgress ProgressTitle={"Abdul Kader Jilani"} />
              </div>
              <div className="col-6 col-lg-2">
                {" "}
                <SimpleParcentNumber
                  percentNumber={60}
                  percentDetails={"This best rouning car"}
                />{" "}
              </div>
              <div className="col-6 col-lg-4">
                <SimpleProgress ProgressTitle={"Abdul Kader Jilani"} />
              </div>
              <div className="col-6 col-lg-2">
                <SimpleParcentNumber
                  percentNumber={60}
                  percentDetails={"This best rouning car"}
                />{" "}
              </div>
            </div>
            <div className="row my-5">
              <div className="col-6 col-lg-4">
                <SimpleProgress ProgressTitle={"Abdul Kader Jilani"} />
              </div>
              <div className="col-6 col-lg-2">
                {" "}
                <SimpleParcentNumber
                  percentNumber={60}
                  percentDetails={"This best rouning car"}
                />{" "}
              </div>
              <div className="col-6 col-lg-4">
                <SimpleProgress ProgressTitle={"Abdul Kader Jilani"} />
              </div>
              <div className="col-6 col-lg-2">
                <SimpleParcentNumber
                  percentNumber={60}
                  percentDetails={"This best rouning car"}
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
