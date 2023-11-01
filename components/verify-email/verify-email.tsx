"use client";
import {
  CustomInput as Input,
  AuthButton as Button,
} from "@/lib/AntDesignComponents";
import { useResendOtpMutation, useVerifyTokenMutation } from "@/redux/api/hostApi";
import { message } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const VerifyEmailForm = () => {
  const [token, setToken] = useState<string>()
  const [verifyToken, { isLoading, isSuccess, isError, error, data }] = useVerifyTokenMutation();
  const { push } = useRouter()
  const handleVerifyCode = async () => {
    await verifyToken({ otp: token })
  }
  const [resendOtp, { isSuccess: resendSuccess, isError: resendError, error: resendErrorMesg }] = useResendOtpMutation()

  const resendCode = async () => {
    await resendOtp({})
  }
  useEffect(() => {
    if (isSuccess) {
      message.success("Email Verified Successfully")
      push('/create-password')
    }

    if (isError) {
      const errMesg = error as any
      message.error(errMesg?.data?.message)
    }
  }, [isSuccess, isError, push, error,])

  useEffect(() => {
    if (resendSuccess) {
      message.success("Code Sent Successfully")
    }
    if (resendError) {
      const errMesg = resendErrorMesg as any
      message.error(errMesg?.data?.message)
    }
  }, [resendSuccess, resendError, resendErrorMesg])
  return (
    <div className="grid grid-cols-1 gap-[1rem] m-auto items-center w-[90%] md:w-[60%]">
      <div className="text-center text-gray-900 text-[32px] font-bold leading-[38.40px]">
        Verify your Email
      </div>
      <div className="text-center text-neutral-500 text-lg font-normal leading-[28.80px]">
        Please fill the code to confirm your email
      </div>
      <form className="grid grid-cols-1 gap-[1.5rem]">
        <div className="w-full mx-auto flex flex-col items-start justify-start gap-[0.3rem]">
          <label
            htmlFor="code"
            className="text-slate-900 text-base font-bold leading-relaxed"
          >
            Enter verification Code
          </label>
          <Input
            value={token}
            onChange={(e) => setToken(e.target.value)}
            id="code"
          />
        </div>
        <Button disabled={isLoading} onClick={handleVerifyCode} className="!bg-[#010886]" type="primary">
          {isLoading ? "Verifying..." : "Verify Code"}
        </Button>
      </form>
      <div className="flex justify-start items-center gap-[0.5rem]">
        <h3 className="text-neutral-500 text-base font-normal leading-relaxed">
          Didn’t get the code?
        </h3>
        <div onClick={resendCode} className="text-center cursor-pointer text-colorPrimary text-base font-semibold leading-normal">
          Click Resend
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailForm;
