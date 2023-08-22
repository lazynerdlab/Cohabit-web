"use client";
import SearchIcon from "@/assets/icons/SearchIcon";
import LocationIcon from "@/assets/icons/LocationIcon";
import HomeCard from "../cards/HomeCard";
import MateCard from "../cards/MateCard";
import {
  CustomButton as Button,
  CustomSelect as Select,
  ThemeRadioButton as RadioButton,
  ThemeRadioGroup as RadioGroup,
} from "@/lib/AntDesignComponents";
import { useState } from "react";
import { useRouter } from "next/navigation";

const DashBoard = () => {
  const [property, setProperty] = useState();
  const { push } = useRouter();
  const arr = [1, 1, 1];
  const filter = [
    { label: "All", value: "All" },
    { label: "Popular", value: "Popular" },
    { label: "Recommended", value: "Recommended" },
    { label: "Nearest", value: "Nearest" },
  ];
  const options = [
    {
      value: "1",
      label: "Not Identified",
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
    <div className="w-full mx-auto">
      <div className="w-[98%] mx-auto grid grid-cols-1 py-[0.5rem] gap-[0.5rem]">
        <h5 className="text-[#25324B] mb-[0.5rem] text-[18px] font-bold leading-[28.80px]">
          Find your apartment to stay
        </h5>
        <div className="w-[98%] py-[1rem] px-[2rem] border border-[#D6DDEB] gap-[0.5rem] grid grid-cols-[40%_5%_45%_10%] items-center justify-center">
          <div className="flex items-center gap-[0.5rem]">
            <SearchIcon className="cursor-pointer stroke-[#25324B]" />
            <Select
              bordered={false}
              style={{
                width: 300,
                borderBottomWidth: 1,
                borderTopWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderColor: "#D6DDEB",
              }}
              onSelect={(e) => {
                console.log(e);
              }}
              placeholder="Property"
              options={options}
            />
          </div>
          <div className="self-stretch w-[1px] bg-[#202430]"></div>
          <div className="flex items-center gap-[0.5rem]">
            <LocationIcon className="cursor-pointer" />
            <Select
              bordered={false}
              style={{
                width: 300,
                borderBottomWidth: 1,
                borderTopWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderColor: "#D6DDEB",
              }}
              onSelect={(e) => {
                console.log(e);
              }}
              placeholder="Location"
              options={options}
            />
          </div>
          <Button type="primary">Search</Button>
        </div>
        <div className="text-[16px] font-[400] text-[#515B6F] text-opacity-[0.7] border-b border-[#D6DDEB] p-[0.5rem] w-[98%]">
          Popular : Apartment, Flat, Workspace
        </div>
        <div className="w-[98%] mxauto grid grid-cols-[60%_10%] items-center justify-between">
          <RadioGroup optionType="button" defaultValue={"All"}>
            <div className="grid grid-cols-4 justify-between items-center gap-[1rem]">
              {filter.map((e, i) => (
                <div key={i}>
                  <RadioButton value={e.value} key={i}>
                    {e.label}
                  </RadioButton>
                </div>
              ))}
            </div>
          </RadioGroup>
          <Button>View All</Button>
        </div>
        <div className="grid grid-cols-3 gap-[1rem] w-[98%]">
          {arr.map((e, i) => (
            <HomeCard key={i} />
          ))}
        </div>
        <div className="flex items-center justify-between w-[98%]">
          <h5 className="text-[#25324B] mb-[0.5rem] text-[18px] font-bold leading-[28.80px]">
            Flatmate
          </h5>
          <Button onClick={() => push("/dashboard/view-all")}>View All</Button>
        </div>
        <div className="grid grid-cols-3 gap-[1rem] w-[98%]">
          {arr.map((e, i) => (
            <MateCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
