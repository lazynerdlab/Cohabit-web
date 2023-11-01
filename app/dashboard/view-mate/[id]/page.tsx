"use client";
import Header from "@/components/header/Header";
import BackIcon from "@/assets/icons/BackIcon";
import ViewMate from "@/components/dashboard/ViewMate";
import { useRouter } from "next/navigation";
import { useGetFlatmateDetailsQuery } from "@/redux/api/flatmateApi";
import { useEffect, useState } from "react";
interface IProps {
  params: {
    id: string | number
  }
}
const Page = ({ params }: IProps) => {
  const { back } = useRouter();
  const { id } = params;
  const { data, isLoading, isError, error, isSuccess } = useGetFlatmateDetailsQuery(id);
  const [flatmate, setFlatmate] = useState<Record<string, any>>({});
  useEffect(() => {
    if (isSuccess) {
      setFlatmate(data?.data)
    }
  }, [data, isSuccess])

  console.log(flatmate);

  return (
    <div className="grid grid-cols-1 grid-rows-[10%_90%] max-h-screen overflow-y-scroll">
      <Header>
        <div className="flex items-center gap-[0.5rem]">
          <BackIcon
            onClick={() => {
              back();
            }}
            className="w-[40px] h-[40px] font-[400] text-[15px] cursor-pointer"
          />
          <div className="text-[#25324B] text-[25px] font-[700] flex items-center">
            <h4>Find Flatmate </h4>
          </div>
        </div>
      </Header>
      <ViewMate data={flatmate} />
    </div>
  );
};

export default Page;
