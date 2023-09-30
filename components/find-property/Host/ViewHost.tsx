import Image from "next/image";
import Avatar from "@/assets/Avatar.jpg";
import ViewHostSection from "./ViewHostSection";
import { CustomButton as Button } from "@/lib/AntDesignComponents";
import VerifiedIcon from "@/assets/icons/VerifiedIcon";
import CalendarIcon from "@/assets/icons/CalendarIcon";
import FlagIcon from "@/assets/icons/FlagIcon";
import LocationIcon from "@/assets/icons/LocationIcon";

const ViewHost = () => {
  return (
    <div className="w-[98%] mx-auto flex flex-col gap-[0.5rem]">
      <div className="w-full flex flex-col rounded-[10px] bg-[#FFF] shadow-sm shadow-[#B8C9C9]">
        <div className="p-[1rem] grid grid-cols-[20%_80%]">
          <Image alt="avatar" src={Avatar} />
          <div className="flex flex-col items-start justify-between">
            <h4 className="text-[rgba(50, 71, 92, 0.87)] text-[15px] md:text-[24px] font-[500] p-0">
              John Doe
            </h4>
            <span className="flex items-center gap-[0.5rem] bg-[#56CDAD]/[50%] px-[12px] py-[6px] md:px-[24px] md:py-[12px] rounded-[8px]">
              <FlagIcon className="fill-[#56CDAD]" />
              <p className="text-[#56CDAD] text-[10px] md:text-[16px] uppercase font-[500]">
                Verified host
              </p>
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[90%_10%] w-[98%] pb-[2%] mx-auto">
          <div className="flex items-start gap-[0.2rem]">
            <span className="flex gap-[0.2rem]">
              <VerifiedIcon />
              <p className="text-[rgba(50, 71, 92, 0.60)] text-[10px] md:text-[16px] font-[500]">
                Verified
              </p>
            </span>
            <span className="flex gap-[0.2rem]">
              <LocationIcon />
              <p className="text-[rgba(50, 71, 92, 0.60)] text-[10px] md:text-[16px] font-[500]">
                Lagos Nigeria
              </p>
            </span>
            <span className="flex gap-[0.2rem]">
              <CalendarIcon />
              <p className="text-[rgba(50, 71, 92, 0.60)] text-[10px] md:text-[16px] font-[500]">
                Joined April 2021
              </p>
            </span>
          </div>
          <Button
            className="self-end justify-self-end text-[14px] font-[600] w-fit !bg-[#010886]"
            type="primary"
          >
            Message
          </Button>
        </div>
      </div>
      <ViewHostSection />
    </div>
  );
};

export default ViewHost;
