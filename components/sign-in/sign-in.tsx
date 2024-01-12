/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import google from "@/assets/google.svg";
import Logo from "@/assets/logo.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  CustomInput as Input,
  AuthButton as Button,
  CustomPasswordInput as PasswordInput,
  CustomCheckBox as Checkbox,
} from "@/lib/AntDesignComponents";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLoginMutation } from "@/redux/api/authApi";
import { usePathname } from "next/navigation";
import { message } from "antd";
import { Spinner } from "../spinner/Spinner";
import { useAppDispatch } from "@/redux/hook";
import { CLEAR_USER, SET_USER } from "@/redux/slice/userSlice";
import { CLEAR_HOST, CLEAR_PROPERTY } from "@/redux/slice/propertySlice";
import { CLEAR_APARTMENT_FORM } from "@/redux/slice/apartmentSlice";

const SignIn = () => {
  const { push } = useRouter();
  const pathname = usePathname();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const dispatch = useAppDispatch();
  const [login, { isLoading, isSuccess, isError, error, data }] =
    useLoginMutation();

  useEffect(() => {
    sessionStorage.clear();
    dispatch(CLEAR_USER());
    dispatch(CLEAR_PROPERTY());
    dispatch(CLEAR_HOST());
    dispatch(CLEAR_APARTMENT_FORM());
  }, []);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevents the default form submission and page refresh
    if (!email || !password) {
      message.error("All fields are required");
      return;
    }

    try {
      await login({ email, password });
    } catch (error) {
      // Handle login error here
      console.error("Login failed:", error);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      message.success("Login Successfully");
      setEmail("");
      setPassword("");
      dispatch(SET_USER(data));

      sessionStorage.setItem("authToken", data?.data?.token);
      sessionStorage.setItem("myId", data?.data?.user?.id);
      localStorage.setItem("previousLocation", pathname);
      if (data?.data?.user?.has_onboarded === false) {
        push("/on-board");
      } else {
        push("/dashboard");
      }

      if (data?.data?.user?.user_type === "host") {
        push("/host");
      }
    }
    if (isError) {
      const errorMesg = error as any;
      message.error(errorMesg?.data?.message);
    }
  }, [isSuccess, isError, error, push, data?.data?.token, pathname, data]);

  return (
    <div className="w-[90%] md:w-[55%] grid grid-cols-1 gap-[1rem] m-auto">
      <div className="grid grid-cols-1 gap-[0.8rem] w-full">
        <Image
          className="justify-self-center h-full md:hidden"
          alt=""
          src={Logo}
        />
        <div className="text-center text-gray-900 text-[32px] font-bold leading-[38.40px]">
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
        <form onSubmit={handleSubmit} className="grid gird-cols-1 gap-[1rem]">
          <div className="w-full mx-auto flex flex-col items-start justify-start gap-[0.5rem]">
            <label
              htmlFor="email"
              className="text-[#0C1938] text-[16px] font-[700]"
            >
              Email Address
            </label>
            <Input
              className=""
              placeholder="Email"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
              }}
              id="email"
              type="email"
              value={email}
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
              placeholder="Password"
              id="password"
              type="password"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(e.target.value.replace(/\s/g, ""));
              }}
              value={password}
            />
          </div>
          <div className="w-full mx-auto flex items-center justify-between">
            <Link href="forget-password">Forgot Password</Link>
            <div className="mxauto flex items-center justify-start gap-[0.3rem]">
              <Checkbox className="text-[20px]" id="check" />
              <label
                htmlFor="check"
                className="text-colorPrimary text-[14px] font-[400] pr-[1rem]"
              >
                Remember me
              </label>
            </div>
          </div>
          <div className="flex items-center">
            {/* {isLoading ? (
              <Spinner />
            ) : ( */}
            <Button
              className="!bg-[#010886] !w-full"
              type="primary"
              htmlType="submit"
              loading={isLoading}
            >
              Login
            </Button>
            {/* )} */}
          </div>
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
