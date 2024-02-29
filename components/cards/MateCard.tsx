"use client";
import Image from "next/image";
import {
  SecondaryButton,
  DangerButton,
  CustomButton as Button,
  CustomDivider as Divider,
} from "@/lib/AntDesignComponents";

import ShareIcon from "@/assets/icons/ShareIcon";
import HeartIcon from "@/assets/icons/HeartIcon";
import { useRouter } from "next/navigation";
import { useSaveFlatmateMutation } from "@/redux/api/flatmateApi";
import { useEffect } from "react";
import { message } from "antd";

interface Props {
  data: Record<string, any>;
}
const MateCard = ({ data }: Props) => {
  const { push } = useRouter();
  const [saveFlatmate, { isSuccess, isError, isLoading }] =
    useSaveFlatmateMutation();

  const handleSaveFlatmate = async (id: string | number) => {
    await saveFlatmate(id);
  };

  useEffect(() => {
    if (isSuccess) {
      message.success("Flat mate saved");
    }
    if (isError) {
      message.error("An Error occured");
    }
  }, [isError, isSuccess]);
  return (
    <div className="rounded-[8px] grid grid-cols-1 shadow shadow-[#CDCDCD] gap-[0.5rem] py-[0.5rem]">
      <div className="flex items-center justify-between w-[98%] mx-auto px-[2%]">
        <div className="flex flex-col items-start text-colorPrimary text-[16px] font-[500]">
          <p>{data?.house_type[0] ? data?.house_type[0] : "null"}</p>
          <p>{data?.gender}</p>
        </div>
        <h5 className="text-[#010886] text-[16px] font-[400]">
          {data?.budget}
        </h5>
      </div>
      <Divider />
      <div className="grid grid-cols-2 gap-[0.5rem] items-center w-[98%] mx-auto">
        <Image
          alt="user"
          src={
            data?.image === null || data?.image === ""
              ? "https://cdn-icons-png.flaticon.com/512/149/149071.png"
              : data?.image
          }
          className="rounded-[8px]"
          width={200}
          height={200}
        />
        <div className="flex flex-col gap-[0.5rem]">
          <p className="text-[#32475C99]/[60%] text-[13px] flex items-center gap-[0.5rem]">
            Location: <p className="text-[11px]">{data?.location}</p>
          </p>
          <p className="text-[#32475C99]/[60%] text-[13px] flex items-center gap-[0.5rem]">
            Lifestyle:{" "}
            <p className="text-[11px] truncate">
              {data?.lifestyle?.join(", ")}
            </p>
          </p>
          <p className="text-[#32475C99]/[60%] text-[13px] flex items-center gap-[0.5rem]">
            Language: <p className="text-[11px]">{data?.language}</p>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[0.3rem] items-center justify-between w-[98%] mx-auto p-[2%]">
        <SecondaryButton type="primary">
          <div className="flex items-center gap-[0.1rem]">
            <ShareIcon />
            <p className="text-[#50E5B4]">Share</p>
          </div>
        </SecondaryButton>
        {data.is_saved ? (
          <DangerButton className="bg-[#FF3D00]/[20%]" type="primary">
            <div
              className="flex items-center gap-[0.1rem]"
              onClick={() => {
                handleSaveFlatmate(data?.id);
              }}
            >
              <HeartIcon className="fill-[#FF3D00]" />
              <p className="text-[#FF3D00]">
                {isLoading ? "Saving.." : "Saved"}
              </p>
            </div>
          </DangerButton>
        ) : (
          <DangerButton type="primary">
            <div
              className="flex items-center gap-[0.1rem]"
              onClick={() => {
                handleSaveFlatmate(data?.id);
              }}
            >
              <HeartIcon />
              <p className="text-[#FF3D00]">
                {isLoading ? "Saving.." : "Save"}
              </p>
            </div>
          </DangerButton>
        )}
        <Button
          className="!bg-[#010886]"
          onClick={() => push(`/dashboard/view-mate/${data?.id}`)}
          type="primary"
        >
          View
        </Button>
      </div>
    </div>
  );
};

export default MateCard;
