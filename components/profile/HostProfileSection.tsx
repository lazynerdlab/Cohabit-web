import Image from "next/image";
import room from "@/assets/room.jpg";
import {
  CustomButton as Button,
  CustomCarousel as Carousel,
  CustomRate as Rate,
} from "@/lib/AntDesignComponents";
import PlusIcon from "@/assets/icons/PlusIcon";
import ProfileSection2 from "./ProfileSection2";

const HostProfileSection = () => {
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
          <div className="">
            <Carousel
              dots={{ className: "text-[#010886] carouselBtn" }}
              dotPosition="bottom"
              variableWidth
              className=""
            >
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
              </div>
            </Carousel>
          </div>
        </div>
        <div className="p-[0.5rem] border border-[#D6DDEB] px-[20px] py-[13px] flex flex-col gap-[0.3rem]">
          <div className="flex items-center justify-between">
            <h4 className="text-[#25324B] text-[24px] font-[700]">Reviews</h4>
          </div>
          <Rate value={4} />
          <p className="text-[#515B6F] text-[16px] font-[400]">
            He is so polite and respectful, he gave me so much atentions.
          </p>
        </div>
      </div>
      <ProfileSection2 />
    </div>
  );
};

export default HostProfileSection;
