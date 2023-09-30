"use client";
import Image from "next/image";
import user from "@/assets/user.svg";
import JpgIcon from "@/assets/icons/JpgIcon";
import {
  CustomUpload as Upload,
  CustomInput as Input,
  CustomDatePicker as DatePicker,
  CustomSelect as Select,
  RadioGroup,
  CustomRadio as Radio,
  CustomButton as Button,
} from "@/lib/AntDesignComponents";
import { message } from "antd";
import type { UploadProps } from "antd";

const options = [
  {
    value: "male",
    label: "Male",
  },
  {
    value: "female",
    label: "Female",
  },
];

const statusOptions = [
  {
    value: "Looking for apartment",
    label: "Looking for apartment",
  },
  {
    value: "Looking for flatmate",
    label: "Looking for flatmate",
  },
];

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
      <div className="grid grid-cols-1 md:grid-cols-[30%_70%] items-center gap-[1rem] border-b border-[#D6DDEB] py-[0.5rem]">
        <div className="flex flex-col items-start gap-[0.2rem]">
          <h4 className="text-[16px] font-[500] text-[#25324B]">
            Profile Photo
          </h4>
          <p className="text-[16px] font-[400] text-[#515B6F]">
            This image will be shown publicly as your profile picture, it will
            help recruiters recognize you!
          </p>
        </div>
        <div className="flex items-center gap-[1rem] w-[98%] md:w-[80%] mx-auto">
          <Image alt="photo" src={user} />
          <Upload {...props}>
            <div className="flex flex-col items-center p-[0.2rem] md:p-[0.5rem]">
              <JpgIcon className="hidden md:block" />
              <span className="flex flex-col md:flex-row items-center gap-[0.2rem] text-[10px] md:text-[16px] font-[400]">
                <p className="text-colorPriary text[12px] md:text[16px]">
                  Click to replace
                </p>
                <p className="text-[#515B6F)]">or drag and drop</p>
              </span>
              <p className="text-[10px] md:text-[16px] font-[400] text-[#7C8493]">
                SVG, PNG, JPG or GIF (max. 400 x 400px).
              </p>
            </div>
          </Upload>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[30%_70%] items-start gap-[0.5rem] border-b border-[#D6DDEB] py-[0.5rem]">
        <h4 className="text-[16px] font-[500] text-[#25324B]">
          Personal Details
        </h4>
        <div className="grid grid-cols-1 items-center gap-[1rem] w-full md:w-[80%] mx-auto">
          <div className="w-full mx-auto flex flex-col items-start justify-start gap-[0.5rem]">
            <label
              htmlFor="name"
              className="text-[#0C1938] text-[16px] font-[700]"
            >
              Full Name *
            </label>
            <Input className="" placeholder="This is a placeholder" id="name" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[0.5rem]">
            <div className="w-full mx-auto flex flex-col items-start justify-start gap-[0.5rem]">
              <label
                htmlFor="name"
                className="text-[#0C1938] text-[16px] font-[700]"
              >
                Phone Number *
              </label>
              <Input
                className=""
                placeholder="This is a placeholder"
                id="name"
              />
            </div>
            <div className="w-full mx-auto flex flex-col items-start justify-start gap-[0.5rem]">
              <label
                htmlFor="name"
                className="text-[#0C1938] text-[16px] font-[700]"
              >
                Email *
              </label>
              <Input
                className=""
                placeholder="This is a placeholder"
                id="name"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-[0.5rem] items-stretch">
            <div className="w-full mx-auto flex flex-col items-start justify-start gap-[0.5rem]">
              <label
                htmlFor="name"
                className="text-[#0C1938] text-[16px] font-[700]"
              >
                Date of Birth *
              </label>
              <DatePicker className="w-full" />
            </div>
            <div className="w-full mx-auto flex flex-col items-start justify-start gap-[0.5rem]">
              <label
                htmlFor="name"
                className="text-[#0C1938] text-[16px] font-[700]"
              >
                Gender *
              </label>
              <Select
                className="w-full"
                style={{
                  width: "100%",
                  height: "100%",
                }}
                options={options}
                defaultValue={options[0]}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[30%_70%] items-start gap-[0.5rem] border-b border-[#D6DDEB] py-[0.5rem]">
        <div className="flex flex-col items-start gap-[0.2rem]">
          <h4 className="text-[16px] font-[500] text-[#25324B]">
            Account Type
          </h4>
          <p className="text-[16px] font-[400] text-[#515B6F]">
            You can update your account type
          </p>
        </div>
        <RadioGroup className="" style={{ color: "#4640DE" }}>
          <div className="grid grid-cols-1 w-full md:w-[80%] mx-auto">
            <Radio value={"houseSeeker"}>
              <div className="flex flex-col items-start">
                <h5 className="text-[#25324B] text-[16px] font-[500]">
                  House Seeker
                </h5>
                <p className="text-[#515B6F] text-[16px] font-[400]">
                  Looking for an apartment
                </p>
              </div>
            </Radio>
            <Radio value={"host"}>
              <div className="flex flex-col items-start">
                <h5 className="text-[#25324B] text-[16px] font-[500]">Host</h5>
                <p className="text-[#515B6F] text-[16px] font-[400]">
                  Posting an apartment
                </p>
              </div>
            </Radio>
          </div>
        </RadioGroup>
      </div>
      <div className="grid grid-cols-[30%_70%] items-start gap-[0.5rem] py-[0.5rem]">
        <h4 className="text-[16px] font-[500] text-[#25324B]">Set Status</h4>
        <div className="w-[80%] mx-auto">
          <div className="w-full mx-auto flex flex-col items-start justify-start gap-[0.5rem]">
            <label
              htmlFor="status"
              className="text-[#0C1938] text-[16px] font-[700]"
            >
              Status *
            </label>
            <Select
              className="w-full"
              style={{
                width: "100%",
                height: "100%",
              }}
              id="status"
              options={statusOptions}
              defaultValue={statusOptions[0]}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end py-[2rem]">
        <Button className="!bg-[#010886]" type="primary">
          Save Profile
        </Button>
      </div>
    </div>
  );
};

export default Tab1;
