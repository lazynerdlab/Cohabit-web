"use client";
import Image from "next/image";
import Home from "@/assets/property.svg";
import RoomIcon from "@/assets/icons/RoomIcon";
import BathIcon from "@/assets/icons/BathIcon";
import PinLocation from "@/assets/icons/PinLocation";
import { CustomDivider as Divider } from "@/lib/AntDesignComponents";
import { CustomButton as Button } from "@/lib/AntDesignComponents";
import { useRouter } from "next/navigation";

const HomeCard = () => {
  const { push } = useRouter();
  return (
    <div className="rounded-[8px] grid grid-cols-1 shadow shadow-[#CDCDCD] gap-[0.5rem]">
      <Image alt="property" className="w-full" src={Home} />
      <div className="flex items-center justify-between px-[2%] mx-auto w-full">
        <p className="text-[16px] font-[500] text-[#616A6A]">Bungalow</p>
        <h5 className="text-[16px] font-[700] text-colorPrimary">NGN150,000</h5>
      </div>
      <div className="flex items-center w-full mx-auto justify-between px-[2%]">
        <div className="flex items-center gap-[0.2rem]">
          <RoomIcon />
          <p className="text-[14px] text-[#515B6F] font-[400]"> 2 Rooms</p>
        </div>
        <div className="flex items-center gap-[0.2rem]">
          <BathIcon />
          <p className="text-[14px] text-[#515B6F] font-[400]"> 2 Rooms</p>
        </div>
      </div>
      <Divider />
      <div className="flex items-center justify-between p-[0.5rem] py[1rem]">
        <div className="flex items-center gap-[0.3rem]">
          <PinLocation />
          <p className="text-[14px] text-[#515B6F] font-[400]">
            Surulere, Lagos
          </p>
        </div>
        <Button
          style={{ backgroundColor: "#010886" }}
          onClick={() => push("dashboard/find-property/1")}
          type="primary"
        >
          View
        </Button>
      </div>
    </div>
  );
};

export default HomeCard;
