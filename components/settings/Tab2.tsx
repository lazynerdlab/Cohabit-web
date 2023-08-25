"use client";
import VerifiedIcon from "@/assets/icons/VerifiedIcon";
import WarningIcon from "@/assets/icons/WarningIcon";
import {
  CustomInput as Input,
  CustomPasswordInput as PasswordInput,
  AuthButton as Button,
} from "@/lib/AntDesignComponents";

const Tab2 = () => {
  return (
    <div className="grid grid-cols-1 gap-[0.5rem] w-[98%] mx-auto">
      <div className="flex flex-col items-start gap-[0.2rem] border-b border-[#D6DDEB]">
        <h4 className="text-[18px] font-[700] text-[#202430]">
          Basic Information
        </h4>
        <p className="text-[16px] font-[400] text-[#515B6F]">
          This is login information that you can update anytime.
        </p>
      </div>
      <div className="grid grid-cols-[30%_70%] items-start gap-[1rem] border-b border-[#D6DDEB] py-[0.5rem]">
        <div className="flex flex-col items-start gap-[0.2rem]">
          <h4 className="text-[16px] font-[500] text-[#25324B]">
            Update Email
          </h4>
          <p className="text-[16px] font-[400] text-[#515B6F]">
            Update your email address to make sure it is safe
          </p>
        </div>
        <div className="grid grid-cols-1 items-center gap-[1rem] w-[80%] mx-auto">
          <div className="w-full mx-auto flex flex-col items-start justify-start gap-[0.5rem]">
            <div className="flex items-center">
              <h5 className="text-[#25324B] text-[16px] font-[500]">
                jakegyll@email.com
              </h5>
              <VerifiedIcon />
            </div>
            <p className="text-[#7C8493] text-[16px] font-[400]">
              Your email address is verified.
            </p>
          </div>
          <div className="w-full mx-auto flex flex-col items-start justify-start gap-[0.5rem]">
            <label
              htmlFor="email"
              className="text-[#0C1938] text-[16px] font-[700]"
            >
              Update Email
            </label>
            <Input
              className=""
              type="email"
              placeholder="This is a placeholder"
              id="email"
            />
          </div>
          <div>
            <Button style={{ backgroundColor: "#010886" }} type="primary">
              Update Email
            </Button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[30%_70%] items-start gap-[1rem] border-b border-[#D6DDEB] py-[0.5rem]">
        <div className="flex flex-col items-start gap-[0.2rem]">
          <h4 className="text-[16px] font-[500] text-[#25324B]">
            New Password
          </h4>
          <p className="text-[16px] font-[400] text-[#515B6F]">
            Manage your password to make sure it is safe
          </p>
        </div>
        <div className="grid grid-cols-1 items-center gap-[1rem] w-[80%] mx-auto">
          <div className="w-full mx-auto flex flex-col items-start justify-start gap-[0.5rem]">
            <label
              htmlFor="oldPassword"
              className="text-[#0C1938] text-[16px] font-[700]"
            >
              Old Password
            </label>
            <PasswordInput
              className=""
              type="email"
              placeholder="This is a placeholder"
              id="email"
            />
          </div>
          <div className="w-full mx-auto flex flex-col items-start justify-start gap-[0.5rem]">
            <label
              htmlFor="newPassword"
              className="text-[#0C1938] text-[16px] font-[700]"
            >
              New Password
            </label>
            <PasswordInput
              className=""
              type="email"
              placeholder="This is a placeholder"
              id="newPassword"
            />
          </div>
          <div>
            <Button style={{ backgroundColor: "#010886" }} type="primary">
              Change Password
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end py-[2rem]">
        <Button
          type="text"
          icon={<WarningIcon />}
          className="flex items-center"
          danger
        >
          <p>close account</p>
        </Button>
      </div>
    </div>
  );
};

export default Tab2;
