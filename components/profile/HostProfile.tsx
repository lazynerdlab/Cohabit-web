import gradient from "@/assets/gradient.jpg";
import Avatar from "@/assets/Avatar.jpg";
import EditIcon from "@/assets/icons/EditIcon";
import FlagIcon from "@/assets/icons/FlagIcon";
import UserCheckIcon from "@/assets/icons/UserCheckIcon";
import VerifiedIcon from "@/assets/icons/VerifiedIcon";
import CalendarIcon from "@/assets/icons/CalendarIcon";
import LocationIcon from "@/assets/icons/LocationIcon";
import Image from "next/image";
import { CustomButton as Button } from "@/lib/AntDesignComponents";
import HostProfileSection from "./HostProfileSection";

const HostProfile = () => {
  return (
    <div className="w-[98%] mx-auto">
      <div className="w-full flex flex-col rounded-[10px] bg-[#FFF] shadow-sm shadow-[#B8C9C9]">
        <div className="w-full relative">
          <Image alt="background" className="w-full" src={gradient} />
          <EditIcon className="absolute right-[2%] top-[2%] fill-[#FFF] cursor-pointer" />
        </div>
        <div className="p-[1rem] grid grid-cols-[15%_70%_15%]">
          <Image alt="avatar" src={Avatar} />
          <div className="flex flex-col items-start justify-between">
            <h4 className="text-[rgba(50, 71, 92, 0.87)] text-[24px] font-[500] p-0">
              John Doe
            </h4>
            <span className="flex items-center gap-[0.5rem] bg-[#56CDAD]/[50%] px-[24px] py-[12px] rounded-[8px]">
              <FlagIcon className="fill-[#56CDAD]" />
              <p className="text-[#56CDAD] text-[16px] uppercase font-[500]">
                Verified Host
              </p>
            </span>
            <div className="flex items-start gap-[0.2rem]">
              <span className="flex gap-[0.2rem]">
                <VerifiedIcon />
                <p className="text-[rgba(50, 71, 92, 0.60)] text-[16px] font-[500]">
                  Verified
                </p>
              </span>
              <span className="flex gap-[0.2rem]">
                <LocationIcon />
                <p className="text-[rgba(50, 71, 92, 0.60)] text-[16px] font-[500]">
                  Lagos Nigeria
                </p>
              </span>
              <span className="flex gap-[0.2rem]">
                <CalendarIcon />
                <p className="text-[rgba(50, 71, 92, 0.60)] text-[16px] font-[500]">
                  Joined April 2021
                </p>
              </span>
            </div>
          </div>
          <Button
            style={{ backgroundColor: "#010886" }}
            className="flex items-center self-end"
            type="primary"
          >
            <div className="flex items-center justify-center gap-[0.2rem]">
              <UserCheckIcon />
              <p className="text-[14px] font-[600]">Edit Profile</p>
            </div>
          </Button>
        </div>
      </div>
      <HostProfileSection />
    </div>
  );
};

export default HostProfile;
