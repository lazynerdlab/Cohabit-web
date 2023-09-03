"use client";
import Pricing from "@/components/pricing/Pricing";
import HostHeader from "@/components/header/HostHeader";
import BackIcon from "@/assets/icons/BackIcon";
import { useRouter } from "next/navigation";

const Page = () => {
  const { push } = useRouter();
  return (
    <div className="grid grid-cols-1 grid-rows-[10%_90%] max-h-screen overflow-y-scroll">
      <HostHeader>
        <div className="flex items-center gap-[0.5rem]">
          <BackIcon
            onClick={() => {
              push("/dashboard/house-listing");
            }}
            className="cursor-pointer"
          />
          <h4 className="text-[#25324B] text-[12px] sm:text-[18px] md:text-[25px] font-[700]">
            House Listing
          </h4>
        </div>
      </HostHeader>
      <Pricing />
    </div>
  );
};

export default Page;
