"use client";

import HomeCard from "../cards/HomeCard";
import MateCard from "../cards/MateCard";
import {
  CustomButton as Button,
  CustomSelect as Select,
  ThemeRadioButton as RadioButton,
  ThemeRadioGroup as RadioGroup,
} from "@/lib/AntDesignComponents";
import SearchIcon from "@/assets/icons/SearchIcon";
import LocationIcon from "@/assets/icons/LocationIcon";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useGetRecentlyUploadedQuery } from "@/redux/api/landingPageApi";
import { useGetFlatmatesQuery } from "@/redux/api/flatmateApi";
import { message } from "antd";
import { useGetHouseTypeQuery } from "@/redux/api/houseApi";

const DashBoard = () => {
  const [currentFilter, setCurrentFilter] = useState("All");
  const filter = [
    { label: "All", value: "All" },
    { label: "Popular", value: "Popular" },
    { label: "Recommended", value: "Recommended" },
    { label: "Nearest", value: "Nearest" },
  ];
  const { data: houseTypes } = useGetHouseTypeQuery({});
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
  const { push } = useRouter();
  const [listing, setListing] = useState<Record<string, any>[]>();
  const [homeMates, setHomeMates] = useState<Record<string, any>[]>();
  const count = 10;
  const { data, isLoading, isError, isSuccess } = useGetRecentlyUploadedQuery(
    {}
  );
  const {
    data: mateData,
    isLoading: mateIsLoading,
    isError: mateIsError,
    isSuccess: mateIsSuccess,
  } = useGetFlatmatesQuery({
    count,
  });

  useEffect(() => {
    if (isSuccess) {
      setListing(data?.data);
    }
    if (mateIsSuccess) {
      setHomeMates(mateData?.data);
    }
    if (isError || mateIsError) {
      message.error("Something went wrong");
    }
  }, [data, isError, isSuccess, mateData?.data, mateIsError, mateIsSuccess]);

  return (
    <div className="w-full mx-auto overflow-scroll p-3">
      {/* <div className=" mx-auto grid grid-cols-1 py-[0.5rem] gap-[0.5rem]">
        <div className="flex justify-between  items-center">
          <h5 className="text-[#25324B] mb-[0.5rem] text-[16px] md:text-[18px] font-bold leading-[28.80px]">
            Recently Uploaded
          </h5>
          <Button onClick={() => push("/dashboard/find-property")}>
            View All
          </Button>
        </div> */}
      <div className="w-[98%] mx-auto grid grid-cols-1 py-[0.5rem] gap-[0.5rem]">
        <h5 className="text-[#25324B] mb-[0.5rem] text-[16px] md:text-[18px] font-bold leading-[28.80px]">
          Find your apartment to stay
        </h5>
        <div className="w-[98%] py-[1rem] px-[2%] md:px-[2rem] border border-[#D6DDEB] gap-[0.5rem] grid md:grid-cols-[40%_5%_45%_10%] items-center justify-stretch">
          <div className="grid grid-cols-[10%_90%] items-center gap-[0.5rem] overflow-hidden">
            <SearchIcon className="cursor-pointer stroke-[#25324B]" />
            <Select
              bordered={false}
              style={{
                // width: "100%",
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
              options={
                houseTypes?.data?.map((e: Record<string, any>) => ({
                  value: e.id,
                  label: e.title,
                })) || []
              }
            />
          </div>
          <div className="md:block hidden self-stretch w-[1px] bg-[#202430]"></div>
          <div className="grid grid-cols-[5%_95%] items-center w-full justifystretch gap-[0.5rem] overflow-hidden">
            <LocationIcon className="cursor-pointer" />
            <Select
              bordered={false}
              style={{
                // width: "100%",
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
              options={[
                { value: "lagos", label: "lagos" },
                { value: "Abuja", label: "Abuja" },
              ]}
            />
          </div>
          <Button style={{ backgroundColor: "#010886" }} type="primary">
            Search
          </Button>
        </div>
        <div className="text-[16px] font-[400] text-[#515B6F] text-opacity-[0.7] border-b border-[#D6DDEB] p-[0.5rem] w-[98%] hidden md:block">
          Popular : Apartment, Flat, Workspace
        </div>
        <div className="md:w-[98%] overflow-x-scroll mxauto flex md:grid md:grid-cols-[60%_10%] items-center justify-between gap-[1rem] md:gap-0">
          <RadioGroup
            optionType="button"
            defaultValue={"All"}
            onChange={(e) => setCurrentFilter(e.target.value)}
          >
            <div className="flex md:grid grid-cols-4 justify-start items-center gap-[0.5rem]">
              {filter.map((e, i) => (
                <div key={i}>
                  <RadioButton
                    style={{
                      color: currentFilter === e.value ? "#FFF" : "#000",
                    }}
                    value={e.value}
                    key={i}
                  >
                    {e.label}
                  </RadioButton>
                </div>
              ))}
            </div>
          </RadioGroup>
          <Button onClick={() => push("/dashboard/find-property")}>
            View All
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[1rem] ">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <>
              {listing
                ?.slice(0, 3)
                ?.map((item: Record<string, any>, i: number) => (
                  <HomeCard key={i} data={item} />
                ))}
            </>
          )}
        </div>
        <div className="flex items-center justify-between ">
          <h5 className="text-[#25324B] mb-[0.5rem] text-[18px] font-bold leading-[28.80px]">
            Flatmate
          </h5>
          <Button onClick={() => push("/dashboard/view-mate")}>View All</Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[1rem] w-[98%]">
          {mateIsLoading ? (
            <div>Loading...</div>
          ) : (
            <>
              {homeMates
                ?.slice(0, 3)
                ?.map((item: Record<string, any>, i: number) => (
                  <MateCard key={i} data={item} />
                ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
