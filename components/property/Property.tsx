"use client";
import { useEffect, useState } from "react";
import PropertyModal from "./PropertyModal";
import {
  CustomCarousel as Carousel,
  CustomButton as Button,
} from "@/lib/AntDesignComponents";

import CarouselBackIcon from "@/assets/icons/CarouselBackIcon";
import CarouselNextIcon from "@/assets/icons/CarouselNextIcon";
import PropertySection from "./PropertySection";
import Image from "next/image";
import slide from "@/assets/slide.jpg";
import slide2 from "@/assets/slide2.jpg";

import PinLocation from "@/assets/icons/PinLocation";
import RoomIcon from "@/assets/icons/RoomIcon";
import BathIcon from "@/assets/icons/BathIcon";

import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Spinner } from "../spinner/Spinner";
import { SET_PROPERTY_LOADING } from "@/redux/slice/propertySlice";
import { useInitializePaymentMutation } from "@/redux/api/paymentApi";
import { usePaystackPayment } from "react-paystack";
import { message } from "antd";

const Property = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userData?.user);
  const { property, loading } = useAppSelector((state) => state.propertyData);
  const [propertyData, setPropertyData] = useState<Record<string, any>>({});
  const [initializePayment, { data, isSuccess, isError, error, isLoading }] =
    useInitializePaymentMutation();

  const config = {
    reference: new Date().getTime().toString(),
    email: data?.data?.email,
    amount: data?.data?.amount * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: data?.data?.key,
  };

  const initializePaystackPayment = usePaystackPayment(config);

  useEffect(() => {
    if (isSuccess) {
      initializePaystackPayment();
    }

    if (isError) {
      const errMesg = error as any;
      message.error(errMesg?.data?.message);
    }
  }, [data, error, initializePaystackPayment, isError, isSuccess]);
  const onHandleBoost = async () => {
    if (property) {
      const data = {
        type: "boost",
        listing_id: property?.id,
        amount: 100,
        boost_level: "0",
        duration: "1",
      };
      await initializePayment(data);
    }
  };
  useEffect(() => {
    if (property) {
      setPropertyData(property);
      dispatch(SET_PROPERTY_LOADING(false));
    }
  }, [dispatch, property]);

  const renderExtras = () => {
    if (propertyData.extras && propertyData.extras.length >= 2) {
      const rooms = propertyData.extras[0].value || 0;
      const baths = propertyData.extras[1].value || 0;
      return (
        <div className="flex items-center gap-[0.2rem]">
          <RoomIcon />
          <p className="text-[12px] text-[#515B6F] font-[400]">{rooms} Rooms</p>
          <div className="flex items-center gap-[0.2rem]">
            <BathIcon />
            <p className="text-[12px] text-[#515B6F] font-[400]">
              {baths} Baths
            </p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="w-[95%] mx-auto">
          <div className="relative mt-[1.5rem] mb-[10%]">
            {propertyData?.images?.length > 2 ? (
              <Carousel
                arrows={true}
                nextArrow={<CarouselNextIcon />}
                prevArrow={<CarouselBackIcon />}
                dots={false}
                variableWidth
                className="mobile-hidden !flex"
              >
                {propertyData?.images?.map((image: string, index: number) => (
                  <div key={index} className="w-full h-full relative">
                    <Image
                      alt="thumbnail"
                      src={image}
                      width={500}
                      height={500}
                    />
                  </div>
                ))}
              </Carousel>
            ) : (
              <Carousel
                arrows={true}
                nextArrow={<CarouselNextIcon />}
                prevArrow={<CarouselBackIcon />}
                dots={false}
                variableWidth
                className="mobile-hidden !flex"
              >
                <Image alt="slide" src={slide} className="w[60vw] h-[200px]" />
                <Image alt="slide" src={slide2} className="w[60vw] h-[200px]" />
                <Image alt="slide" src={slide} className="w[60vw] h-[200px]" />
                <Image alt="slide" src={slide2} className="w[60vw] h-[200px]" />
                <Image alt="slide" src={slide} className="w[60vw] h-[200px]" />
                <Image alt="slide" src={slide2} className="w[60vw] h-[200px]" />
              </Carousel>
            )}
            <div className="grid grid-cols1 items-start grid-cols-[75%_25%] gap-[0.5rem] md:items-center shadow shadow-[#CDCDCD] px-[1rem] pt-[1rem] rounded-[8px] relative md:absolute md:top-[50%] md:left-[50%] md:translate-x-[-50%] md:w-[80%] w-full bg-[#FFF] pb-[10%] md:pb-[1rem]">
              <div className="grid grid-cols-[30%_70%] gap-[0.3rem]">
                <Image
                  alt="thumbnail"
                  src={propertyData?.image}
                  width={200}
                  height={200}
                />
                <div className="flex flex-col gap-[0.8rem]">
                  <span className="text-[#F6513B] text-[10px] md:text-[12px] font-[400] bg-[#FEECE5] rounded-[10px] md:px-[10px] md:py-[5px] px-[5px] py-[2px] w-fit">
                    {propertyData?.status}
                  </span>
                  <h4 className="text-[16px] font-[700] text-[#616A6A]">
                    {propertyData?.house_type}
                  </h4>
                  <div className="flex items-center gap-[0.8rem] w-full m-[1%] md:m-0 md:relative absolute bottom-[2%] left-[1%]">
                    <span className="flex items-center gap-[0.5rem]">
                      <PinLocation />
                      <p className="text-[12px] font-[400] text-[#515B6F]">
                        {propertyData?.location}
                      </p>
                    </span>
                    {renderExtras()}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-[0.8rem] pr-[1rem]">
                <h5 className="text-[10px] md:text-[16px] font-[700] text-colorPrimary">
                  NGN {propertyData?.amount}
                </h5>
                {user?.data?.user?.user_type === "host" ? (
                  <Button
                    className="!bg-[#010886] text-[#FFF]"
                    onClick={() => onHandleBoost()}
                    loading={isLoading}
                    disabled={isLoading}
                  >
                    Boost ads
                  </Button>
                ) : (
                  <Button
                    className="!bg-[#010886] text-[#FFF]"
                    onClick={() => setOpen(true)}
                    disabled={
                      propertyData?.status === "Rented" ||
                      propertyData?.status === "Sold"
                    }
                  >
                    Rent
                  </Button>
                )}
              </div>
            </div>
          </div>
          <div className="mt-[0.5rem]">
            <PropertySection />
          </div>
        </div>
      )}
      <PropertyModal open={open} setOpen={setOpen} />
    </>
  );
};

export default Property;
