"use client";
import { useState } from "react";
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
import thumbnail from "@/assets/propertyThumbnail.jpg";
import PinLocation from "@/assets/icons/PinLocation";
import RoomIcon from "@/assets/icons/RoomIcon";
import BathIcon from "@/assets/icons/BathIcon";
const Property = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="w-[95%] mx-auto">
        <div className="relative">
          <Carousel
            arrows={true}
            nextArrow={<CarouselNextIcon />}
            prevArrow={<CarouselBackIcon />}
            dots={false}
            variableWidth
          >
            <Image alt="slide" src={slide} className="w[60vw] h-[200px]" />
            <Image alt="slide" src={slide2} className="w[60vw] h-[200px]" />
            <Image alt="slide" src={slide} className="w[60vw] h-[200px]" />
            <Image alt="slide" src={slide2} className="w[60vw] h-[200px]" />
            <Image alt="slide" src={slide} className="w[60vw] h-[200px]" />
            <Image alt="slide" src={slide2} className="w[60vw] h-[200px]" />
          </Carousel>
          <div className="grid grid-cols-[25%_50%_25%] gap-[0.5rem] items-center shadow shadow-[#CDCDCD] p-[1rem] rounded-[8px] absolute top-[50%] left-[50%] translate-x-[-50%] w-[80%] bg-[#FFF]">
            <Image alt="thumbnail" src={thumbnail} />
            <div className="flex flex-col gap-[0.8rem]">
              <span className="text-[#F6513B] text-[12px] font-[400] bg-[#FEECE5] rounded-[10px] px-[10px] py-[5px] w-fit">
                Avaliable for rent
              </span>
              <h4 className="text-[16px] font-[700] text-[#616A6A]">
                Bungalow
              </h4>
              <span className="flex items-center gap-[0.5rem]">
                <PinLocation />
                <p className="text-[12px] font-[400] text-[#515B6F]">
                  Lagos Mainland
                </p>
              </span>
              <div className="flex items-center gap-[0.8rem]">
                <div className="flex items-center gap-[0.2rem]">
                  <RoomIcon />
                  <p className="text-[14px] text-[#515B6F] font-[400]">
                    {" "}
                    2 Rooms
                  </p>
                </div>
                <div className="flex items-center gap-[0.2rem]">
                  <BathIcon />
                  <p className="text-[14px] text-[#515B6F] font-[400]">
                    {" "}
                    2 Rooms
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end gap-[0.8rem] pr-[1rem]">
              <h5 className="text-[16px] font-[700] text-colorPrimary">
                NGN150,000
              </h5>
              <Button
                style={{ backgroundColor: "#010886" }}
                onClick={() => setOpen(true)}
                type="primary"
              >
                Rent
              </Button>
            </div>
          </div>
        </div>
        <PropertySection />
      </div>
      <PropertyModal open={open} setOpen={setOpen} />
    </>
  );
};

export default Property;
