import gradient from "@/assets/gradient.jpg";
import Avatar from "@/assets/Avatar.jpg";
import EditIcon from "@/assets/icons/EditIcon";
import FlagIcon from "@/assets/icons/FlagIcon";
import UserCheckIcon from "@/assets/icons/UserCheckIcon";
import Image from "next/image";
import { CustomButton as Button } from "@/lib/AntDesignComponents";
import ProfileSection from "./ProfileSection";

const Profile = () => {
  return (
    <div className="w-[98%] mx-auto">
      <div className="w-full flex flex-col rounded-[10px] bg-[#FFF] shadow-sm shadow-[#B8C9C9]">
        <div className="w-full relative">
          <Image alt="background" className="w-full" src={gradient} />
          <EditIcon className="absolute right-[2%] top-[2%] fill-[#FFF] cursor-pointer" />
        </div>
        <div className="p-[1rem] grid grid-cols-[15%_70%_15%]">
          <Image alt="avatar" src={Avatar} />
          <div className="flex flex-col items-start">
            <h4 className="text-[rgba(50, 71, 92, 0.87)] text-[24px] font-[500]">
              John Doe
            </h4>
            <span className="flex items-center gap-[0.5rem] bg-[#56CDAD]/[50%] px-[24px] py-[12px] rounded-[8px]">
              <FlagIcon className="fill-[#56CDAD]" />
              <p className="text-[#56CDAD] text-[16px] uppercase font-[500]">
                Looking for apartment
              </p>
            </span>
          </div>
          <Button className="flex items-center self-end" type="primary">
            <div className="flex items-center justify-center gap-[0.2rem]">
              <UserCheckIcon />
              <p className="text-[14px] font-[600]">Edit Profile</p>
            </div>
          </Button>
        </div>
      </div>
      <ProfileSection />
    </div>
  );
};

export default Profile;
