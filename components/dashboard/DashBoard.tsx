"use client";

import HomeCard from "../cards/HomeCard";
import MateCard from "../cards/MateCard";
import {
  CustomButton as Button,
  CustomSelect as Select,
  ThemeRadioButton as RadioButton,
  ThemeRadioGroup as RadioGroup,
} from "@/lib/AntDesignComponents";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useGetRecentlyUploadedQuery } from "@/redux/api/landingPageApi";
import { useGetFlatmatesQuery } from "@/redux/api/flatmateApi";
import { message } from "antd";

const DashBoard = () => {
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
      <div className=" mx-auto grid grid-cols-1 py-[0.5rem] gap-[0.5rem]">
        <div className="flex justify-between  items-center">
          <h5 className="text-[#25324B] mb-[0.5rem] text-[16px] md:text-[18px] font-bold leading-[28.80px]">
            Recently Uploaded
          </h5>
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
