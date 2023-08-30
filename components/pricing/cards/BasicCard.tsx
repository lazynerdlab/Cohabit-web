import BasicIcon from "@/assets/icons/BasicIcon";
import { SuccessButton as Button } from "@/lib/AntDesignComponents";

const BasicCard = () => {
  return (
    <div className="rounded-[8px] border border-[#D6DDEB] shadow-sm flex flex-col gap-[0.5rem] justify-between py-[5%] px-[3%] cursor-pointer hover:border-colorPrimary">
      <div className="flex flex-col gap-[0.1rem] self-center w-full pt-[8%]">
        <span className=""></span>
        <BasicIcon className="self-center" />
      </div>
      <div className="flex flex-col gap-[0.3rem]">
        <h4 className="text-[rgba(50, 71, 92, 0.87)] text-[24px] font-[500] text-center">
          Basic
        </h4>
        <p className="text-[rgba(50, 71, 92, 0.60)] text-[14px] font-[400] text-center">
          A simple start for everyone
        </p>
      </div>
      <div className="text-center">
        <p className="text-[48px] text-colorPrimary font-[700]">
          <sup className="text-[rgba(50, 71, 92, 0.60)] uppercase text-[14px] font-[400]">
            NGN
          </sup>
          0
          <sub className="text-[rgba(50, 71, 92, 0.60)] text-[14px] font-[400]">
            /month
          </sub>
        </p>
      </div>
      <ul className="list-disc self-center">
        <li className="text-[rgba(50, 71, 92, 0.60)] text-[14px] font-[400]">
          100 responses a month
        </li>
        <li className="text-[rgba(50, 71, 92, 0.60)] text-[14px] font-[400]">
          Unlimited forms and surveys
        </li>
        <li className="text-[rgba(50, 71, 92, 0.60)] text-[14px] font-[400]">
          Unlimited fields
        </li>
        <li className="text-[rgba(50, 71, 92, 0.60)] text-[14px] font-[400]">
          Basic form creation tools
        </li>
        <li className="text-[rgba(50, 71, 92, 0.60)] text-[14px] font-[400]">
          Up to 2 subdomains
        </li>
      </ul>
      <Button>Your Current Plan</Button>
    </div>
  );
};

export default BasicCard;
