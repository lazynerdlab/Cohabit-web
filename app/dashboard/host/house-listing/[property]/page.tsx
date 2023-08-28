"use client";
import Property from "@/components/house-listings/property/Property";
import HostHeader from "@/components/header/HostHeader";
import BackIcon from "@/assets/icons/BackIcon";
import Registry from "../../../registry";
import { useRouter } from "next/navigation";

const Page = () => {
  const { push } = useRouter();
  return (
    <Registry>
      <div className="grid grid-cols-1 grid-rows-[10%_90%] max-h-screen overflow-y-scroll">
        <HostHeader>
          <div className="flex items-center gap-[0.5rem]">
            <BackIcon
              onClick={() => {
                push("/dashboard/house-listing");
              }}
              className="w-[40px] h-[40px] font-[400] text-[15px] cursor-pointer"
            />
            <h4 className="text-[#25324B] text-[25px] font-[700]">
              House Listing
            </h4>
          </div>
        </HostHeader>
        <Property />
      </div>
    </Registry>
  );
};

export default Page;
