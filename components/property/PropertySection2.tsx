"use client";
import Image from "next/image";
import {
  SecondaryButton,
  DangerButton,
  CustomInput as Input,
  CustomTextArea as TextArea,
  CustomButton as Button,
} from "@/lib/AntDesignComponents";
import HomeCard from "../cards/HomeCard";
import ShareIcon from "@/assets/icons/ShareIcon";
import HeartIcon from "@/assets/icons/HeartIcon";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hook";
import { useEffect, useState } from "react";
import { useGetListingsQuery } from "@/redux/api/landingPageApi";
import { Spinner } from "../spinner/Spinner";

const PropertySection2 = () => {
  const { push } = useRouter();
  const data = useAppSelector((state) => state.propertyData?.property);
  const [property, setProperty] = useState([]);
  const path = `listings?count=3&random=1`;
  const { data: propertyData, isSuccess, isLoading } = useGetListingsQuery({
    path,
  });

  useEffect(() => {
    if (isSuccess) {
      setProperty(propertyData?.data);
    }
  }, [isSuccess, propertyData?.data]);

  return (
    <div className="flex flex-col gap-[0.5rem] w-full md:w-[95%] mx-auto">
      <div className="flex flex-col items-center justify-center gap-[1rem] border border-[#D6DDEB] p-[0.5rem]">
        <div className="flex items-center justify-center gap-[0.5rem]">
          <SecondaryButton type="primary">
            <div className="flex items-center gap-[0.1rem]">
              <ShareIcon />
              <p className="text-[#50E5B4]">Share</p>
            </div>
          </SecondaryButton>
          <DangerButton type="primary">
            <div className="flex items-center gap-[0.1rem]">
              <HeartIcon />
              <p className="text-[#FF3D00]">Save</p>
            </div>
          </DangerButton>
        </div>
        <div className="flex items-center justify-center">
          <SecondaryButton type="primary">
            <div className="flex items-center gap-[0.1rem]">
              <ShareIcon />
              <p className="text-[#50E5B4]">Add to favourites</p>
            </div>
          </SecondaryButton>
        </div>
      </div>
      <div className="border border-[#D6DDEB] p-[0.5rem]">
        <div
          onClick={() => push(`/dashboard/find-property/host/${data?.host?.id}`)}
          className="bg-[#1B17E7] px-[1rem] py-[0.5rem] flex items-center gap-[1rem] cursor-pointer"
        >
          <Image alt="host" src={data?.host?.image} width={80} height={80} className="rounded-[100%] w-[80px] h-[80px]" />
          <div className="flex flex-col gap-[0.5rem] text-[#FFF]">
            <span>{data?.host?.name}</span>
            <span>Host</span>
          </div>
        </div>
        <form className="grid grid-cols-1 gap-[0.5rem] text-[#0C1938]">
          <div className="flex flex-col items-start gap-[0.5rem]">
            <label htmlFor="name">Full Name</label>
            <Input id="name" placeholder="This is a Placeholder" />
          </div>
          <div className="flex flex-col items-start gap-[0.5rem]">
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              type="email"
              placeholder="This is a Placeholder"
            />
          </div>
          <div className="flex flex-col items-start gap-[0.5rem]">
            <label htmlFor="description">Description</label>
            <TextArea id="description" placeholder="Description" />
          </div>
          <div className="flex items-center justify-center w-full">
            <Button type="primary" className="!bg-[#515B6F]">
              Submit
            </Button>
          </div>
        </form>
      </div>
      <div className="hidden md:flex flex-col gap-[0.5rem]">
        <h6 className="text-[18px] font-[400] text-[#000] text-center">
          Featured Property
        </h6>
        <div className="grid grid-cols-1 gap-[0.5rem] w-[98%] mx-auto">
          {isLoading ? <Spinner /> : property?.map((item: Record<string, any>, i) => (
            <div className="" key={i}>
              <HomeCard key={i} data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertySection2;
