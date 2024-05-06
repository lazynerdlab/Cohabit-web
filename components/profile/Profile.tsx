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
import { message, Upload, UploadProps } from "antd";
import { useUpdateSeekerBannerMutation } from "@/redux/api/seekerApi";


const MAX_FILE_SIZE_MB = 5;

const Profile = () => {
  const { push } = useRouter();
  const [profile, setProfile] = useState<Record<string, any>>();
  const [accessToken, setAccessToken] = useState<string>()
  const { data, isSuccess, isLoading, isError, error, refetch } = useGetHouseSeekerProfileQuery({});
  const [uploadBanner,{}] = useUpdateSeekerBannerMutation()

  

  useEffect(() => {
    if (isSuccess) {
      setProfile(data?.data);
    }
    if (isError) {
      console.log(error);
    }
  }, [data, isSuccess, isError, error]);
  useEffect(() => {
    const token = sessionStorage.getItem('authToken')
    if (token) {
      setAccessToken(token)
    }
    ;
  }, [])

  const props: UploadProps = {
    name: "file",
    multiple: true,
    action: `${process.env.NEXT_PUBLIC_BASE_URL}attachment`,
    headers: {
      Authorization: `Bearer ${accessToken}`
    },
    beforeUpload(file) {
      const fileSizeInMB = file.size / 1024 / 1024; // Convert file size to megabytes
      if (fileSizeInMB > MAX_FILE_SIZE_MB) {
        message.error(`File size must be less than ${MAX_FILE_SIZE_MB}MB.`);
        return false; // Prevent the upload
      }
      return true; // Allow the upload
    },
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {

      }
      if (status === "done") {
        handleBannerUpload(info?.file?.response?.data?.file)
        //message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  const handleBannerUpload = (image: string) =>{
    uploadBanner({
      image: image
    }).unwrap()
        .then(()=>{
          message.success("Banner updated")
          refetch()
        }).catch(()=>{
          message.error('banner update failed')
        })
  }

  return (
    <>
      {isLoading ? (
        "Loading..."
      )  :

        (

          <div className="w-[98%] mx-auto">
            <div className="w-full flex flex-col rounded-[10px] bg-[#FFF] shadow-sm shadow-[#B8C9C9]">
              <div className="w-full relative">
                <Image
                  alt="background"
                  className="w-full hidden md:block"
                  style={{width: "100%", height: "200px"}}
                  width={500}
                  height={300}
                  src={profile?.banner === "" 
                  ?  gradient
                  :
                  profile?.banner
                  }
                />
                <Upload {...props}>
                <EditIcon className="absolute right-[2%] top-[2%] fill-[#f8f2f2] cursor-pointer bg-[black] h-7 w-7 p-1" />
                </Upload>
                
              </div>
              <div className="p-[1rem] grid grid-cols-[20%_80%]">
                <Image
                  alt="avatar"
                  src={
                    profile?.image === ""
                      ? "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                      : profile?.image
                  }
                  width={90}
                  height={90}
                  className="h-[90px] rounded-md object-cover w-[90px] mr-1"
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
            <ProfileSection data={profile} />
          </div>
        )
      }
    </>
  );
};

export default Profile;
