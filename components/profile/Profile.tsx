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
import { useRouter } from "next/navigation";
import SeekerEdit1 from "../editProfile/seekerEdit1";
import SeekerEdit2 from "../editProfile/seekerEdit2";

const Profile = () => {
  const { push } = useRouter();
  const [showEdit1, setShowEdit1] = useState(false);
  const [showEdit2, setShowEdit2] = useState(false);
  const [profile, setProfile] = useState<Record<string, any>>();
  const { data, isSuccess, isLoading, isError, error } =
    useGetHouseSeekerProfileQuery({});

  useEffect(() => {
    if (isSuccess) {
      setProfile(data?.data);
    }
    if (isError) {
      console.log(error);
    }
  }, [data, isSuccess, isError, error]);

  const handleShowEdit1Visiblity = () => {
    setShowEdit1(!showEdit1);
  };
  const handleShowEdit2Visiblity = () => {
    setShowEdit2(!showEdit2);
  };

  return (
    <>
      {isLoading ? (
        "Loading..."
      ) :  showEdit1 ? (
        <SeekerEdit1 handleClick={handleShowEdit1Visiblity}/>
       
      ) : (showEdit2 ?

      (
        <SeekerEdit2 handleClick={handleShowEdit2Visiblity} />
       
      ) :

      (
       
        <div className="w-[98%] mx-auto">
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
            <Image
              alt="avatar"
              src={
                profile?.image === ""
                  ? "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  : profile?.image
              }
              width={110}
              height={110}
              className="h-[130px] rounded-md object-cover w-[150px] mr-1"
            />
            <div className="flex flex-col items-start justify-between">
              <h4 className="text-[rgba(50, 71, 92, 0.87)] text-[15px] md:text-[24px] font-[500] p-0">
                {profile?.name}
              </h4>
              <span className="flex items-center gap-[0.5rem] bg-[#56CDAD]/[50%] px-[12px] py-[6px] md:px-[24px] md:py-[12px] rounded-[8px]">
                <FlagIcon className="fill-[#56CDAD]" />
                <p className="text-[#56CDAD] text-[10px] md:text-[16px] uppercase font-[500]">
                  {profile?.house_seeker_status === null
                    ? "NOT VERIFIED"
                    : profile?.house_seeker_status}
                </p>
              </span>
              <div className="flex justify-between items-center gap-[0.2rem] w-full">
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
                      {profile?.location === null
                        ? "No Location"
                        : profile?.location}
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
                  onClick={() => {
                    push("/dashboard/settings");
                  }}
                >
                  <div className="flex items-center justify-center gap-[0.2rem]">
                    <UserCheckIcon />
                    <p className="text-[14px] font-[600]">Edit Profile</p>
                  </div>
                </Button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[90%_10%] w-[98%] pb-[2%] mx-auto"></div>
        </div>
        <ProfileSection data={profile} handleClick1={handleShowEdit1Visiblity} handleClick2={handleShowEdit2Visiblity}  />
      </div>
      ))
    }
    </>
  );
};

export default Profile;
