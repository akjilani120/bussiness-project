"use client";
import ShowStillPageName from "@/component/ShowStillPageName/ShowStillPageName";
import SimpleSelect from "@/component/SimpleSelect/SimpleSelect";
import SimpleSearchInput from "@/component/simpleSearchInput/SimpleSearchInput";
import React, { useEffect, useState } from "react";
import { getData } from "../page";
import CommonLoading from "@/component/CommonLoading/CommonLoading";
import Link from "next/link";
import SimpleCard from "@/component/SimpleCard/SimpleCard";
import SimpleCheckInput from "@/component/formComponent/SimpleCheckInput";

const Products = () => {
  const [datas, setDatas] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [checkBox, setCheckBox] = useState();
  const options = [
    { value: "BMW", label: "BMW" },
    { value: "Lamborghini", label: "Lamborghini" },
    { value: "Bugatti", label: "Bugatti" },
    { value: "Range Rover", label: "Range Rover" },
    { value: "Ferrari", label: "Ferrari" },
    { value: "Mercedes", label: "Mercedes" },
    { value: "Audi", label: "Audi" },
    { value: "Rolls Royce", label: "Rolls Royce" },
    { value: "Tesla", label: "Tesla" },
    { value: "Honda", label: "Honda" },
    { value: "Tata", label: "Tata" },
  ];
  useEffect(() => {
    const cashData = async () => {
      const datas = await getData();
      setDatas(datas);
    };
    cashData();
  }, []);

  return (
    <>
      <ShowStillPageName pageTitle={"Products"} />
      <section className="container-body mt-4">
        <div className="row">
          <div className="col-12">
            <div className="flex justify-center items-center mb-6">
              <div className="simple-search mr-5">
                <span>Search by name : </span>
                <SimpleSearchInput
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                />
              </div>
              <div className="name-search ml-5 mt-3">
                <SimpleSelect
                  selectTitle={"Search by name of company : "}
                  options={options}
                  selectedValue={selectValue}
                  setSelectedValue={setSelectValue}
                />
              </div>
            </div>
            <hr />
          </div>

          <div className="col-2 mt-5 ">
            <h1 className="my-2 text-4xl">Category</h1>

            <div>
              <h3 className="my-2">Availability</h3>
              <hr />
            </div>
          </div>
          <div className="col-9 mt-5 ">
            <div className="row">
              {datas.length === 0 ? (
                <CommonLoading />
              ) : (
                datas
                  ?.filter((item) =>
                    item.name.toLowerCase().includes(searchValue.toLowerCase())
                  )
                  ?.filter((item) =>
                    item.brand.toLowerCase().includes(selectValue.toLowerCase())
                  )
                  ?.map((data) => (
                    <div
                      key={data.id}
                      className="col-10 col-md-6 col-lg-3 mx-auto md:mx-0 my-4"
                    >
                      <Link href={`/${data?.model}`}>
                        {" "}
                        <SimpleCard data={data} />
                      </Link>
                    </div>
                  ))
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
