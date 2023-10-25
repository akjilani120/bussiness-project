"use client";
import React, { useEffect, useState } from "react";
import "../moreStyleShit/productStyle.css";
import bannerImage from "../../public/Images/single_product/single-banner.png";
import Image from "next/image";
import Slider from "react-slick";
import SimpleButton from "@/component/Extra-method/SimpleButton";
import SimpleProgress from "@/component/SimpleProgress/SimpleProgress";
import SimpleParcentNumber from "@/component/SimpleParcentNumber/SimpleParcentNumber";
const AboutPage = () => {
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
  const [screenWidth, setScreenWidth] = useState(990);
  const [screenHeight, setScreenHeight] = useState(855);
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
  });

  const images = [
    "https://images.unsplash.com/photo-1579508542697-bb18e7d9aeaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1571607388263-1044f9ea01dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1395&q=80",
    "https://images.unsplash.com/photo-1579508542697-bb18e7d9aeaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  ];
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
              <h6 className=" font-medium text-lg ">Bugati J20</h6>
              <div className="flex">
                <p className=" text-sm  font-semibold mt-2 text-black">
                  Overview
                </p>
                <div className=" ml-20">
                  <SimpleButton
                    title={"Buy now"}
                    style={{
                      padding: "8px 10px",
                      fontSize: "14px",
                      fontWeight: "600",
                      borderRadius: "40px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" my-5 mx-auto relative" style={{ height: "90vh" }}>
        <div className=" text-center pt-5">
          <h1 className="text-6xl font-semibold font-mono">
            J20{" "}
            <span className=" rounded-full border border-black p-2">V5</span>
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
              Bugati{" "}
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
            src={bannerImage}
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
                {images.map((img, idx) => (
                  <div key={idx}>
                    {" "}
                    <Image
                      className={idx === 1 ? "slide-first-img" : ""}
                      src={img}
                      alt="slide image"
                      width={300}
                      height={300}
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
              className="mx-auto"
              src="https://hagerty-media-prod.imgix.net/2020/11/Bugatti-Chiron-Pur-Sport-show-car-10-scaled.jpg?auto=format%2Ccompress&ixlib=php-3.3.0"
              alt=""
              style={{ height: "100vh", width: "100%" }}
              height={500}
              width={500}
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
              <img
                src="https://i.pinimg.com/1200x/2c/c9/27/2cc92751cf614f73f162c784fdba07e9.jpg"
                alt=""
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
              {/* <iframe
                className="video-show"
                src="https://www.youtube.com/embed/_0YXkCN4yJw"
                title="BUGATTI CHIRON PUR SPORT"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe> */}
              <video
                controls
                autoplay
                src="https://player.vimeo.com/external/425782758.sd.mp4?s=7a8157cf3904119459a88ff96b2363f2fe7dd530&profile_id=164&oauth2_token_id=57447761"
              ></video>
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
            backgroundImage: `url("https://images.unsplash.com/photo-1562141961-b5d1dfb57448?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")`,
          }}
        >
          <div className="relative w-full flex justify-center items-center h-full">
            <div className=" w-3/4">
              <h1 className=" font-mono font-semibold text-4xl text-center mb-8">
                One Tap to Light It up
              </h1>
              <img
                style={{ width: "90% ", height: "350px" }}
                src="https://images.unsplash.com/photo-1562141961-b5d1dfb57448?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
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
