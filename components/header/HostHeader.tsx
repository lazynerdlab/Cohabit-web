"use client";
import { HeaderType } from "./HeaderType";
import { CustomButton as Button } from "@/lib/AntDesignComponents";
import { useRouter } from "next/navigation";
import Notification from "@/assets/icons/Notification";
import PlusIcon from "@/assets/icons/PlusIcon";

const HostHeader = ({ children }: HeaderType) => {
  const { replace } = useRouter();
  return (
    <div className="grid grid-cols-[70%_10%_20%] items-center px-[1rem] sticky shadow-inner shadow-[#D6DDEB]">
      {children}
      <div className="flex justify-end">
        <Notification />
      </div>
      <div className="flex justify-center">
        <Button
          style={{ backgroundColor: "#010886" }}
          className="flex items-center self-end"
          type="primary"
        >
          <div className="flex items-center justify-center gap-[0.2rem]">
            <PlusIcon className="fill-[#FFF]" />
            <p className="text-[14px] font-[600]">Post an apartment</p>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default HostHeader;
