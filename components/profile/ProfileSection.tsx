import Image from "next/image";
import room from "@/assets/room.jpg";
import {
  CustomButton as Button,
  CustomCarousel as Carousel,
} from "@/lib/AntDesignComponents";
import RateIcon from "@/assets/icons/RateIcon";
import Checkicon from "@/assets/icons/Checkicon";
import FlagIcon from "@/assets/icons/FlagIcon";
import PlusIcon from "@/assets/icons/PlusIcon";
import EditIcon from "@/assets/icons/EditIcon";
import ProfileSection2 from "./ProfileSection2";
import { useGetSavedApartmentsQuery } from "@/redux/api/houseApi";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Props {
  data?: Record<string, any>;
}
const ProfileSection = ({ data }: Props) => {
  const { push } = useRouter();
  const { data: savedData, isSuccess, isLoading } = useGetSavedApartmentsQuery({})
  const [saved, setSaved] = useState<Record<string, any>>([])
  useEffect(() => {
    if (isSuccess) {
      setSaved(savedData?.data.data)
    }
  }, [savedData, isSuccess])

  return (
    <div className="grid grid-cols-1 md:grid-cols-[70%_30%] w-full py-[1rem]">
      <div className="flex flex-col gap-[0.5rem]">
        <div className="p-[0.5rem] border border-[#D6DDEB] px-[20px] py-[13px] flex flex-col gap-[0.3rem]">
          <span className="flex items-center justify-between gap-[0.5rem]">
            <h4 className="text-[#25324B] text-[18px] md:text-[24px] font-[700]">
              About Me
            </h4>
            <Link href="profile/edit-me">
            <Button icon={<EditIcon className="fill-colorPrimary" />} />
            </Link>
          </span>
          <p className="text-[12px] md:text-[16px] font-[400] text-[#515B6F]">
            {data?.preference?.personal_introduction}
          </p>
        
        </div>
        <div className="p-[0.5rem] border border-[#D6DDEB] px-[20px] py-[13px] flex flex-col gap-[0.3rem]">
          <span className="flex items-center justify-between gap-[0.5rem]">
            <h4 className="text-[#25324B] text-[18px] md:text-[24px] font-[700]">
              Preferences
            </h4>
            <Link href="profile/edit-preference">
            <Button icon={<EditIcon className="fill-colorPrimary" />} />
            </Link>
          </span>
          <div className="grid grid-cols-1 gap-[0.3rem]">
            <span className="flex items-center gap-[0.5rem]">
              <Checkicon />
              <span className="flex gap-[0.2rem] text-[rgba(50, 71, 92, 0.60)]">
                <h5 className="text-[12px] md:text-[16px] font-[700]">
                  Categories:
                </h5>
                {
                  data?.house_type?.map((item: string, index: number) => (
                    <p className="text-[12px] md:text-[16px] font-[400]" key={index}>
                  {item}
                 
                </p>
                ))
                }
               
              </span>
            </span>
            <span className="flex items-center gap-[0.5rem]">
              <RateIcon />
              <span className="flex gap-[0.2rem] text-[rgba(50, 71, 92, 0.60)]">
                <h5 className="text-[12px] md:text-[16px] font-[700]">
                  Location:
                </h5>
                <p className="text-[12px] md:text-[16px] font-[400]">
                  {data?.location}
                </p>
              </span>
            </span>
            <span className="flex items-center gap-[0.5rem]">
              <FlagIcon className="fill-[#32475C99]/[60%]" />
              <span className="flex gap-[0.2rem] text-[rgba(50, 71, 92, 0.60)]">
                <h5 className="text-[12px] md:text-[16px] font-[700]">
                  Lifestyle:
                </h5>
                {
                  data?.lifestyle?.map((item: string, index: number) => (
                    <p className="text-[12px] md:text-[16px] font-[400]" key={index}>
                  {item}
                 
                </p>
                ))
                }
              </span>
            </span>
          </div>
        </div>
        <div className="p-[0.5rem] border border-[#D6DDEB] px[20px] py[13px] flex flex-col gap-[0.3rem]">
          <div className="flex items-center justify-between">
            <h4 className="text-[#25324B] text-[18px] md:text-[24px] font-[700]">
              Favorite and Saved Searches
            </h4>
            <Button icon={<PlusIcon className="fill-[#010886]" />} />
          </div>
          <div className="h-fit">
            <Carousel
              dots={{ className: "text-[#010886] carouselBtn" }}
              // dotPosition="top"
              variableWidth
             
              className="max-h-[250px] pb-5 max-w-fit"
             
            >
              {
                saved?.length === 0 ? <div className="w-full h-[250px] flex justify-center items-center text-[#25324B] text-[16px] font-[400]">You have no saved searches</div> : saved.map((item: Record<string, any>) => (
                  <div key={item?.id} className="w-fit hfit p-[1rem] flex flex-row gap-[0.2rem]">
                    <Image alt="apartment" src={item?.listing?.image} width={100} height={100} className="h-[100px] w-[100px] " />
                    <span className="text-[#25324B] text-[14px] font-[400]">
                      {item?.listing?.location}
                    </span>
                  </div>
                ))
              }

            </Carousel>
          </div>
        </div>
        <div className="p-[0.5rem] border border-[#D6DDEB] px[20px] py[13px] flex flex-col gap-[0.3rem]">
          <div className="flex items-center justify-between">
            <h4 className="text-[#25324B] text-[18px] md:text-[24px] font-[700]">
              Rented Apartment
            </h4>
            <Button icon={<PlusIcon className="fill-[#010886]" />} />
          </div>
          <div className="">
            <Carousel
              dots={{ className: "text-[#010886] carouselBtn" }}
              dotPosition="bottom"
              variableWidth
              className="max-h-[250px] pb-5"
            >
              <div className="w-fit p-[1rem] flex flex-row gap-[0.2rem]">
                <Image alt="apartment" src={room} width={100} height={100} />
                <span className="text-[#25324B] text-[16px] font-[400]">
                  A bungalow
                </span>
              </div>
              <div className="w-fit p-[1rem] flex flex-row gap-[0.2rem]">
                <Image alt="apartment" src={room} width={100} height={100} />
                <span className="text-[#25324B] text-[16px] font-[400]">
                  A bungalow
                </span>
              </div>
              <div className="w-fit p-[1rem] flex flex-row gap-[0.2rem]">
                <Image alt="apartment" src={room} width={100} height={100} />
                <span className="text-[#25324B] text-[16px] font-[400]">
                  A bungalow
                </span>
              </div>
              {/* <div className="w-fit p-[1rem] flex flex-row gap-[0.2rem]">
                <Image alt="apartment" src={room} />
                <span className="text-[#25324B] text-[16px] font-[400]">
                  A bungalow
                </span>
              </div>
              <div className="w-fit p-[1rem] flex flex-row gap-[0.2rem]">
                <Image alt="apartment" src={room} />
                <span className="text-[#25324B] text-[16px] font-[400]">
                  A bungalow
                </span>
              </div>
              <div className="w-fit p-[1rem] flex flex-row gap-[0.2rem]">
                <Image alt="apartment" src={room} />
                <span className="text-[#25324B] text-[16px] font-[400]">
                  A bungalow
                </span>
              </div>
              <div className="w-fit p-[1rem] flex flex-row gap-[0.2rem]">
                <Image alt="apartment" src={room} />
                <span className="text-[#25324B] text-[16px] font-[400]">
                  A bungalow
                </span>
              </div>
              <div className="w-fit p-[1rem] flex flex-row gap-[0.2rem]">
                <Image alt="apartment" src={room} />
                <span className="text-[#25324B] text-[16px] font-[400]">
                  A bungalow
                </span>
              </div> */}
            </Carousel>
          </div>
        </div>
      </div>
      <ProfileSection2 />
    </div>
  );
};

export default ProfileSection;
