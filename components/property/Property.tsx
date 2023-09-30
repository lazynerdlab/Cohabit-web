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
            className="mobile-hidden"
          >
            <Image alt="slide" src={slide} className="w[60vw] h-[200px]" />
            <Image alt="slide" src={slide2} className="w[60vw] h-[200px]" />
            <Image alt="slide" src={slide} className="w[60vw] h-[200px]" />
            <Image alt="slide" src={slide2} className="w[60vw] h-[200px]" />
            <Image alt="slide" src={slide} className="w[60vw] h-[200px]" />
            <Image alt="slide" src={slide2} className="w[60vw] h-[200px]" />
          </Carousel>
          <div className="grid grid-cols1 items-start grid-cols-[75%_25%] gap-[0.5rem] md:items-center shadow shadow-[#CDCDCD] px-[1rem] pt-[1rem] rounded-[8px] relative md:absolute md:top-[50%] md:left-[50%] md:translate-x-[-50%] md:w-[80%] w-full bg-[#FFF] pb-[10%] md:pb-[1rem]">
            <div className="grid grid-cols-[30%_70%] gap-[0.3rem]">
              <Image alt="thumbnail" src={thumbnail} />
              <div className="flex flex-col gap-[0.8rem]">
                <span className="text-[#F6513B] text-[10px] md:text-[12px] font-[400] bg-[#FEECE5] rounded-[10px] md:px-[10px] md:py-[5px] px-[5px] py-[2px] w-fit">
                  Avaliable for rent
                </span>
                <h4 className="text-[16px] font-[700] text-[#616A6A]">
                  Bungalow
                </h4>
                <div className="flex items-center gap-[0.8rem] w-full m-[1%] md:m-0 md:relative absolute bottom-[2%] left-[1%]">
                  <span className="flex items-center gap-[0.5rem]">
                    <PinLocation />
                    <p className="text-[12px] font-[400] text-[#515B6F]">
                      Lagos Mainland
                    </p>
                  </span>
                  <div className="flex items-center gap-[0.2rem]">
                    <RoomIcon />
                    <p className="text-[12px] text-[#515B6F] font-[400]">
                      2 Rooms
                    </p>
                  </div>
                  <div className="flex items-center gap-[0.2rem]">
                    <BathIcon />
                    <p className="text-[12px] text-[#515B6F] font-[400]">
                      2 Baths
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end gap-[0.8rem] pr-[1rem]">
              <h5 className="text-[10px] md:text-[16px] font-[700] text-colorPrimary">
                NGN150,000
              </h5>
              <Button
                className="!bg-[#010886]"
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
