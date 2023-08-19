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
import user from "@/assets/user.svg";

const PropertySection2 = () => {
  const arr = [1, 1, 1, 1, 1, 1];
  return (
    <div className="flex flex-col gap-[0.5rem] w-[95%] mx-auto">
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
        <div className="bg-[#1B17E7] px-[1rem] py-[0.5rem] flex items-center gap-[1rem]">
          <Image alt="host" src={user} />
          <div className="flex flex-col gap-[0.5rem] text-[#FFF]">
            <span>Tony James</span>
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
            <Button type="primary" style={{ backgroundColor: "#515B6F" }}>
              Submit
            </Button>
          </div>
        </form>
      </div>
      <div className="flex flex-col gap-[0.5rem]">
        <h6 className="text-[18px] font-[400] text-[#000] text-center">
          Featured Property
        </h6>
        <div className="grid grid-cols-1 gap-[0.5rem] w-[98%] mx-auto">
          {arr.map((e, i) => (
            <HomeCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertySection2;
