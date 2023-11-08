"use client";
import Image from "next/image";
import RoomIcon from "@/assets/icons/RoomIcon";
import BathIcon from "@/assets/icons/BathIcon";
import PinLocation from "@/assets/icons/PinLocation";
import {
  CustomDivider as Divider,
  CustomButton as Button,
} from "@/lib/AntDesignComponents";
import { useRouter } from "next/navigation";
interface Props {
  data: Record<string, any>;
}

const HomeCard = ({ data }: Props) => {
  const { push } = useRouter();

  const renderExtras = () => {
    if (!data.extras === null) {
      const rooms = data?.extras?.rooms || 0;
      const baths = data?.extras?.baths || 0;
      return (
        <div className="flex items-center gap-[0.2rem]">
          <RoomIcon />
          <p className="text-[12px] text-[#515B6F] font-[400]">{rooms} Rooms</p>
          <div className="flex items-center gap-[0.2rem]">
            <BathIcon />
            <p className="text-[12px] text-[#515B6F] font-[400]">
              {baths} Baths
            </p>
          </div>
        </div>
      );
    }
    return null;
  };
  return (
    <div className="rounded-[8px] grid grid-cols-1 shadow shadow-[#CDCDCD] gap-[0.5rem]">
      <Image alt="property" className="w-full" src={data?.image} width={200} height={200} />
      <div className="flex items-center justify-between px-[2%] mx-auto w-full">
        <p className="text-[16px] font-[500] text-[#616A6A]">{data?.house_type}</p>
        <h5 className="text-[16px] font-[700] text-colorPrimary">NGN{data?.amount}</h5>
      </div>
      <div className="flex items-center w-full mx-auto justify-between px-[2%]">
        {renderExtras()}
      </div>
      <Divider />
      <div className="flex items-center justify-between p-[0.5rem] py[1rem]">
        <div className="flex items-center gap-[0.3rem]">
          <PinLocation />
          <p className="text-[14px] text-[#515B6F] font-[400]">
            {data?.location}
          </p>
        </div>
        <Button
          className="!bg-[#010886]"
          onClick={() => push(`/dashboard/find-property/${data?.id}`)}
          type="primary"
        >
          View
        </Button>
      </div>
    </div>
  );
};

export default HomeCard;
