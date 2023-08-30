import EnterpriseIcon from "@/assets/icons/EnterpriseIcon";
import { CustomButton as Button } from "@/lib/AntDesignComponents";

const EnterpriseCard = () => {
  return (
    <div className="rounded-[8px] border border-[#D6DDEB] shadow-sm flex flex-col gap-[0.5rem] justify-between py-[5%] px-[3%] cursor-pointer hover:border-colorPrimary">
      <div className="flex flex-col gap-[0.1rem] self-center w-full pt-[8%]">
        <span className=""></span>
        <EnterpriseIcon className="self-center" />
      </div>
      <div className="flex flex-col gap-[0.3rem]">
        <h4 className="text-[rgba(50, 71, 92, 0.87)] text-[24px] font-[500] text-center">
          Enterprise
        </h4>
        <p className="text-[rgba(50, 71, 92, 0.60)] text-[14px] font-[400] text-center">
          Solution for big organizations
        </p>
      </div>
      <div className="text-center">
        <p className="text-[48px] text-colorPrimary font-[700]">
          <sup className="text-[rgba(50, 71, 92, 0.60)] uppercase text-[14px] font-[400]">
            NGN
          </sup>
          99
          <sub className="text-[rgba(50, 71, 92, 0.60)] text-[14px] font-[400]">
            /month
          </sub>
        </p>
      </div>
      <ul className="list-disc self-center">
        <li className="text-[rgba(50, 71, 92, 0.60)] text-[14px] font-[400]">
          PayPal payments
        </li>
        <li className="text-[rgba(50, 71, 92, 0.60)] text-[14px] font-[400]">
          Logic Jumps
        </li>
        <li className="text-[rgba(50, 71, 92, 0.60)] text-[14px] font-[400]">
          File upload with 5GB storage
        </li>
        <li className="text-[rgba(50, 71, 92, 0.60)] text-[14px] font-[400]">
          Custom domain support
        </li>
        <li className="text-[rgba(50, 71, 92, 0.60)] text-[14px] font-[400]">
          Stripe integration
        </li>
      </ul>
      <Button>Upgrade</Button>
    </div>
  );
};

export default EnterpriseCard;
