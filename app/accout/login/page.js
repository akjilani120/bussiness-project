"use client";
import React, { useState } from "react";
import CommonInput from "@/component/formComponent/CommonInput";
import registeImag from "../../../public/Images/accountImage/login.png";
import Image from "next/image";
import Link from "next/link";
const Login = () => {
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    setInputValues("");
  };
  return (
    <div
      className="flex justify-center items-center px-10 py-10 bg-gray-100 "
      style={{ height: "100vh" }}
    >
      <div className=" w-3/4 lg:w-2/4 px-4 flex justify-center bg-white pb-4">
        <div className="sign w-full">
          <h1 className=" text-center text-xl" style={{ margin: "16px 0px" }}>
            Login
          </h1>
          <div>
            <div className="flex justify-center">
              <button
                style={{ padding: "12px 0px" }}
                class="w-full h-8 max-w-xs font-bold shadow-sm rounded-lg bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
              >
                <div class="bg-white p-1 rounded-full">
                  <svg class="w-4  " viewBox="0 0 533.5 544.3">
                    <path
                      d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                      fill="#4285f4"
                    />
                    <path
                      d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                      fill="#34a853"
                    />
                    <path
                      d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                      fill="#fbbc04"
                    />
                    <path
                      d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                      fill="#ea4335"
                    />
                  </svg>
                </div>
                <span class="ml-4 text-sm">Login with Google</span>
              </button>
            </div>
            <div>
              <div className="flex justify-center">
                <button
                  class="w-full h-8 max-w-xs font-bold shadow-sm rounded-lg  bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline "
                  style={{ marginTop: "20px", padding: "8px 0px" }}
                >
                  <div class="bg-white p-1 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="bi bi-facebook text-sky-500 w-4"
                      viewBox="0 0 16 16"
                    >
                      {" "}
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />{" "}
                    </svg>
                  </div>
                  <span class="ml-4 text-sm">Login with facebook</span>
                </button>
              </div>
            </div>
          </div>
          <div class=" border-b text-center " style={{ margin: "20px 0px" }}>
            <div class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
              Or Login with e-mail
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="" style={{ marginTop: "20px" }}>
              <CommonInput
                sideText={"Email"}
                className="w-full px-8 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                placeholder="Email"
                style={{ padding: "12px 8px" }}
                type="email"
                name="email"
                onChange={handleInputChange}
                value={inputValues.email}
                required
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <CommonInput
                sideText={"Password"}
                className="w-full px-8  rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="password"
                style={{ padding: "12px 8px" }}
                placeholder="password"
                name="password"
                onChange={handleInputChange}
                value={inputValues.password}
                required
              />
            </div>

            <div
              className="flex justify-center"
              style={{ paddingBottom: "12px" }}
            >
              <div class="mt-2 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-1/2 py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                <svg
                  class="w-6 h-6 -ml-2"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <path d="M20 8v6M23 11h-6" />
                </svg>
                <input className="ml-3" type="submit" value="Login" />
              </div>
            </div>
          </form>
          <div style={{ paddingBottom: "12px" }}>
            Create new Account
            <span>
              <Link
                href="/accout/register"
                className="ml-4 underline text-blue-400"
              >
                Sign up
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
