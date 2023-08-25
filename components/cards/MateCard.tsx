"use client";
import Image from "next/image";
import {
  SecondaryButton,
  DangerButton,
  CustomButton as Button,
  CustomDivider as Divider,
} from "@/lib/AntDesignComponents";
import user from "@/assets/mate.svg";
import ShareIcon from "@/assets/icons/ShareIcon";
import HeartIcon from "@/assets/icons/HeartIcon";
import { useRouter } from "next/navigation";

const MateCard = () => {
  const { push } = useRouter();
  return (
    <div className="rounded-[8px] grid grid-cols-1 shadow shadow-[#CDCDCD] gap-[0.5rem] py-[0.5rem]">
      <div className="flex items-center justify-between w-[98%] mx-auto px-[2%]">
        <div className="flex flex-col items-start text-colorPrimary text-[16px] font-[500]">
          <p>One Bedroom wanted</p>
          <p>Male</p>
        </div>
        <h5 className="text-[#010886] text-[16px] font-[400]">Below 100k</h5>
      </div>
      <div className="flex items-center justify-between px-[2%] w-[98%] mx-auto">
        <p className="text-[16px] font-[500] text-[#616A6A]">Bungalow</p>
        <h5 className="text-[16px] font-[700] text-colorPrimary">NGN150,000</h5>
      </div>
      <Divider />
      <div className="grid grid-cols-2 items-center w-[98%] mx-auto">
        <Image alt="user" src={user} className="rounded-[8px]" />
        <div className="flex flex-col gap-[0.5rem]">
          <p className="text-[#32475C99]/[60%] text-[13px] flex items-center gap-[0.5rem]">
            Location: <p className="text-[11px]">Lagos, Nigeria</p>
          </p>
          <p className="text-[#32475C99]/[60%] text-[13px] flex items-center gap-[0.5rem]">
            Lifestyle: <p className="text-[11px]">Friendly, Indoor</p>
          </p>
          <p className="text-[#32475C99]/[60%] text-[13px] flex items-center justify-between gap-[0.1rem]">
            Language: <p className="text-[11px]">English, French</p>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between w-[98%] mx-auto p-[2%]">
        <SecondaryButton type="primary">
          <div className="flex items-center gap-[0.1rem]">
            <ShareIcon />
            <p className="text-[#50E5B4]">Share</p>
          </div>
        </SecondaryButton>
        <DangerButton type="primary">
          <div className="flex items-center gap-[0.1rem]">
            <HeartIcon />
            <p className="text-[#FF3D00]">Save</p>
          </div>
        </DangerButton>
        <Button
          style={{ backgroundColor: "#010886" }}
          onClick={() => push("/dashboard/view-mate/1")}
          type="primary"
        >
          View
        </Button>
      </div>
    </div>
  );
};

export default MateCard;
