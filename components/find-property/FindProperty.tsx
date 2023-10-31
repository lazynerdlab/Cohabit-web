"use client";
import { useState } from "react";
import HomeCard from "../cards/HomeCard";
import Filter from "./Filter";
import {
  CustomSelect as Select,
  CustomPagination as Pagination,
} from "@/lib/AntDesignComponents";
import SortIcon from "@/assets/icons/SortIcon";
// import Nav from "@/assets/icons/Nav";
import SearchIcon from "@/assets/icons/SearchIcon";
import { FiFilter } from "react-icons/fi";
import useWidth from "../hooks/useWidth";

const FindProperty = () => {
  const width = useWidth();
  console.log(width);
  const [filter, setFilter] = useState(Number(width) > 700);
  const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 11, 1];
  const options = [
    {
      value: "Most Relevant",
      label: "Most Relevant",
    },
    {
      value: "2",
      label: "Closed",
    },
    {
      value: "3",
      label: "Communicated",
    },
    {
      value: "4",
      label: "Identified",
    },
    {
      value: "5",
      label: "Resolved",
    },
    {
      value: "6",
      label: "Cancelled",
    },
  ];
  return (
    <div className="grid grid-cols-[5%_95%] mini:grid-cols-[25%_75%] max-h-screen min-h-screen">
      <div>
        {/* {Number(width) < 700 &&
          (filter ? (
            <SearchIcon
              onClick={() => {
                setFilter((prev) => !prev);
              }}
              className="cursor-pointer stroke-colorPrimary"
            />
          ) : (
            <FiFilter
              className="cursor-pointer"
              onClick={() => {
                setFilter((prev) => !prev);
              }}
            />
          ))} */}
        <label htmlFor="my-drawer-3" className="flex text-blue-800 px-3">
          <FiFilter className="cursor-pointer" />
        </label>
        <Filter />
      </div>
      <div className="grid grid-cols-1 gap-[0.5rem] overflow-y-scroll">
        <div className="grid grid-cols-[40%_60%] md:grid-cols-[45%_50%_5%] items-center w-[98%] mx-auto">
          <div className="text-[#25324B] flex flex-col gap-[0.1rem]">
            <h4 className="lg:text-[24px] text-[12px] md:text-[18px] font-[700]">
              All Property
            </h4>
            <p className="text-[10px] md:text-[16px] font-[400]">
              Showing 73 results
            </p>
          </div>
          <div className="flex items-center gap-[0.1rem] w-full">
            <p className="text-[#7C8493] text-[10px] md:text-[16px] font-[400]">
              Sort by:
            </p>
            <Select
              // size="small"
              options={options}
              defaultValue={"Most Relevant"}
            />
          </div>
          <SortIcon className="hidden md:block" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[1rem] w-[98%] mx-auto">
          {arr.map((e, i) => (
            <HomeCard key={i} />
          ))}
        </div>
        <div className="w-full flex justify-center">
          <Pagination total={50} />
        </div>
      </div>
    </div>
  );
};

export default FindProperty;
