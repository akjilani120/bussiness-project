"use client";
import SimpleAnotherButton from "@/component/Extra-method/SimpleAnotherButton";
import SimpleSelect from "@/component/SimpleSelect/SimpleSelect";
import CommonInput from "@/component/formComponent/CommonInput";
import SimpleCheckInput from "@/component/formComponent/SimpleCheckInput";
import Link from "next/link";
import React, { useState } from "react";
import { BsRecordCircleFill } from "react-icons/bs";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

const PayDetails = () => {
  const searchParams = useSearchParams();
  const productName = searchParams.get("productName");
  const productQuantity = searchParams.get("productQuantity");
  const productImg = searchParams.get("productImg");
  const productPrice = searchParams.get("productPrice");
  const [country, setCountry] = useState("");
  const [crediteCardValue, setCrediteCardValue] = useState({
    cardNumber: "",
    expairdate: "",
    secureCode: "",
    cardName: "",
  });
  const [fieldValue, setFieldValue] = useState({
    emailOrNumber: "",
    country: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    postalCode: "",
    shipping: "120",
  });
  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setFieldValue((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };
  const handleCreaditeCardInputValue = (e) => {
    const { name, value } = e.target;
    setCrediteCardValue((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };
  const handleSelect = (e) => {
    const { value } = e.target;
    setCountry(value);
  };
  console.log("country", country);
  const options = [
    { value: "Bangladesh", label: "Bangladesh" },
    { value: "India", label: "india" },
    { value: "Pakistan", label: "Pakistan" },
    { value: "Palestine", label: "Palestine" },
    { value: "Vuttan", label: "Vuttan" },
    { value: "Afganithan", label: "Afganithan" },
  ];
  const inputStyle = {
    border: "1px solid black",
    width: "100%",
    display: "block",
    padding: "5px 10px",
    borderRadius: "5px",
    color: "black",
  };
  const productSellPrice = (title, price) => {
    return (
      <div className=" flex justify-around my-2">
        <p
          className={
            title == "Total" ? " text-lg text- font-semibold" : "text-sm"
          }
        >
          {title}
        </p>
        <p className={title == "Total" ? " text-lg font-semibold" : "text-sm"}>
          ${price}
        </p>
      </div>
    );
  };
  const totalPrice = 120 + 500 + productPrice;
  console.log("field ", fieldValue);
  return (
    <section className="container-body ">
      <div className="row">
        <div className="col-md-6 col-7 p-4">
          <div className="md:flex justify-between">
            <h2 className="text-4xl font-semibold">Contact</h2>
            <p>
              Have an account{" "}
              <Link href="/accout/login">
                <b>Log in </b>
              </Link>
            </p>
          </div>
          <div>
            <form>
              <div>
                <CommonInput
                  required
                  onChange={handleInputValue}
                  name={"emailOrNumber"}
                  value={fieldValue.emailOrNumber}
                  sideText={"Email "}
                  style={inputStyle}
                  type="text"
                  placeholder="Email or Phone Number"
                />
              </div>
              <div className="mt-2">
                <SimpleCheckInput
                  type={"checkbox"}
                  required
                  checkboxTitle="Email me with news and offers"
                />
              </div>
            </form>
          </div>
          <div>
            <h2 className="text-4xl font-semibold my-4">Delivary</h2>
            <form>
              <div>
                <SimpleSelect
                  options={options}
                  selectTitle={"Select Country"}
                  onChange={handleSelect}
                />
              </div>
              <div className="flex">
                <div className="w-2/4 ">
                  <CommonInput
                    style={inputStyle}
                    type="text"
                    placeholder="First Name (opsonal)"
                    onChange={handleInputValue}
                    name={"firstName"}
                    value={fieldValue.firstName}
                  />
                </div>
                <div className="w-2/4 pl-1">
                  <CommonInput
                    style={inputStyle}
                    required
                    type="text"
                    placeholder="Last Name"
                    onChange={handleInputValue}
                    name={"lastName"}
                    value={fieldValue.lastName}
                  />
                </div>
              </div>
              <div>
                <CommonInput
                  style={inputStyle}
                  type="text"
                  placeholder="Address"
                  required
                  onChange={handleInputValue}
                  name={"address"}
                  value={fieldValue.address}
                />
              </div>

              <div>
                <CommonInput
                  type="text"
                  placeholder="Apartment suite , etc (optional)"
                  style={inputStyle}
                  onChange={handleInputValue}
                  name={"apartment"}
                  value={fieldValue.apartment}
                />
              </div>
              <div>
                <CommonInput
                  style={inputStyle}
                  type="text"
                  placeholder="City"
                  required
                  onChange={handleInputValue}
                  name={"city"}
                  value={fieldValue.city}
                />
              </div>
              <div>
                <CommonInput
                  style={inputStyle}
                  type="number"
                  placeholder="Postal Code"
                  required
                  onChange={handleInputValue}
                  name={"postalCode"}
                  value={fieldValue.postalCode}
                />
              </div>
              <div>
                <SimpleCheckInput
                  type={"checkbox"}
                  checkboxTitle="Save this information for next time"
                  required
                />
              </div>
              <h1 className="text-2xl font-semibold my-4"> Shipping Method</h1>
              <div className="flex justify-between bg-slate-200 text-black rounded-md py-2 px-3">
                <p>Standard Shipping </p>
                <p> $ 120 </p>
              </div>
            </form>
          </div>
          <div className="bg-slate-200 my-4 ">
            <div className="flex  border border-black py-3 px-2 items-center rounded-md">
              <BsRecordCircleFill />
              <p className="ml-3">Credit Card</p>
            </div>
            <div className="p-3">
              <form>
                <CommonInput
                  type="number"
                  name={"cardNumber"}
                  onChange={handleCreaditeCardInputValue}
                  value={crediteCardValue.cardNumber}
                  required
                  placeholder="Card Number"
                  className="px-3 py-2"
                  style={{
                    border: "1px silver solid",
                    width: "100%",
                    borderRadius: "5px",
                  }}
                />
                <div className="flex ">
                  <div className="w-2/4 mr-1">
                    <CommonInput
                      name="expairdate"
                      onChange={handleCreaditeCardInputValue}
                      value={crediteCardValue.expairdate}
                      required
                      type="date"
                      placeholder="Expiration Date (MM/dd)"
                      className="px-3 py-2"
                      style={{
                        border: "1px silver solid",
                        width: "100%",
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                  <div className="w-2/4">
                    <CommonInput
                      required
                      name="secureCode"
                      onChange={handleCreaditeCardInputValue}
                      value={crediteCardValue.secureCode}
                      type="number"
                      placeholder="Secure Code"
                      className="px-3 py-2"
                      style={{
                        border: "1px silver solid",
                        width: "100%",
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                </div>
                <div>
                  <CommonInput
                    required
                    type="text"
                    name="cardName"
                    onChange={handleCreaditeCardInputValue}
                    value={crediteCardValue.cardName}
                    placeholder="Name of Card"
                    className="px-3 py-2"
                    style={{
                      border: "1px silver solid",
                      width: "100%",
                      borderRadius: "5px",
                    }}
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="py-2">
            <SimpleAnotherButton
              btnName="Pay Now"
              style={{ backgroundColor: "black", color: "white" }}
            />
          </div>
        </div>
        <div className="col-md-6 bg-slate-200 md:p-3 col-5  relative">
          <div className="md:fixed" style={{ top: "15%", right: "20%" }}>
            <div className=" md:flex justify-around items-center">
              <div className="relative">
                <div className="flex items-center">
                  <Image
                    src={productImg}
                    alt="product image"
                    width={100}
                    height={100}
                  />
                  <p className=" text-sm ml-3">{productName}</p>
                </div>
                <div className=" absolute top-0" style={{ left: "0%" }}>
                  <span
                    className=" bg-black text-white p-1 rounded-full block text-center"
                    style={{ width: "30px", height: "30px" }}
                  >
                    {productQuantity}
                  </span>
                </div>
              </div>
              <p className=" text-sm ml-4"> ${productPrice}.000</p>
            </div>
            {productSellPrice("Subtotal", productPrice)}
            {productSellPrice("Shipping", 1200.0)}
            {productSellPrice("Extement Tax", 500.0)}
            {productSellPrice("Total", totalPrice)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PayDetails;
