"use client";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
// import ReactQuill from "react-quill";
import { CustomUpload as Upload } from "@/lib/AntDesignComponents";
import { message } from "antd";
import LinkIcon from "@/assets/icons/LinkIcon";
import type { UploadProps } from "antd";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
const Step3 = () => {
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
        <h4 className="text-[18px] font-[700] text-[#202430]">Details</h4>
        <p className="text-[16px] font-[400] text-[#515B6F]">
          Add the description of the apartment, pictures, and features.
        </p>
      </div>
      <div className="grid grid-cols-[30%_70%] items-center gap-[1rem] border-b border-[#D6DDEB] py-[0.5rem]">
        <div className="flex flex-col items-start gap-[0.2rem]">
          <h4 className="text-[16px] font-[500] text-[#25324B]">
            Upload the pictures of the apartment
          </h4>
          <p className="text-[16px] font-[400] text-[#515B6F]">
            This image will be shown publicly as your profile picture, it will
            help recruiters recognize you!
          </p>
        </div>
        <div className="flex flex-col items-stretch gap-[1rem] w-[80%] mx-auto">
          <span className="text-[#202430] text-[16px] font-[500]">
            Upload pictures (Png, Jpeg). not less than 500mb
          </span>
          <Upload {...props}>
            <div className="flex gap-[0.3rem] p-[0.5rem]">
              <LinkIcon />
              <h4 className="text-[#0C1938] text-[16px] font-[500]">
                Attach image of the reciept
              </h4>
            </div>
          </Upload>
        </div>
      </div>
      <div className="grid grid-cols-[30%_70%] items-start gap-[0.5rem] border-b border-[#D6DDEB] py-[0.5rem]">
        <div className="flex flex-col items-start gap-[0.2rem]">
          <h4 className="text-[16px] font-[500] text-[#25324B]">
            Apartment Description
          </h4>
          <p className="text-[16px] font-[400] text-[#515B6F]">
            Full details about the apartment
          </p>
        </div>
        <div className="w-full">
          <ReactQuill
            className="w-full"
            theme="snow"
            placeholder="Enter apartment description"
          />
        </div>
      </div>
      <div className="grid grid-cols-[30%_70%] items-start gap-[0.5rem] border-b border-[#D6DDEB] py-[0.5rem]">
        <div className="flex flex-col items-start gap-[0.2rem]">
          <h4 className="text-[16px] font-[500] text-[#25324B]">
            Key Features
          </h4>
          <p className="text-[16px] font-[400] text-[#515B6F]">
            Outline the key features of the apartment
          </p>
        </div>
        <div className="w-full">
          <ReactQuill
            className="w-full"
            theme="snow"
            placeholder="Enter apartment description"
          />
        </div>
      </div>
    </div>
  );
};

export default Step3;
