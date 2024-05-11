import Image from "next/image";
import Avatar from "@/assets/Avatar.jpg";
import ViewHostSection from "./ViewHostSection";
import { CustomButton as Button } from "@/lib/AntDesignComponents";
import VerifiedIcon from "@/assets/icons/VerifiedIcon";
import CalendarIcon from "@/assets/icons/CalendarIcon";
import FlagIcon from "@/assets/icons/FlagIcon";
import LocationIcon from "@/assets/icons/LocationIcon";
import { useGetHostDetailsQuery } from "@/redux/api/houseApi";
import { useEffect, useState } from "react";
import moment from "moment";
import { useAppDispatch } from "@/redux/hook";
import { SET_HOST } from "@/redux/slice/propertySlice";
import { Spinner } from "@/components/spinner/Spinner";

const ViewHost = () => {
  const id = sessionStorage.getItem("propertyId");
  const dispatch = useAppDispatch();
  const { data, isLoading, isSuccess, refetch } = useGetHostDetailsQuery(id);
  const [profile, setProfile] = useState<Record<string, any>>();

  useEffect(() => {
    if (isSuccess) {
      setProfile(data?.data);
      dispatch(SET_HOST(data?.data));
    }
  }, [data, dispatch, isSuccess]);

  return (
    <div className="w-[98%] h-fit mx-auto flex flex-col gap-[0.5rem] border border-[#D6DDEB]">
      {
        isLoading ? <Spinner /> : <>
          <div className="w-full flex flex-col rounded-[10px] bg-[#FFF] shadow-sm shadow-[#B8C9C9] mt-5">
            <div className="p-[1rem] flex items-center gap-5">
              <Image alt="avatar" src={profile?.host_details?.image} width={80} height={80} className="rounded-[10%] w-[80px] h-[80px]" />
              <div className="flex flex-col items-start justify-between gap-3 w-full">
                <h4 className="text-[rgba(50, 71, 92, 0.87)] text-[15px] md:text-[24px] font-[500] p-0">
                  {profile?.host_details?.firstname + ' ' + profile?.host_details?.lastname}
                </h4>
                <span className="flex md:w-[300px] items-center gap-[0.5rem] bg-[#56CDAD]/[10%] px-[12px] py-[6px] md:px-[24px] md:py-[12px] rounded-[8px]">
                  <FlagIcon className="fill-[#56CDAD]" />
                  <p className="text-[#56CDAD] text-[10px] md:text-[16px] uppercase font-[500]">
                    {profile?.host_details?.host_status}
                  </p>
                </span>


                <div className="">
                  <div className="flex items-start gap-[1rem] text-[#32475C]/[50%]">
                    <span className="flex gap-[0.2rem]">
                      <VerifiedIcon />
                      <p className="text-[rgba(50, 71, 92, 0.60)] text-[10px] md:text-[16px] font-[500]">
                        {profile?.host_details?.host_status}
                      </p>
                    </span>
                    <span className="flex gap-[0.2rem]">
                      <LocationIcon />
                      <p className="text-[rgba(50, 71, 92, 0.60)] text-[10px] md:text-[16px] font-[500]">
                        {profile?.host_details?.location}
                      </p>
                    </span>
                    <span className="flex gap-[0.2rem]">
                      <CalendarIcon />
                      <p className="text-[rgba(50, 71, 92, 0.60)] text-[10px] md:text-[16px] font-[500]">
                        {moment(profile?.host_details?.created_at).format("MMM D, YYYY")}
                      </p>
                    </span>
                  </div>
                </div>
              </div>

            </div>

          </div>
          <ViewHostSection
            data={profile}
            ratingLoading={isLoading}
            ratingSuccess={isSuccess}
            hostId={profile?.host_details?.id}
            refetch={refetch}
          />
        </>
      }
    </div>
  );
};

export default ViewHost;
