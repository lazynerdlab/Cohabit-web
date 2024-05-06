import { CustomButton as Button } from "@/lib/AntDesignComponents";
import EditIcon from "@/assets/icons/EditIcon";
import EmailIcon from "@/assets/icons/EmailIcon";
import PhoneIcon from "@/assets/icons/PhoneIcon";
import LanguageIcon from "@/assets/icons/LanguageIcon";
import { useAppSelector } from "@/redux/hook";
import { useGetProfileQuery } from "@/redux/api/authApi";
import { useEffect, useState } from "react";

const ProfileSection2 = () => {
  const {data: addData, isLoading, isSuccess, isError, error} = useGetProfileQuery({})
  const [data, setData] =  useState<Record<string, any>>([])
  useEffect(() => {
    if (isSuccess) {
      setData(addData);
    }
    if (isError) {
      console.log(error);
    }
  }, [addData, isSuccess, isError, error]);
  //const user = useAppSelector((state) => state.userData?.user);

  return (
    <div className="flex flex-col gap-[0.5rem] w-full md:w-[95%] mx-auto">
      <div className="py-[1rem] border border-[#D6DDEB] px-[20px] flex flex-col gap-[0.3rem]">
        <span className="flex items-center gap-[0.5rem] justify-between">
          <h4 className="text-[#25324B] text-[16px] md:text-[20px] font-[700]">
            Additional Details
          </h4>
        </span>
        <div className="grid grid-cols-[15%_85%] gap-[0.2rem]">
          <EmailIcon className="self-start" />
          <span className="flex flex-col gap-[0.3rem] text-[12px] md:text-[16px] font-[400]">
            <h5 className="text-[#7C8493]">Email</h5>
            <p className="text-[#25324B]">{data?.email}</p>
          </span>
        </div>
        <div className="grid grid-cols-[15%_85%] gap-[0.2rem]">
          <PhoneIcon className="self-start" />
          <span className="flex flex-col gap-[0.3rem] text-[12px] md:text-[16px] font-[400]">
            <h5 className="text-[#7C8493]">Phone</h5>
            <p className="text-[#25324B]">{data?.phone}</p>
          </span>
        </div>
        <div className="grid grid-cols-[15%_85%] gap-[0.2rem]">
          <LanguageIcon className="self-start" />
          <span className="flex flex-col gap-[0.3rem] text-[12px] md:text-[16px] font-[400]">
            <h5 className="text-[#7C8493]">Languages</h5>
            <p className="text-[#25324B]">{data?.user_profile?.language}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection2;
