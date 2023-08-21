"use client";
import Image from "next/image";
import user from "@/assets/user.svg";
import JpgIcon from "@/assets/icons/JpgIcon";
import {
  CustomUpload as Upload,
  CustomInput as Input,
} from "@/lib/AntDesignComponents";
import { message } from "antd";
import type { UploadProps } from "antd";

const Tab1 = () => {
  const props: UploadProps = {
    name: "file",
    multiple: false,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
  return (
    <div className="grid grid-cols-1 gap-[0.5rem] w-[98%] mx-auto">
      <div className="flex flex-col items-start gap-[0.2rem] border-b border-[#D6DDEB]">
        <h4 className="text-[18px] font-[700] text-[#202430]">
          Basic Information
        </h4>
        <p className="text-[16px] font-[400] text-[#515B6F]">
          This is your personal information that you can update anytime.
        </p>
      </div>
      <div className="grid grid-cols-[30%_70%] items-center gap-[0.5rem] border-b border-[#D6DDEB] py-[0.5rem]">
        <div className="flex flex-col items-start gap-[0.2rem]">
          <h4 className="text-[16px] font-[500] text-[#25324B]">
            Profile Photo
          </h4>
          <p className="text-[16px] font-[400] text-[#515B6F]">
            This image will be shown publicly as your profile picture, it will
            help recruiters recognize you!
          </p>
        </div>
        <div className="flex items-center gap-[1rem]">
          <Image alt="photo" src={user} />
          <Upload {...props}>
            <div className="flex flex-col items-center p-[0.5rem]">
              <JpgIcon />
              <span className="flex items-center gap-[0.2rem] text-[16px] font-[400]">
                <p className="text-colorPriary">Click to replace</p>
                <p className="text-[#515B6F)]">or drag and drop</p>
              </span>
              <p className="text-[16px] font-[400] text-[#7C8493]">
                SVG, PNG, JPG or GIF (max. 400 x 400px).
              </p>
            </div>
          </Upload>
        </div>
      </div>
      <div className="grid grid-cols-[30%_70%] items-center gap-[0.5rem] border-b border-[#D6DDEB] py-[0.5rem]">
        <h4 className="text-[16px] font-[500] text-[#25324B]">
          Personal Details
        </h4>
        <div className="flex items-center gap-[1rem]">
          <Image alt="photo" src={user} />
          <Upload {...props}>
            <div className="flex flex-col items-center p-[0.5rem]">
              <JpgIcon />
              <span className="flex items-center gap-[0.2rem] text-[16px] font-[400]">
                <p className="text-colorPriary">Click to replace</p>
                <p className="text-[#515B6F)]">or drag and drop</p>
              </span>
              <p className="text-[16px] font-[400] text-[#7C8493]">
                SVG, PNG, JPG or GIF (max. 400 x 400px).
              </p>
            </div>
          </Upload>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Tab1;
