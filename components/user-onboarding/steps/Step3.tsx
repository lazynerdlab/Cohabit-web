"use client";
import { AuthButton, RadioButton, RadioGroup } from "@/lib/AntDesignComponents";
import { useEffect, useState } from "react";
import { CustomTextArea as TextArea } from "@/lib/AntDesignComponents";
import { useGetPersonalityTraitsQuery } from "@/redux/api/houseApi";
import { MultiSelectTags, Tag } from "@/shared/UIs/Tags";
import { Spinner } from "@/components/spinner/Spinner";
import { message } from "antd";

interface Props {
  submit: () => void;
  prev: () => void;
}
const Step3 = ({ submit, prev }: Props) => {
  const { data, isLoading, isSuccess, isError } = useGetPersonalityTraitsQuery({})

  const [allTraits, setAllTraits] = useState<Tag[]>([]);
  const [traits, setTraits] = useState<Tag[]>([]);
  useEffect(() => {
    if (isSuccess) {
      setAllTraits(data?.data)
    }
    if (isError) {
      message.error("Something went wrong")
    }
  }, [isSuccess, data?.data, isError])

  const language = [
    { value: "english", label: "English" },
    { value: "french", label: "French" },
    { value: "yoruba", label: "Yoruba" },
    { value: "others", label: "Others" },
  ];
  const pets = [
    { value: "dog", label: "Dog" },
    { value: "cat", label: "Cat" },
    { value: "haveDogAndCat", label: "Have dog and cat" },
    { value: "noDogAndCat", label: "No dog and cat" },
  ];
  const employmentSituation = [
    { value: "self-employed", label: "Self-employed" },
    { value: "employed", label: "Employed" },
    { value: "not_employed", label: "Not employed" },
  ];

  return (
    <div className="flex flex-col gap-[1.5rem] p-3 md:min-w-[800px] lg:min-w-[1200px]">
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
            Step 3/3
          </span>
        </div>
      </div>
      <div className="bg-[#E7F6FD] bg-opacity-[0.4] flex flex-col gap-[1rem] p-3 ">
        <div className="flex flex-col gap-[1rem]">
          <label
            htmlFor="text"
            className="text-zinc-900 text-xl font-medium leading-normal"
          >
            Personal Introduction
          </label>
          <TextArea className="w-[100%]" rows={4} id={"text"} style={{ resize: 'none' }} />
        </div>
        <div className="flex flex-col gap-[1rem]">
          <h4 className="text-zinc-900 text-xl font-medium leading-normal">
            Select your personality traits
          </h4>
          <div className="flex flex-wrap gap-[1rem] items-center">
            {
              isLoading ? <Spinner /> : <div className="flex flex-wrap gap-3 text-[#666161]">
                <MultiSelectTags options={allTraits} onSelectTag={setTraits} selectedTags={traits} />
              </div>
            }

          </div>
        </div>
        <div className="flex flex-col gap-[1rem] item-start">
          <h4 className="text-zinc-900 text-xl font-medium leading-normal">
            Select your language
          </h4>
          <RadioGroup optionType="button">
            <div className="flex gap-[1rem]">
              {language.map((e, i) => (
                <div className="" key={i}>
                  <RadioButton value={e.value} key={i}>
                    {e.label}
                  </RadioButton>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>
        <div className="flex flex-col gap-[1rem] item-start">
          <h4 className="text-zinc-900 text-xl font-medium leading-normal">
            Pets
          </h4>
          <RadioGroup optionType="button">
            <div className="flex gap-[1rem]">
              {pets.map((e, i) => (
                <div className="" key={i}>
                  <RadioButton value={e.value} key={i}>
                    {e.label}
                  </RadioButton>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>
        <div className="flex flex-col gap-[1rem] item-start">
          <h4 className="text-zinc-900 text-xl font-medium leading-normal">
            Employment Situation
          </h4>
          <RadioGroup optionType="button">
            <div className="flex gap-[1rem]">
              {employmentSituation.map((e, i) => (
                <div className="" key={i}>
                  <RadioButton value={e.value} key={i}>
                    {e.label}
                  </RadioButton>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <AuthButton
          onClick={prev}
          style={{ background: "#010886" }}
          className="w-[200px] flex justify-start mt-4"
          type="primary"
        >
          Previous Step
        </AuthButton>
        <AuthButton
          onClick={submit}
          style={{ background: "#010886" }}
          className="w-[200px] flex justify-start mt-4"
          type="primary"
        >
          Done
        </AuthButton>
      </div>
    </div>
  );
};

export default Step3;
