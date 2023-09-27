"use client";
import { useState, useMemo } from "react";
import Step1 from "./steps/Step1";
import Step3 from "./steps/Step3";
import {
  AuthButton as Button,
  CustomSteps as Steps,
} from "@/lib/AntDesignComponents";
import { useRouter } from "next/navigation";
import StepIcon from "@/assets/icons/StepIcon";
import DoneIcon from "@/assets/icons/DoneIcon";
import StartIcon from "@/assets/icons/StartIcon";

const UserOnboarding = () => {

  const { push } = useRouter()
  const [current, setCurrent] = useState<number>(1);

  const [formData, setFormData] = useState({
    personalIntroduction: "",
    categories: [],
    language: "",
    pets: "",
    employment: "",
  });

  const handleRadioButtonChange = (fieldName: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handlePersonalIntroductionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      personalIntroduction: e.target.value,
    }));
  };
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const handleSubmit = () => {
    console.log("submit");
    push("/welcome")
  };

  const steps = useMemo(
    () => [
      {
        title: <p className="text-[16px] text-[#2A2069]">Account</p>,
        content: "",
        icon: <DoneIcon className="h-[56px]" />,
        description: <p className="text-[14px] text-[#2A2069]">Step 1/3</p>,
      },
      {
        title: (
          <div className="flex flex-col font-[400] text-[#2A2069] leading-[28.80px]">
            <p className="text-[16px]">Preference</p>
            <p className="text-[14px]">Step 2/3</p>
          </div>
        ),
        content: <Step1 next={next} />,
        icon:
          current > 1 ? (
            <DoneIcon className="h-[56px]" />
          ) : (
            <StepIcon className="h-[56px]" />
          ),
      },
      {
        title: (
          <div className="flex flex-col font-[400] text-[#2A2069] leading-[28.80px]">
            <p className="text-[16px]">Lifestyle</p>
            <p className="text-[14px]">Step 3/3</p>
          </div>
        ),
        content: <Step3 prev={prev} submit={handleSubmit} />,
        icon:
          current > 2 ? (
            <DoneIcon className="h-[56px]" />
          ) : (
            <StepIcon className="h-[56px]" />
          ),
      },
      // {
      //   title: (
      //     <div className="flex flex-col font-[400] text-[#2A2069] leading-[28.80px]">
      //       <p className="text-[16px]">Start</p>
      //       <p className="text-[14px]">Step 4/4</p>
      //     </div>
      //   ),
      //   content: <Step4 />,
      //   icon:
      //     current === 3 ? (
      //       <StartIcon className="h-[56px]" />
      //     ) : (
      //       <StepIcon className="h-[56px]" />
      //     ),
      // },
    ],
    [current]
  );
  return (
    <div className="flex flex-col justify-center items-center bg-opacity-[0.4] gap-[1rem] p-[1rem]">
      <div className="flex flex-col gap-[1.5rem]">

        <Steps size="small" current={current} items={steps} />

        <div className="w-full">{steps[current].content}</div>
      </div>
      <div className="flex justify-between gap-[1rem] items-center mt-4">

      </div>
    </div>
  );
};

export default UserOnboarding;
