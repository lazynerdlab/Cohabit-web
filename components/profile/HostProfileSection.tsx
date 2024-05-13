import Image from "next/image";
import room from "@/assets/room.jpg";
import {
  CustomButton as Button,
  CustomCarousel as Carousel,
  CustomRate as Rate,
} from "@/lib/AntDesignComponents";
import PlusIcon from "@/assets/icons/PlusIcon";
import ProfileSection2 from "./ProfileSection2";
import { useGetHostRecentlyUploadedQuery, useGetHostReviewsQuery } from "@/redux/api/hostApi";
import { useEffect, useState } from "react";

const HostProfileSection = () => {
  const { data, isLoading, isSuccess } = useGetHostRecentlyUploadedQuery({});
  const { data: review, isLoading: reviewLoading, isSuccess: reviewSucces } = useGetHostReviewsQuery({});
  const [listingData, setListingData] = useState<Record<string, any>[]>([])
  const [reviewData, setReviewData] = useState<Record<string, any>[]>([])
  useEffect(() => {
    if (isSuccess) {
      setListingData(data?.data);
    }
    if (reviewSucces) {
      setReviewData(review?.data?.reviews);
    }
  }, [data, isSuccess, reviewSucces, review])

  const removeHTMLTags = (str: string) => {
    if (typeof str === "string") {
      return str.replace(/<[^>]*>/g, "");
    }
    return "";
  };
  return (
    <div className="grid grid-cols-[70%_30%] w-full py-[1rem]">
      <div className="flex flex-col gap-[0.5rem]">
        <div className="p-[0.5rem] border border-[#D6DDEB] px-[20px] py-[13px] flex flex-col gap-[0.3rem]">
          <div className="flex items-center justify-between">
            <h4 className="text-[#25324B] text-[24px] font-[700]">
              Recently Uploaded
            </h4>
            <Button icon={<PlusIcon className="fill-[#010886]" />} />
          </div>
          <div >
            <Carousel
              dots={{ className: "text-[#010886] carouselBtn" }}
              dotPosition="bottom"
              variableWidth
            >
              {
                listingData?.length === 0 ? <p className="font-medium text-[18px]">No listings found</p> : listingData?.map((item: Record<string, any>) => (
                  <div className="w-fit p-[1rem] flex flex-row gap-[0.2rem]" key={item?.id}>
                    <Image alt="apartment" src={item?.image} width={180} height={180} />
                    <span className="text-[#25324B] text-[16px] mt-2 font-[400]">
                      {item?.location}
                    </span>
                  </div>
                ))
              }

            </Carousel>
          </div>
        </div>
        <div className="p-[0.5rem] border border-[#D6DDEB] px-[20px] py-[13px] flex flex-col gap-[0.3rem]">
          <div className="flex items-center justify-between">
            <h4 className="text-[#25324B] text-[24px] font-[700]">Reviews</h4>
          </div>
          {
            reviewData?.map((reviews, index) => (
              <div key={index} className=" mb-3">
                <h3 className=" font-semibold text-sm UserName">{reviews?.user?.firstname + ' ' + reviews?.user?.lastname}</h3>
                <div className=" flex gap-5">
                  <p className="text-[#515B6F] text-[16px] font-[400]">
                    {removeHTMLTags(reviews?.review)}
                  </p>
                  <Rate value={reviews?.rating} className=" text-[#1AD48E]" />
                </div>
              </div>
            ))
          }

        </div>
      </div>
      <ProfileSection2 />
    </div>
  );
};

export default HostProfileSection;
