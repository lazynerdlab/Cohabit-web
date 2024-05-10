"use client";
import Property from "@/components/property/Property";
import HostHeader from "@/components/header/HostHeader";
import BackIcon from "@/assets/icons/BackIcon";
import { useRouter } from "next/navigation";

import { useEffect, } from "react";
import { useAppDispatch } from "@/redux/hook";
import {
  SET_PROPERTY,
  SET_PROPERTY_LOADING,
} from "@/redux/slice/propertySlice";
import { useGetHostListingDetailQuery } from "@/redux/api/hostApi";

interface IProps {
  params: {
    id: string | number;
  };
}
const Page = ({ params }: IProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { id } = params;
  const { data, isSuccess } = useGetHostListingDetailQuery(id);

  useEffect(() => {
    if (isSuccess) {
      sessionStorage.setItem("propertyId", String(id));
      dispatch(SET_PROPERTY_LOADING(true));
      dispatch(SET_PROPERTY(data?.data));
    }
  }, [data?.data, dispatch, id, isSuccess]);
  return (
    <div className="grid grid-cols-1 grid-rows-[12%_88%] max-h-screen overflow-y-scroll">
      <HostHeader>
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
      </HostHeader>
      <Property />
    </div>
  );
};

export default Page;
