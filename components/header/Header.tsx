"use client";
import { HeaderType } from "./HeaderType";
import { CustomButton as Button } from "@/lib/AntDesignComponents";
import { useRouter } from "next/navigation";
import Notification from "@/assets/icons/Notification";
import Nav from "@/assets/icons/Nav";

const Header = ({ children }: HeaderType) => {
  const { replace } = useRouter();
  return (
    <div className="sticky top-0 bg-[#FFF] z-[999] grid md:grid-cols-[70%_20%_10%] grid-cols-[10%_60%_20%_10%] items-center px-[2%] border-b border-[#D6DDEB]">
      <label
        htmlFor="my-drawer-2"
        className="flex lg:hidden text-blue-800 px-3"
      >
        <Nav />
      </label>
      {children}
      <div className="md:flex justify-center hidden">
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
