/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useState, useMemo } from "react";
import Step1 from "./steps/Step1";

import PreviewStep from "./steps/PreviewStep";
import {
  CustomSteps as Steps,
} from "@/lib/AntDesignComponents";

import StepIcon from "@/assets/icons/StepIcon";
import DoneIcon from "@/assets/icons/DoneIcon";

const UserOnboarding = () => {

  const [current, setCurrent] = useState<number>(1);
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

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
            <p className="text-[16px]">About You</p>
            <p className="text-[14px]">Step 3/3</p>
          </div>
        ),
        content: <PreviewStep prev={prev} />,
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
      //       <p className="text-[16px]">Lifestyle</p>
      //       <p className="text-[14px]">Step 4/4</p>
      //     </div>
      //   ),
      //   content: <Step3 prev={prev} submit={handleSubmit} />,
      //   icon:
      //     current > 3 ? (
      //       <DoneIcon className="h-[56px]" />
      //     ) : (
      //       <StepIcon className="h-[56px]" />
      //     ),
      // },
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
    </div>
  );
};

export default UserOnboarding;
