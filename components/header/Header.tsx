"use client";
import { HeaderType } from "./HeaderType";
import { CustomButton as Button } from "@/lib/AntDesignComponents";
import { useRouter } from "next/navigation";
import Notification from "@/assets/icons/Notification";

const Header = ({ children }: HeaderType) => {
  const { replace } = useRouter();
  return (
    <div className="grid grid-cols-[70%_20%_10%] items-center px-[1rem] sticky shadow-inner shadow-[#D6DDEB]">
      {children}
      <div className="flex justify-center">
        <Button
          onClick={() => {
            replace("/");
          }}
        >
          <p className="text-colorPrimary font-[700] text-[14px]">
            Back to homepage
          </p>
        </Button>
      </div>
      <div className="flex justify-end">
        <Notification />
      </div>
    </div>
  );
};

export default Header;
