"use client";
import gradient from "@/assets/gradient.jpg";

import EditIcon from "@/assets/icons/EditIcon";
import FlagIcon from "@/assets/icons/FlagIcon";
import UserCheckIcon from "@/assets/icons/UserCheckIcon";
import VerifiedIcon from "@/assets/icons/VerifiedIcon";
import CalendarIcon from "@/assets/icons/CalendarIcon";
import LocationIcon from "@/assets/icons/LocationIcon";
import Image from "next/image";
import { CustomButton as Button } from "@/lib/AntDesignComponents";
import ProfileSection from "./ProfileSection";
import { useEffect, useState } from "react";

import { useGetHouseSeekerProfileQuery } from "@/redux/api/houseApi";

const Profile = () => {
  const [profile, setProfile] = useState<Record<string, any>>();
  const { data, isSuccess, isLoading, isError, error } = useGetHouseSeekerProfileQuery({});

  useEffect(() => {
    if (isSuccess) {
      setProfile(data?.data);
    }
    if (isError) {
      console.log(error);
    }
  }, [data, isSuccess, isError, error]);

  return (
    <>
      {
        isLoading ? "Loading..." : <div className="w-[98%] mx-auto">
          <div className="w-full flex flex-col rounded-[10px] bg-[#FFF] shadow-sm shadow-[#B8C9C9]">
            <div className="w-full relative">
              <Image
                alt="background"
                className="w-full hidden md:block"
                src={gradient}
              />
              <EditIcon className="absolute right-[2%] top-[2%] fill-[#FFF] cursor-pointer" />
            </div>
            <div className="p-[1rem] grid grid-cols-[20%_80%]">
              <Image alt="avatar" src={profile?.image === "" ? "https://cdn-icons-png.flaticon.com/512/149/149071.png" : profile?.image} width={110} height={110} className="h-[130px] rounded-md object-cover w-[150px] mr-1" />
              <div className="flex flex-col items-start justify-between">
                <h4 className="text-[rgba(50, 71, 92, 0.87)] text-[15px] md:text-[24px] font-[500] p-0">
                  {profile?.name}
                </h4>
                <span className="flex items-center gap-[0.5rem] bg-[#56CDAD]/[50%] px-[12px] py-[6px] md:px-[24px] md:py-[12px] rounded-[8px]">
                  <FlagIcon className="fill-[#56CDAD]" />
                  <p className="text-[#56CDAD] text-[10px] md:text-[16px] uppercase font-[500]">
                    {profile?.house_seeker_status === null ? "NOT VERIFIED" : profile?.house_seeker_status}
                  </p>
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[90%_10%] w-[98%] pb-[2%] mx-auto">
              <div className="flex items-start gap-[0.2rem]">
                <span className="flex gap-[0.2rem]">
                  <VerifiedIcon />
                  <p className="text-[rgba(50, 71, 92, 0.60)] text-[10px] md:text-[16px] font-[500]">
                    {profile?.host_status}
                  </p>
                </span>
                <span className="flex gap-[0.2rem]">
                  <LocationIcon />
                  <p className="text-[rgba(50, 71, 92, 0.60)] text-[10px] md:text-[16px] font-[500]">
                    {profile?.location === null ? "No Location" : profile?.location}
                  </p>
                </span>
                <span className="flex gap-[0.2rem]">
                  <CalendarIcon />
                  <p className="text-[rgba(50, 71, 92, 0.60)] text-[10px] md:text-[16px] font-[500]">
                    Joined {profile?.date_joined}
                  </p>
                </span>
              </div>
              <Button
                className="flex items-center justify-self-end !bg-[#010886]"
                type="primary"
              >
                <div className="flex items-center justify-center gap-[0.2rem]">
                  <UserCheckIcon />
                  <p className="text-[14px] font-[600]">Edit Profile</p>
                </div>
              </Button>
            </div>
          </div>
          <ProfileSection data={profile} />
        </div>
      }
    </>
  );
};

export default Profile;
