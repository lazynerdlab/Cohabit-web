"use client";
import { useState, useMemo } from "react";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import {
  AuthButton as Button,
  CustomSteps as Steps,
} from "@/lib/AntDesignComponents";
import StepIcon from "@/assets/icons/StepIcon";
import DoneIcon from "@/assets/icons/DoneIcon";
import StartIcon from "@/assets/icons/StartIcon";
import PostModal from "./PostModal";

const PostApartment = () => {
  const [current, setCurrent] = useState<number>(0);
  const [open, setOpen] = useState(false);
  const steps = useMemo(
    () => [
      {
        title: (
          <div className="flex flex-col font-[400] text-[#2A2069] leading-[28.80px]">
            <p className="text-[16px]">Step 1/3</p>
            <p className="text-[14px]">Apartment Information</p>
          </div>
        ),
        content: <Step2 />,
        icon:
          current > 0 ? (
            <DoneIcon className="h-[56px]" />
          ) : (
            <StepIcon className="h-[56px]" />
          ),
      },
      {
        title: (
          <div className="flex flex-col font-[400] text-[#2A2069] leading-[28.80px]">
            <p className="text-[16px]">Step 2/3</p>
            <p className="text-[14px]">Apartment Description</p>
          </div>
        ),
        content: <Step3 />,
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
            <p className="text-[16px]">Step 3/3</p>
            <p className="text-[14px]">Benefit</p>
          </div>
        ),
        content: <Step4 />,
        icon:
          current === 2 ? (
            <StartIcon className="h-[56px]" />
          ) : (
            <StepIcon className="h-[56px]" />
          ),
      },
    ],
    [current]
  );
  return (
    <>
      <div className="w-[95%] mx-auto h-full grid grid-cols-1 gap-[0.5rem] py-[1.5rem]">
        <Steps current={current} items={steps} />
        <div className="w-full">{steps[current].content}</div>
        {current !== 2 ? (
          <Button
            onClick={() => {
              setCurrent((prev) => prev + 1);
            }}
            style={{ background: "#010886" }}
            className="w-[20%] justify-self-end"
            type="primary"
          >
            Next Step
          </Button>
        ) : (
          <Button
            onClick={() => {
              setOpen(true);
            }}
            style={{ background: "#010886" }}
            className="w-[20%] justify-self-end"
            type="primary"
          >
            Post
          </Button>
        )}
      </div>
      <PostModal open={open} setOpen={setOpen} />
    </>
  );
};

export default PostApartment;
