"use client";
import { RadioButton, RadioGroup } from "@/lib/AntDesignComponents";
import { useState } from "react";
import { CustomTextArea as TextArea } from "@/lib/AntDesignComponents";

const Step3 = () => {
  const [categories, setCategories] = useState([
    { label: "One bedroom", value: "One bedroom", checked: false },
    { label: "One bedroom", value: "One bedroom", checked: false },
    { label: "One bedroom", value: "One bedroom", checked: false },
    { label: "One bedroom", value: "One bedroom", checked: false },
    { label: "One bedroom", value: "One bedroom", checked: false },
    { label: "One bedroom", value: "One bedroom", checked: false },
    { label: "One bedroom", value: "One bedroom", checked: false },
    { label: "One bedroom", value: "One bedroom", checked: false },
    { label: "One bedroom", value: "One bedroom", checked: false },
    { label: "One bedroom", value: "One bedroom", checked: false },
  ]);
  const budget = [
    { value: "Below 100k", label: "Below 100k" },
    { value: "100k-500k", label: "100k-500k" },
    { value: "600k-800k", label: "600k-800k" },
    { value: "900k-Above", label: "900k-Above" },
  ];
  const location = [
    { value: "Lagos", label: "Lagos" },
    { value: "Abuja", label: "Abuja" },
    { value: "Ogun", label: "Ogun" },
  ];
  const Gender = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Others", label: "Others" },
  ];

  return (
    <div className="grid grid-cols-1 gap-[1rem] w-full">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-[0.5rem]">
          <h3 className="text-zinc-900 text-2xl font-bold leading-[28.80px]">
            Enter your lifestyle
          </h3>
          <p className="text-neutral-500 text-base font-medium leading-relaxed">
            Please pick your lifestyle choice
          </p>
        </div>
        <div className="rounded-[30px] bg-[#F47D5B]/[15%] bg-opcity-20 p-[11px] py[15px] justify-center items-center">
          <span className="text-[#7F4433] font-[700] text-[18px] text-center">
            Step 3/4
          </span>
        </div>
      </div>
      <div className="bg-[#E7F6FD] bg-opacity-[0.4] grid grid-cols-1 w[100vw] gap-[1rem] py-[1rem]">
        <div className="w-[98%] mx-auto">
          <label
            htmlFor="text"
            className="text-zinc-900 text-xl font-medium leading-normal"
          >
            Personal Introduction
          </label>
          <TextArea className="w-[100%]" rows={4} id={"text"} />
        </div>
        <div className="w-[98%] mx-auto">
          <h4 className="text-zinc-900 text-xl font-medium leading-normal">
            Select your categories
          </h4>
          <div className="grid grid-cols-6 justify-between items-center gap-[1rem]">
            {categories.map((e, i) => (
              <div className="" key={i}>
                <RadioButton
                  key={i}
                  checked={e.checked}
                  onClick={() => {
                    setCategories((prev) => {
                      const res = [...prev];
                      res[i] = { ...prev[i], checked: !e.checked };
                      return [...res];
                    });
                  }}
                >
                  {e.label}
                </RadioButton>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[98%] mx-auto">
          <h4 className="text-zinc-900 text-xl font-medium leading-normal">
            Select your language
          </h4>
          <RadioGroup optionType="button">
            <div className="grid grid-cols-7 justify-between items-center gap-[1rem]">
              {budget.map((e, i) => (
                <div className="" key={i}>
                  <RadioButton value={e.value} key={i}>
                    {e.label}
                  </RadioButton>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>
        <div className="w-[98%] mx-auto">
          <h4 className="text-zinc-900 text-xl font-medium leading-normal">
            Pets
          </h4>
          <RadioGroup optionType="button">
            <div className="grid grid-cols-7 justify-between items-center gap-[1rem]">
              {Gender.map((e, i) => (
                <div key={i}>
                  <RadioButton value={e.value} key={i}>
                    {e.label}
                  </RadioButton>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>
        <div className="w-[98%] mx-auto">
          <h4 className="text-zinc-900 text-xl font-medium leading-normal">
            Employment Situation
          </h4>
          <RadioGroup optionType="button">
            <div className="grid grid-cols-7 justify-between items-center gap-[1rem]">
              {Gender.map((e, i) => (
                <div key={i}>
                  <RadioButton value={e.value} key={i}>
                    {e.label}
                  </RadioButton>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};

export default Step3;
