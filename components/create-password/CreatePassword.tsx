"use client"
import { useRouter } from "next/navigation";
import { message } from "antd";
import { useEffect, useState } from "react";
import {
  CustomPasswordInput as Input,
  AuthButton as Button,
} from "@/lib/AntDesignComponents";
import { useCreatePasswordMutation } from "@/redux/api/authApi";
const CreatePassword = () => {
  const [password, setPassword] = useState<string>()
  const [confirmPassword, setConfirmPassword] = useState<string>()
  const [createPassword, { isLoading, isSuccess, isError, error, data }] = useCreatePasswordMutation();
  const { push } = useRouter()
  const handleCreatePassword = async () => {
    if (!password || !confirmPassword) {
      message.error("All fields are required")
      return
    }
    await createPassword({ password, password_confirmation: confirmPassword })
  }

  useEffect(() => {
    if (isSuccess) {
      message.success("Password Created Successfully")
      push('/')
    }

    if (isError) {
      const errMesg = error as any
      message.error(errMesg?.data?.message)
    }
  }, [isSuccess, isError, push, error,])
  return (
    <div className="grid grid-cols-1 gap-[0.5rem] m-auto w-[90%] md:w-[60%]">
      <div className="text-center text-gray-900 text-[32px] font-bold leading-[38.40px]">
        Password
      </div>
      <div className="text-center text-neutral-500 text-lg font-normal leading-[28.80px]">
        Create your password
      </div>
      <form className="grid grid-cols-1 gap-[1.5rem]">
        <div className="w-full mx-auto flex flex-col items-start justify-start gap-[0.3rem]">
          <label
            htmlFor="password"
            className="text-slate-900 text-base font-bold leading-relaxed"
          >
            Create Password
          </label>
          <Input
            type="password"
            placeholder="This is a placeholder"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="w-full mx-auto flex flex-col items-start justify-start gap-[0.3rem]">
          <label
            htmlFor="ConfirmPassword"
            className="text-slate-900 text-base font-bold leading-relaxed"
          >
            Confirm Password
          </label>
          <Input
            type="password"
            placeholder="This is a placeholder"
            id="ConfirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <Button disabled={isLoading} className="!bg-[#010886]" type="primary" onClick={handleCreatePassword}>
          {isLoading ? "Creating..." : "Create Password"}
        </Button>
      </form>
    </div>
  );
};

export default CreatePassword;
