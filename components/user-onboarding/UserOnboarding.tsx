"use client";
import { useState, useMemo } from "react";
import Step1 from "./steps/Step1";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import {
  AuthButton as Button,
  CustomSteps as Steps,
} from "@/lib/AntDesignComponents";
import StepIcon from "@/assets/icons/StepIcon";
import DoneIcon from "@/assets/icons/DoneIcon";
import StartIcon from "@/assets/icons/StartIcon";

const UserOnboarding = () => {
  const [current, setCurrent] = useState<number>(1);
  const steps = useMemo(
    () => [
      {
        title: <p className="text-[16px] text-[#2A2069]">Account</p>,
        content: "",
        icon: <DoneIcon className="h-[56px]" />,
        description: <p className="text-[14px] text-[#2A2069]">Step 1/4</p>,
      },
      {
        title: (
          <div className="flex flex-col font-[400] text-[#2A2069] leading-[28.80px]">
            <p className="text-[16px]">Preference</p>
            <p className="text-[14px]">Step 2/4</p>
          </div>
        ),
        content: <Step1 />,
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
            <p className="text-[14px]">Step 3/4</p>
          </div>
        ),
        content: <Step3 />,
        icon:
          current > 2 ? (
            <DoneIcon className="h-[56px]" />
          ) : (
            <StepIcon className="h-[56px]" />
          ),
      },
      {
        title: (
          <div className="flex flex-col font-[400] text-[#2A2069] leading-[28.80px]">
            <p className="text-[16px]">Start</p>
            <p className="text-[14px]">Step 4/4</p>
          </div>
        ),
        content: <Step4 />,
        icon:
          current === 3 ? (
            <StartIcon className="h-[56px]" />
          ) : (
            <StepIcon className="h-[56px]" />
          ),
      },
    ],
    [current]
  );
  return (
    <div className="w-[95%] mx-auto h-full grid grid-cols-1 gap-[0.5rem] py-[1.5rem]">
      <Steps current={current} items={steps} />
      <div className="w-full">{steps[current].content}</div>
      {current !== 3 && (
        <Button
          onClick={() => {
            setCurrent((prev) => prev + 1);
          }}
          className="w-[20%] justify-self-end"
          type="primary"
        >
          Next Step
        </Button>
      )}
    </div>
  );
};

export default UserOnboarding;
