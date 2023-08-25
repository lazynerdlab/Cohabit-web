import { AuthButton as Button } from "@/lib/AntDesignComponents";
import cash from "@/assets/money.svg";
import Image from "next/image";
import flutterwave from "@/assets/flutterwave.svg";
import paystack from "@/assets/paystack.svg";

const PaymentDetails = () => {
  return (
    <div className="">
      <div className="flex flex-col items-start gap-[0.8rem] border border-[#D6DDEB] py-[0.1rem] px-[1rem]">
        <div className="w-[98%] mx-auto py-[0.8rem] border-b border-[#B8C9C9] flex flex-col gap-[0.3rem]">
          <h4 className="text-[20px] font-[500] text-[#101C1D]">
            Payment Details
          </h4>
          <div className="bg-[#9CA9F933]/[20%] rounded-[4px] p-[0.5rem]">
            <p className="text-[#515B6F] text-[12px] font-[400]">
              Total Amount 100%
            </p>
            <h4 className="text-[#000] text-[12px] font-[500]">
              NGN 300,000,000.00
            </h4>
          </div>
        </div>
        <div className="w-[98%] mx-auto py-[1rem] border-b border-[#B8C9C9]">
          <div className="flex justify-between items-center">
            <h5 className="text-[#515B6F] text-[16px] font-[500]">
              2 Bedroom Apartment
            </h5>
            <p className="text-[#3772FF] text-[16px] font-[600]">Edit</p>
          </div>
          <div className="flex justify-between items-center">
            <h5 className="text-[#515B6F] text-[16px] font-[500]">Sub Total</h5>
            <p className="text-[#000] text-[16px] font-[400]">NGN 35,000.00</p>
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <h6 className="text-[#101C1D] text-[16px] font-[500]">Total</h6>
          <p className="text-[#16DD97] text-[14px] font-[400]">
            NGN290,000,000.00
          </p>
        </div>
        <Button
          style={{ backgroundColor: "#010886" }}
          className="w-full"
          type="primary"
        >
          Make Payment
        </Button>
        <div className="bg-[#3772FF1A]/[10%] rounded-[10px] p-[0.5rem] grid grid-cols-[10%_90%]">
          <Image alt="icon" src={cash} />
          <div className="flex flex-col">
            <p className="text-colorPrimary text-[14px] font-[700]">
              30 day money back guarantee
            </p>
            <p className="text-[#616A6A] text-[12px] font-[400]">
              Your money will be safe with us, until you confirm that you are
              fine with the apartment and everything
            </p>
          </div>
        </div>
        <div className="text-[#1E1709] text-[14px] font-[500]">
          Payment service
        </div>
        <div className="flex items-center gap-[0.5rem]">
          <Image alt="flutterwave" src={flutterwave} />
          <Image alt="paystact" src={paystack} />
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
