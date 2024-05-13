"use client";
import { HeaderType } from "./HeaderType";
import { CustomButton as Button } from "@/lib/AntDesignComponents";
import { useRouter } from "next/navigation";
import Notification from "@/assets/icons/Notification";
import PlusIcon from "@/assets/icons/PlusIcon";
import HomeIconsm from "@/assets/icons/HomeIconsm";
import Nav from "@/assets/icons/Nav";

const HostHeader = ({ children }: HeaderType) => {
  const { push } = useRouter();
  return (
    <div className="grid grid-cols-[10%_40%_20%_30%] md:grid-cols-[60%_20%_20%] lg:grid-cols-[70%_10%_20%] items-center px-[0.5rem] lg:px-[1rem] sticky top-0 bg-[white] z-10 border-b border-[#D6DDEB]">
      <label
        htmlFor="my-drawer-2"
        className="flex lg:hidden text-blue-800 px-3"
      >
        <Nav />
      </label>
      {children}
      <div className="flex justify-end">
        <Notification />
      </div>
      <div className="flex justify-center">
        <Button
          onClick={() => push("/host/post-apartment")}
          className="flex items-center self-end !bg-[#010886]"
          type="primary"
        >
          <div className="flex items-center justify-center gap-[0.2rem]">
            <PlusIcon className="fill-[#FFF]" />
            <HomeIconsm className="stroke-[#FFF] md:hidden" />
            <p className="text-[12px] md:text-[14px] font-[600] hidden md:block">
              Post an apartment
            </p>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default HostHeader;
