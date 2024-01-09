"use client";

import WarningIcon from "@/assets/icons/WarningIcon";
import {
  CustomPasswordInput as PasswordInput,
  AuthButton as Button,
} from "@/lib/AntDesignComponents";
import { useUpdatePasswordMutation } from "@/redux/api/settingApi";
import { message } from "antd";
import { useEffect, useState } from "react";

const Tab2 = () => {
  const [oldPassword, setOldPassword] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [updatePassword, { isLoading, isSuccess, isError }] = useUpdatePasswordMutation();
  const handleChangePassword = async () => {
    if (password !== confirmPassword) {
      message.error("Passwords don't match");
      return
    }

    if (password.length < 6) {
      message.error("Password must be at least 6 characters");
      return
    }

    if (oldPassword && password && confirmPassword) {
      message.error("All are required");
      return
    }
    await updatePassword({ old_password: oldPassword, password: password, password_confirmation: confirmPassword });
  }

  useEffect(() => {
    if (isSuccess) {
      message.success("Password updated successfully");
    }
    if (isError) {
      message.error("Failed to update password");
    }
  }, [isSuccess, isError])
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

      <div className="grid grid-cols-1 md:grid-cols-[30%_70%] items-start gap-[1rem] border-b border-[#D6DDEB] py-[0.5rem]">
        <div className="flex flex-col items-start gap-[0.2rem]">
          <h4 className="text-[16px] font-[500] text-[#25324B]">
            New Password
          </h4>
          <p className="text-[16px] font-[400] text-[#515B6F]">
            Manage your password to make sure it is safe
          </p>
        </div>
        <div className="grid grid-cols-1 items-center gap-[1rem] w-full md:w-[80%] mx-auto">
          <div className="w-full mx-auto flex flex-col items-start justify-start gap-[0.5rem]">
            <label
              htmlFor="oldPassword"
              className="text-[#0C1938] text-[16px] font-[700]"
            >
              Old Password
            </label>
            <PasswordInput
              className=""
              value={oldPassword}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setOldPassword(e.target.value)}
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
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              id="newPassword"
            />
          </div>
          <div className="w-full mx-auto flex flex-col items-start justify-start gap-[0.5rem]">
            <label
              htmlFor="newPassword"
              className="text-[#0C1938] text-[16px] font-[700]"
            >
              Confirm Password
            </label>
            <PasswordInput
              className=""
              value={confirmPassword}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
              id="newPassword"
            />
          </div>
          <div>
            <Button className="!bg-[#010886]" type="primary" onClick={handleChangePassword}>
              Update Password
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
