import google from "@/assets/google.svg";
import Image from "next/image";
import {
  CustomInput as Input,
  AuthButton as Button,
  CustomCheckBox as Checkbox,
} from "@/lib/AntDesignComponents";
import Link from "next/link";

const SignUp = () => {
  return (
    <div className="w-[60%] mx-auto">
      <div className="grid grid-cols-1 gap-[0.8rem] w-full">
        <div className="w-[408px] text-center text-gray-900 text-[32px] font-bold leading-[38.40px]">
          Get More Opportunites
        </div>
        <div className="w-full mx-auto">
          <button className="mx-auto flex items-center gap-[1rem] justify-center border-solid border-[1px] border-[#D4EBEBE] rounded-[5px] px-[5rem] py-[8px] w-full">
            <Image src={google} alt="" />
            <span>
              <p className="text-colorPrimary font-[700] text-[16]">
                Sign Up with Google
              </p>
            </span>
          </button>
        </div>
        <div className="w-full mx-auto grid grid-cols-[25%_50%_25%] items-center justify-center content-center">
          <span className="h-[1px] bg-[#B8c9c9] w-full"></span>
          <p className="text-center">Or sign up with email</p>
          <span className="h-[1px] bg-[#B8c9c9] w-full"></span>
        </div>
        <form className="grid gird-cols-1 gap-[0.5rem]">
          <div className="w-full mx-auto flex flex-col items-start justify-start gap-[0.3rem]">
            <label
              htmlFor="first_name"
              className="text-[#0C1938] text-[16px] font-[700]"
            >
              First Name
            </label>
            <Input
              className=""
              placeholder="This is a placeholder"
              id="first_name"
            />
          </div>
          <div className="w-full mx-auto flex flex-col items-start justify-start gap-[0.5rem]">
            <label
              htmlFor="last_name"
              className="text-[#0C1938] text-[16px] font-[700]"
            >
              Last Name
            </label>
            <Input
              className=""
              placeholder="This is a placeholder"
              id="last_name"
            />
          </div>
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
          <div className="w-full mx-auto flex items-start justify-start gap-[1rem]">
            <Checkbox id="check" />
            <label
              htmlFor="check"
              className="text-colorPrimary text-[14px] font-[400] pr-[1rem]"
            >
              By clicking 'Continue', you acknowledge that you have read and
              accept the{" "}
              <Link className="text-[#7F4433]" href={"#"}>
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link className="text-[#7F4433]" href={"#"}>
                Privacy Policy
              </Link>
              .
            </label>
          </div>
          <Button type="primary">Get Started</Button>
        </form>
        <div className="flex items-center justify-center gap-[0.5rem]">
          <h3 className="font-[400] text-[16px] text-[#616A6A]">
            Already have an account?
          </h3>
          <Link
            className="text-[#1E5156] text-[16px] font-[700]"
            href={"/sign-in"}
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
