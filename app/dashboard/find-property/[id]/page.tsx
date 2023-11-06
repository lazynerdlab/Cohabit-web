"use client";
import Property from "@/components/property/Property";
import Header from "@/components/header/Header";
import BackIcon from "@/assets/icons/BackIcon";
import { useRouter } from "next/navigation";
import { useGetHouseSeekerListingDetailQuery } from "@/redux/api/houseApi";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/redux/hook";
import { SET_PROPERTY, SET_PROPERTY_LOADING } from "@/redux/slice/propertySlice";

interface IProps {
  params: {
    id: string | number
  }
}
const Page = ({ params }: IProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch()
  const { id } = params;
  const { data, isSuccess } = useGetHouseSeekerListingDetailQuery(id)

  useEffect(() => {
    if (isSuccess) {
      sessionStorage.setItem("propertyId", String(id))
      dispatch(SET_PROPERTY_LOADING(true))
      dispatch(SET_PROPERTY(data?.data))
    }
  }, [data?.data, dispatch, id, isSuccess])
  return (
    <div className="grid grid-cols-1 grid-rows-[10%_90%] max-h-screen overflow-y-scroll">
      <Header>
        <div className="flex items-center gap-[0.5rem]">
          <BackIcon
            onClick={() => {
              router.back();
            }}
            className="w-[40px] h-[40px] font-[400] text-[15px] cursor-pointer"
          />
          <h4 className="text-[#25324B] text-[18px] md:text-[25px] font-[700]">
            Property Detail
          </h4>
        </div>
      </Header>
      <Property />
    </div>
  );
};

export default Page;
