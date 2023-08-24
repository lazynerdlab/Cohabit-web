"use client";
import Header from "@/components/header/Header";
import BackIcon from "@/assets/icons/BackIcon";
import ViewMates from "@/components/dashboard/ViewMates";
import { useRouter } from "next/navigation";

const page = () => {
  const { push } = useRouter();
  return (
    <div className="grid grid-cols-1 grid-rows-[10%_90%] max-h-screen overflow-y-scroll">
      <Header>
        <div className="flex items-center gap-[0.5rem]">
          <BackIcon
            onClick={() => {
              push("/dashboard");
            }}
            className="w-[40px] h-[40px] font-[400] text-[15px] cursor-pointer"
          />
          <div className="text-[#25324B] text-[25px] font-[700] flex items-center">
            <h4>Dashboard</h4>
            <p className="font-[700] text-[15px]">(Flatmate)</p>
          </div>
        </div>
      </Header>
      <ViewMates />
    </div>
  );
};

export default page;
