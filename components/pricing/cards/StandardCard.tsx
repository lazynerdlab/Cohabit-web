import StandardIcon from "@/assets/icons/StandardIcon";
import { CustomButton as Button } from "@/lib/AntDesignComponents";

const StandardCard = () => {
  return (
    <div className="rounded-[8px] border border-[#D6DDEB] shadow-sm flex flex-col gap-[0.5rem] justify-between py-[5%] px-[3%] cursor-pointer hover:border-colorPrimary">
      <div className="flex flex-col gap-[0.1rem] self-center w-full">
        <span className="text-[#696CFF] bg-[#696CFF]/[12%] text-[13px] font-[400] self-end px-[6px]">
          Popular
        </span>
        <StandardIcon className="self-center" />
      </div>
      <div className="flex flex-col gap-[0.3rem]">
        <h4 className="text-[rgba(50, 71, 92, 0.87)] text-[24px] font-[500] text-center">
          Standard
        </h4>
        <p className="text-[rgba(50, 71, 92, 0.60)] text-[14px] font-[400] text-center">
          To boost your post
        </p>
      </div>
      <div className="text-center">
        <p className="text-[48px] text-colorPrimary font-[700]">
          <sup className="text-[rgba(50, 71, 92, 0.60)] uppercase text-[14px] font-[400]">
            NGN
          </sup>
          49
          <sub className="text-[rgba(50, 71, 92, 0.60)] text-[14px] font-[400]">
            /month
          </sub>
        </p>
      </div>
      <ul className="list-disc self-center">
        <li className="text-[rgba(50, 71, 92, 0.60)] text-[14px] font-[400]">
          Unlimited responses
        </li>
        <li className="text-[rgba(50, 71, 92, 0.60)] text-[14px] font-[400]">
          Unlimited forms and surveys
        </li>
        <li className="text-[rgba(50, 71, 92, 0.60)] text-[14px] font-[400]">
          Instagram profile page
        </li>
        <li className="text-[rgba(50, 71, 92, 0.60)] text-[14px] font-[400]">
          Google Docs integration
        </li>
        <li className="text-[rgba(50, 71, 92, 0.60)] text-[14px] font-[400]">
          Custom “Thank you” page
        </li>
      </ul>
      <Button className="!bg-[#010886]" type="primary">
        Upgrade
      </Button>
    </div>
  );
};

export default StandardCard;
