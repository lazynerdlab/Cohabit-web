"use client";
import google from "@/assets/google.svg";
import Image from "next/image";
import {
  CustomInput as Input,
  AuthButton as Button,
  CustomPasswordInput as PasswordInput,
  CustomCheckBox as Checkbox,
} from "@/lib/AntDesignComponents";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const { push } = useRouter();
  return (
    <div className="w-[55%] grid grid-cols-1 gap-[1rem] m-auto">
      <div className="grid grid-cols-1 gap-[0.8rem] w-full">
        <div className="w-[408px] text-center text-gray-900 text-[32px] font-bold leading-[38.40px]">
          Welcome Back, Dude
        </div>
        <div className="w-full mx-auto">
          <button className="mx-auto flex items-center gap-[1rem] justify-center border-solid border-[1px] border-[#D4EBEBE] rounded-[5px] px-[5rem] py-[8px] w-full">
            <Image src={google} alt="" />
            <span>
              <p className="text-colorPrimary font-[700] text-[16]">
                Login with Google
              </p>
            </span>
          </button>
        </div>
        <div className="w-full mx-auto grid grid-cols-[25%_50%_25%] items-center justify-center content-center">
          <span className="h-[1px] bg-[#B8c9c9] w-full"></span>
          <p className="text-center">Or login with email</p>
          <span className="h-[1px] bg-[#B8c9c9] w-full"></span>
        </div>
        <form className="grid gird-cols-1 gap-[1rem]">
          <div className="w-full mx-auto flex flex-col items-start justify-start gap-[0.5rem]">
            <label
              htmlFor="email"
              className="text-[#0C1938] text-[16px] font-[700]"
            >
              Email Address
            </label>
            <Input
              className=""
              placeholder="This is a placeholder"
              id="email"
              type="email"
            />
          </div>
          <div className="w-full mx-auto flex flex-col items-start justify-start gap-[0.5rem]">
            <label
              htmlFor="password"
              className="text-[#0C1938] text-[16px] font-[700]"
            >
              Password
            </label>
            <PasswordInput
              placeholder="This is a placeholder"
              id="password"
              type="password"
            />
          </div>
          <div className="w-full mx-auto flex items-center justify-between">
            <Link href="forget-password">Forgot Password</Link>
            <div className="mxauto flex items-end justify-start gap-[0.3rem]">
              <Checkbox className="text-[20px]" id="check" />
              <label
                htmlFor="check"
                className="text-colorPrimary text-[14px] font-[400] pr-[1rem]"
              >
                Remember me
              </label>
            </div>
          </div>
          <Button
            style={{ backgroundColor: "#010886" }}
            onClick={() => push("/on-board")}
            type="primary"
          >
            Login
          </Button>
        </form>
        <div className="flex items-center justify-center gap-[0.5rem]">
          <h3 className="font-[400] text-[16px] text-[#616A6A]">
            Don’t have an account?
          </h3>
          <Link
            className="text-[#1E5156] text-[16px] font-[700]"
            href={"/sign-up"}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
