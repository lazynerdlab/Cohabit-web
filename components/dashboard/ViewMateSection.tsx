import { CustomButton as Button } from "@/lib/AntDesignComponents";
import EditIcon from "@/assets/icons/EditIcon";
import Checkicon from "@/assets/icons/Checkicon";
import RateIcon from "@/assets/icons/RateIcon";
import FlagIcon from "@/assets/icons/FlagIcon";

const ViewMateSection = () => {
  return (
    <div className="w-full py-[1rem]">
      <div className="grid grid-cols-2 gap-[0.5rem]">
        <div className="p-[0.5rem] border border-[#D6DDEB] px-[20px] py-[13px] flex flex-col gap-[0.3rem] w-full">
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
        <div className="p-[0.5rem] border border-[#D6DDEB] px-[20px] py-[13px] flex flex-col gap-[0.3rem] w-full">
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
      </div>
    </div>
  );
};

export default ViewMateSection;
