import Image from "next/image";
import React from "react";
import SimpleAnotherButton from "../Extra-method/SimpleAnotherButton";
import SimpleCheckInput from "../formComponent/SimpleCheckInput";
import { CgCloseO } from "react-icons/cg";
import "./simpleModalstyle.css";
import Link from "next/link";
const SimpleModal = ({
  modalName,
  modalStyle,
  modalClassName,
  productImage,
  productName,
  productQuantity,
  productTotalPrice,
}) => {
  return (
    <div>
      <button
        className={`${modalClassName} border border-black px-3 py-2  block text-center cursor-pointer bg-black text-white w-2/4`}
        style={{ ...modalStyle }}
        onClick={() => document.getElementById("my_modal").showModal()}
      >
        {modalName}
      </button>
      <dialog
        id="my_modal"
        className="modal modal-bottom sm:modal-middle mx-auto "
      >
        <div className="modal-box relative">
          <div className="container-body">
            <div className="row">
              <div className="col-6">
                <Image
                  style={{ width: "100%", height: "250px" }}
                  src={productImage}
                  width={200}
                  height={200}
                  alt="modal image"
                />
                <p className=" mt-3">{productName}</p>
              </div>
              <div className="col-6">
                <p>
                  There are <b>{productQuantity}</b> items in your card
                </p>
                <p className=" text-lg font-semibold">
                  Total Price : {productTotalPrice}
                </p>
                <div className="my-4">
                  <SimpleAnotherButton
                    className=" w-full"
                    btnName={"Contiue Shipping"}
                  />
                </div>
                <div>
                  <Link href={"/k2/k2selldetails"}>
                    <SimpleAnotherButton
                      className=" w-full"
                      btnName={"View Card"}
                    />
                  </Link>
                </div>
                <div className="mt-2">
                  <SimpleCheckInput
                    type="checkbox"
                    checkboxTitle="I agree with the terms and conditions"
                  />
                </div>
                <SimpleAnotherButton
                  btnName={"Check Out"}
                  style={{
                    backgroundColor: "#e5717f",
                    marginTop: "20px",
                    border: "none",
                    width: "100%",
                    color: "white",
                  }}
                />
              </div>
            </div>
          </div>
          <div
            className="modal-action absolute"
            style={{ top: "-20px", right: "-15px" }}
          >
            <form method="dialog">
              <button className="btn bg-white" style={{ borderRadius: "15px" }}>
                {" "}
                <CgCloseO className="text-3xl text-red-700" />
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default SimpleModal;
