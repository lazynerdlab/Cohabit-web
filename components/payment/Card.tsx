import Image from "next/image";
import PaymentDetails from "./PaymentDetails";
import mockcard from "@/assets/mockcard.svg";
import { CustomButton as Button } from "@/lib/AntDesignComponents";

const Card = () => {
  return (
    <div className="w-[98%] mx-auto grid grid-cols-[60%_40%] gap-[1rem]">
      <div className="flex flex-col items-start gap-[0.5rem] border border-[#D6DDEB] p-[1rem] h-fit">
        <div className="flex items-center justify-between w-full">
          <h4>Payment Card</h4>
          <Button>Select</Button>
        </div>
        <Image alt="card" src={mockcard} />
      </div>
      <PaymentDetails />
    </div>
  );
};

export default Card;
