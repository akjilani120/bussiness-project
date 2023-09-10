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
  const [singleParshTitles, setsingleParshTitles] = useState(false);
  const [singleParsh, setSingleParsh] = useState(false);
  const [singleParsh2, setSingleParsh2] = useState(false);
  const [slideSetting, setSlideSetting] = useState();
  const [lightSec, setLightSec] = useState(false);
  const [lightOpacSec2, setLightOpacSec2] = useState(false);
  const handleSmallNav = () => {
    if (window.scrollY >= 170) {
      setSmallNav(true);
    } else {
      setSmallNav(false);
    }
  };
  const handleSlideSec = () => {
    if (window.scrollY >= 875 && window.scrollY <= 1250) {
      setslideSec(true);
    } else {
      setslideSec(false);
    }
  };
  const handleParshSec = () => {
    if (window.scrollY >= 1700 && window.scrollY <= 2300) {
      setParsheSec(true);

      if (window.scrollY >= 1700 && window.scrollY <= 1850) {
        setsingleParshTitles(true);
      } else {
        setsingleParshTitles(false);
      }
      if (window.scrollY >= 1851 && window.scrollY <= 2150) {
        setSingleParsh(true);
      } else {
        setSingleParsh(false);
      }
      if (window.scrollY >= 2151 && window.scrollY <= 2300) {
        setSingleParsh2(true);
      } else {
        setSingleParsh2(false);
      }
    } else {
      setParsheSec(false);
    }
  };
  const handleLight = () => {
    if (window.scrollY >= 2600 && window.scrollY <= 3000) {
      setLightSec(true);
      if (window.scrollY >= 2750 && window.scrollY <= 3000) {
        setLightOpacSec2(true);
      } else {
        setLightOpacSec2(false);
      }
    } else {
      setLightSec(false);
    }
  };
  useEffect(() => {
    const handleCheckLenght = () => {
      console.log(window.scrollY);
    };
    window.addEventListener("scroll", handleCheckLenght);
    window.addEventListener("scroll", handleSmallNav);
    window.addEventListener("scroll", handleSlideSec);
    window.addEventListener("scroll", handleParshSec);
    window.addEventListener("scroll", handleLight);
  }, []);

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

  const [imageIndex, setImageIndex] = useState(0);

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
    beforeChange: (current, next) => setImageIndex(next),
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
            ? "container  products-body border-b-2 border-gray-200 py-1"
            : "container   border-b-2 border-gray-200 py-1"
        }
      >
        <div className="flex justify-between items-center  ">
          <h6 className=" font-medium text-lg ">Bugati J20</h6>
          <div className="flex">
            <p className=" text-sm  font-semibold mt-2 text-black">Overview</p>
            <div className=" ml-24">
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
        <div className=" absolute bottom-0  " style={{ left: "35%" }}>
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
                  <div
                    key={idx}
                    className={
                      idx === imageIndex ? "slide activeSlide" : "slide"
                    }
                  >
                    {" "}
                    <img src={img} alt={img} />
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
            <img
              className="mx-auto"
              src="https://hagerty-media-prod.imgix.net/2020/11/Bugatti-Chiron-Pur-Sport-show-car-10-scaled.jpg?auto=format%2Ccompress&ixlib=php-3.3.0"
              alt=""
              style={{ height: "100vh" }}
            />
            <div
              className=" absolute  text-center text-white"
              style={
                singleParshTitles
                  ? {
                      top: "25%",
                      left: "30%",
                      transition: "500ms",
                      opacity: "1",
                    }
                  : { opacity: "0" }
              }
            >
              <h1 className=" font-semibold font-mono text-3xl">
                This is best Looking head light
              </h1>
              <p>
                Imaging light use for the car . The light has very brightness
              </p>
            </div>
            <div
              className=" absolute  w-1/2 mx-auto"
              style={
                singleParsh
                  ? {
                      top: "25%",
                      left: "30%",
                      transition: "500ms",
                      borderRadius: "50%",
                      opacity: "1",
                    }
                  : {
                      top: "15%",
                      left: "30%",
                      transition: "500ms",
                      borderRadius: "50%",
                      opacity: "0",
                    }
              }
            >
              <img
                src="https://i.pinimg.com/1200x/2c/c9/27/2cc92751cf614f73f162c784fdba07e9.jpg"
                alt=""
                style={
                  singleParsh
                    ? { borderRadius: "50%", transform: "scale(1.2)" }
                    : { borderRadius: "50%" }
                }
              />
            </div>
            <div
              className=" absolute  w-1/2 mx-auto"
              style={
                singleParsh2
                  ? {
                      top: "25%",
                      left: "30%",
                      transition: "500ms",
                      borderRadius: "50%",
                      opacity: "1",
                    }
                  : {
                      top: "25%",
                      left: "30%",
                      transition: "500ms",
                      borderRadius: "50%",
                      opacity: "0",
                    }
              }
            >
              <iframe
                width="500"
                height="500"
                src="https://www.youtube.com/embed/_0YXkCN4yJw"
                title="BUGATTI CHIRON PUR SPORT"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                // allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <section
        className=" relative bg-black  text-white"
        style={
          parsheSec
            ? { marginTop: "650px", height: "100vh" }
            : { marginTop: "0", height: "100vh" }
        }
      >
        <div
          className={
            lightSec
              ? "car-light-body flex justify-center items-center slide-add-style w-full"
              : "car-light-body flex justify-center items-center"
          }
          style={
            lightOpacSec2
              ? {
                  backgroundImage: `url("https://images.unsplash.com/photo-1562141961-b5d1dfb57448?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")`,
                  opacity: "1",
                  transition: "1s",
                }
              : {
                  backgroundImage: `url("https://images.unsplash.com/photo-1562141961-b5d1dfb57448?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")`,
                  opacity: "0.2",
                  transition: "1s",
                }
          }
        >
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
                style={lightOpacSec2 ? { left: "60px" } : { left: "0" }}
              ></div>
            </div>
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
                height: "80vh",
                backgroundImage: `url("https://car-images.bauersecure.com/wp-images/151407/screenshot_2022-06-06_at_18.40.37.png")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }
        }
      >
        <div
          className="container flex justify-center items-center pb-6 percent-body"
          style={{ height: "80vh", width: "100%" }}
        >
          <div>
            <div className="row my-5">
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
