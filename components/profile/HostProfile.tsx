"use client";
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
import { useAppSelector } from "@/redux/hook";
import moment from "moment";
import VerifiedIconNew from "@/assets/icons/verified";
import { message, Upload, UploadProps } from "antd";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUpdateSeekerBannerMutation } from "@/redux/api/seekerApi";
import { useGetHostProfileQuery, useUpdateHostBannerMutation } from "@/redux/api/hostApi";


const MAX_FILE_SIZE_MB = 5;
const HostProfile = () => {
  const { push } = useRouter();
  const [profile, setProfile] = useState<Record<string, any>>();
  const [accessToken, setAccessToken] = useState<string>()
  const user = useAppSelector((state) => state.userData?.user);
  const { data, isSuccess, isLoading, isError, error, refetch } = useGetHostProfileQuery({})
  const [uploadBanner, { }] = useUpdateHostBannerMutation()

  useEffect(() => {
    if (isSuccess) {
      setProfile(data);
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

  const handleBannerUpload = (image: string) => {
    uploadBanner({
      image: image
    }).unwrap()
      .then(() => {
        message.success("Banner updated")
        refetch()
      }).catch(() => {
        message.error('banner update failed')
      })
  }

  return (
    <div className="w-[98%] mx-auto">
      <div className="w-full flex flex-col rounded-[10px] bg-[#FFF] shadow-sm shadow-[#B8C9C9]">
        <div className="w-full relative mt-3">
          <Image
            alt="background"
            className="w-full hidden md:block"
            style={{ width: "100%", height: "200px" }}
            width={500}
            height={300}
            src={profile?.add_banner === null
              ? gradient
              :
              profile?.add_banner
            }
          />

          <Upload {...props}>
            <EditIcon className="absolute right-[2%] top-[2%] fill-[#f8f2f2] cursor-pointer bg-[black] h-7 w-7 p-1" />
          </Upload>
        </div>
        <div className="p-[1rem] flex gap-5 items-center">
          <Image alt="avatar"
            src={profile?.image === null ?
              "https://cdn-icons-png.flaticon.com/512/149/149071.png"
              : profile?.image} width={80} height={80} className="rounded-[10%] w-[80px] h-[80px]"
          />
          <div className="flex flex-col items-start justify-between gap-3 w-[80%]">
            <h4 className="text-[rgba(50, 71, 92, 0.87)] text-[24px] font-[500] p-0">
              {profile?.name}
            </h4>
            <span className="flex items-center gap-[0.5rem] bg-[#56CDAD]/[10%] px-[24px] py-[12px] rounded-[8px]">
              <FlagIcon className="fill-[#56CDAD]" />
              <p className="text-[#56CDAD] text-[16px] uppercase font-[500]">
                {
                  profile?.host_status === "NOT VERIFIED" ? "Not Verified Host" : "Verified Host"
                }
              </p>
            </span>

            <div className="flex items-start gap-[1rem]">
              <span className="flex gap-[0.4rem] items-center">
                <VerifiedIconNew />
                <p className="text-[rgba(50,71,92,0.60)] text-[14px] font-[500]">
                  {
                    profile?.status === "NOT VERIFIED" ? "NOT VERIFIED" : "VERIFIED"
                  }
                </p>
              </span>
              <span className="flex gap-[0.4rem] items-center">
                <LocationIcon />
                <p className="text-[rgba(50,71,92,0.60)] text-[14px] font-[500]">
                  {profile?.location}
                </p>
              </span>
              <span className="flex gap-[0.4rem] items-center">
                <CalendarIcon />
                <p className="text-[rgba(50,71,92,0.60)] text-[14px] font-[500]">
                  {moment(profile?.created_at).format("MMM D, YYYY")}

                </p>
              </span>
            </div>
          </div>
          <Button
            className="flex items-center self-end !bg-[#010886]"
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
