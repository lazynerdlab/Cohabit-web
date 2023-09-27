"use client";
import Payment from "@/components/payment/Payment";
import Header from "@/components/header/Header";
import BackIcon from "@/assets/icons/BackIcon";
import { useRouter } from "next/navigation";

const Page = () => {
  const { back } = useRouter();
  return (
    <div className="grid grid-cols-1 grid-rows-[10%_90%] max-h-screen overflow-y-scroll">
      <Header>
        <div className="flex items-center gap-[0.5rem]">
          <BackIcon
            onClick={() => {
              back();
            }}
            className="w-[40px] h-[40px] font-[400] text-[15px] cursor-pointer"
          />
          <h4 className="text-[#25324B] text-[25px] font-[700]">
            Payment Method
          </h4>
        </div>
      </Header>
      <Payment />
    </div>
  );
};

export default Page;
