"use client";
import google from "@/assets/google.svg";
import Image from "next/image";
import {
  SyntheticEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import {
  CustomInput as Input,
  AuthButton as Button,
  CustomCheckBox as Checkbox,
} from "@/lib/AntDesignComponents";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSignupMutation } from "@/redux/api/authApi";
import { Select, message } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { Spinner } from "../spinner/Spinner";

const SignUp = () => {
  const { push } = useRouter();
  const pathname = usePathname();
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [gender, setGender] = useState<string>();
  const [location, setLocation] = useState<string>();
  const [checked, setChecked] = useState(false);
  const [signup, { isLoading, isSuccess, isError, error, data }] =
    useSignupMutation();

  const handleSubmit = useCallback(
    async (e: SyntheticEvent) => {
      e.preventDefault(); // Prevents the default form submission and page refresh
      if (!checked || !firstName || !lastName || !email || !gender || !location) {
        message.error("All fields are required");
        return;
      }

      try {
        const user = {
          firstname: firstName,
          lastname: lastName,
          email: email,
          gender: gender,
          location: location,
          user_type: "host",
        };

        await signup(user);
      } catch (error) {
        console.error("Login failed:", error);
      }
    },
    [checked, firstName, lastName, email, gender, location, signup]
  );

  useEffect(() => {
    if (isSuccess) {
      message.success("Login Successfully");
      setFirstName("");
      setLastName("");
      setEmail("");
      setGender("");
      setLocation("");
      sessionStorage.setItem("authToken", data?.data?.token);
      localStorage.setItem("previousLocation", pathname);
      push("/host")
    }
    if (isError) {
      const errorMesg = error as any;
      message.error(errorMesg?.data?.message);
    }
  }, [isSuccess, isError, error, push, data, pathname]);

  const handleGenderChange = (value: string) => {
    setGender(value)
  };
  const handleLocationChange = (value: string) => {
    setLocation(value)
  };
  return (
    <div className="w-[90%] md:w-[60%] mx-auto">
      <div className="grid grid-cols-1 gap-[0.8rem] w-full">
        <div className="text-center text-gray-900 text-[32px] font-bold leading-[38.40px]">
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
              id="first_name"
              value={firstName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFirstName(e.target.value);
              }}
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
              id="last_name"
              value={lastName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setLastName(e.target.value);
              }}
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
              id="email"
              type="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="w-full mx-auto flex flex-col items-start justify-start gap-[0.5rem]">
            <label
              htmlFor="email"
              className="text-[#0C1938] text-[16px] font-[700]"
            >
              Gender
            </label>
            <Select
              defaultValue=""
              size="large"
              value={gender}
              style={{ width: "100%", }}
              onChange={handleGenderChange}
              options={[
                { value: '', label: 'Select an option' },
                { value: "0", label: "Male" },
                { value: "1", label: "Female" },
                { value: "2", label: "Others" },

              ]}
            />
          </div>
          <div className="w-full mx-auto flex flex-col items-start justify-start gap-[0.5rem]">
            <label
              htmlFor="email"
              className="text-[#0C1938] text-[16px] font-[700]"
            >
              Location
            </label>
            <Select
              defaultValue=""
              size="large"
              value={location}
              style={{ width: "100%", }}
              onChange={handleLocationChange}
              options={[
                { value: '', label: 'Select an option' },
                { value: "lagos", label: "Lagos" },
                { value: "abuja", label: "Abuja" },

              ]}
            />
          </div>

          <div className="w-full mx-auto flex items-start justify-start gap-[1rem]">
            <Checkbox
              id="check"
              checked={checked}
              onChange={(e: CheckboxChangeEvent) => {
                setChecked(e.target.checked);
              }}
            />
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
          {isLoading ? (
            <Spinner />
          ) : (
            <Button
              className="!bg-[#010886]"
              type="primary"
              onClick={(e: any) => {
                handleSubmit(e);
              }}
            >
              Get Started
            </Button>
          )}
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
