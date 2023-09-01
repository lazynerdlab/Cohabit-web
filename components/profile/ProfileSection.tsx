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

const ProfileSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[70%_30%] w-full py-[1rem]">
      <div className="flex flex-col gap-[0.5rem]">
        <div className="p-[0.5rem] border border-[#D6DDEB] px-[20px] py-[13px] flex flex-col gap-[0.3rem]">
          <span className="flex items-center justify-between gap-[0.5rem]">
            <h4 className="text-[#25324B] text-[24px] font-[700]">About Me</h4>
            <Button icon={<EditIcon className="fill-colorPrimary" />} />
          </span>
          <p className="text-[16px] font-[400] text-[#515B6F]">
            I’m a product designer + filmmaker currently working remotely at
            Twitter from beautiful Manchester, United Kingdom. I’m passionate
            about designing digital products that have a positive impact on the
            world..
          </p>
          <p className="text-[16px] font-[400] text-[#515B6F]">
            I am playful person, lover of cat and i don’t like to smoke
          </p>
        </div>
        <div className="p-[0.5rem] border border-[#D6DDEB] px-[20px] py-[13px] flex flex-col gap-[0.3rem]">
          <span className="flex items-center justify-between gap-[0.5rem]">
            <h4 className="text-[#25324B] text-[24px] font-[700]">
              Preferences
            </h4>
            <Button icon={<EditIcon className="fill-colorPrimary" />} />
          </span>
          <div className="grid grid-cols-1 gap-[0.3rem]">
            <span className="flex items-center gap-[0.5rem]">
              <Checkicon />
              <span className="flex gap-[0.2rem] text-[rgba(50, 71, 92, 0.60)]">
                <h5 className="text-[16px] font-[700]">Categories:</h5>
                <p className="text-[16px] font-[400]">One Bedroom, Bungalow</p>
              </span>
            </span>
            <span className="flex items-center gap-[0.5rem]">
              <RateIcon />
              <span className="flex gap-[0.2rem] text-[rgba(50, 71, 92, 0.60)]">
                <h5 className="text-[16px] font-[700]">Location:</h5>
                <p className="text-[16px] font-[400]">Lagos, Nigeria</p>
              </span>
            </span>
            <span className="flex items-center gap-[0.5rem]">
              <FlagIcon className="fill-[#32475C99]/[60%]" />
              <span className="flex gap-[0.2rem] text-[rgba(50, 71, 92, 0.60)]">
                <h5 className="text-[16px] font-[700]">Lifestyle:</h5>
                <p className="text-[16px] font-[400]">Friendly, Indoor</p>
              </span>
            </span>
            <span className="flex items-center gap-[0.5rem]">
              <FlagIcon className="fill-[#32475C99]/[60%]" />
              <span className="flex gap-[0.2rem] text-[rgba(50, 71, 92, 0.60)]">
                <h5 className="text-[16px] font-[700]">Lifestyle:</h5>
                <p className="text-[16px] font-[400]">Friendly, Indoor</p>
              </span>
            </span>
            <span className="flex items-center gap-[0.5rem]">
              <FlagIcon className="fill-[#32475C99]/[60%]" />
              <span className="flex gap-[0.2rem] text-[rgba(50, 71, 92, 0.60)]">
                <h5 className="text-[16px] font-[700]">Lifestyle:</h5>
                <p className="text-[16px] font-[400]">Friendly, Indoor</p>
              </span>
            </span>
            <span className="flex items-center gap-[0.5rem]">
              <FlagIcon className="fill-[#32475C99]/[60%]" />
              <span className="flex gap-[0.2rem] text-[rgba(50, 71, 92, 0.60)]">
                <h5 className="text-[16px] font-[700]">Lifestyle:</h5>
                <p className="text-[16px] font-[400]">Friendly, Indoor</p>
              </span>
            </span>
            <span className="flex items-center gap-[0.5rem]">
              <FlagIcon className="fill-[#32475C99]/[60%]" />
              <span className="flex gap-[0.2rem] text-[rgba(50, 71, 92, 0.60)]">
                <h5 className="text-[16px] font-[700]">Lifestyle:</h5>
                <p className="text-[16px] font-[400]">Friendly, Indoor</p>
              </span>
            </span>
          </div>
        </div>
        <div className="p-[0.5rem] border border-[#D6DDEB] px[20px] py[13px] flex flex-col gap-[0.3rem]">
          <div className="flex items-center justify-between">
            <h4 className="text-[#25324B] text-[24px] font-[700]">
              Favorite and Saved Searches
            </h4>
            <Button icon={<PlusIcon className="fill-[#010886]" />} />
          </div>
          <div className="hfit">
            <Carousel
              dots={{ className: "text-[#010886] carouselBtn" }}
              // dotPosition="top"
              variableWidth
              className="max-h-[250px]"
            >
              <div className="w-fit hfit p-[1rem] flex flex-row gap-[0.2rem]">
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
            <h4 className="text-[#25324B] text-[24px] font-[700]">
              Rented Apartment
            </h4>
            <Button icon={<PlusIcon className="fill-[#010886]" />} />
          </div>
          <div className="">
            <Carousel
              dots={{ className: "text-[#010886] carouselBtn" }}
              dotPosition="bottom"
              variableWidth
              className="max-h-[250px]"
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
      </div>
      <ProfileSection2 />
    </div>
  );
};

export default ProfileSection;
