"use client";
import { Spinner } from "@/components/spinner/Spinner";
import { AuthButton, RadioButton, RadioGroup } from "@/lib/AntDesignComponents";
import { useGetHouseBudgetQuery, useGetHouseTypeQuery } from "@/redux/api/houseApi";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { SET_FORM_ONE } from "@/redux/slice/onboardingSlice";
import { MultiSelectTags, Tag } from "@/shared/UIs/Tags";
import { IBudget } from "@/shared/models";
import { RadioChangeEvent } from "antd";
import { useEffect, useState } from "react";
interface Props {
  next: () => void;
}

const locationOptions = [
  { value: "lagos", label: "Lagos" },
  { value: "abuja", label: "Abuja" },

];
const Gender = [
  { value: "0", label: "Male" },
  { value: "1", label: "Female" },
  { value: "2", label: "Others" },
];

const Step1 = ({ next }: Props) => {
  const dispatch = useAppDispatch()

  const { data, isLoading, isSuccess, isError } = useGetHouseTypeQuery({})
  const { data: budgetData, isLoading: isLoadingBudget, isSuccess: isSuccessBudget, isError: isErrorBudget } = useGetHouseBudgetQuery({})
  const [categories, setCategories] = useState<Tag[]>([]);

  const [allCategories, setAllCategories] = useState<Tag[]>([]);
  const [allBudget, setAllBudget] = useState<IBudget[]>([]);
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("");
  const [budget, setBudget] = useState("");

  useEffect(() => {
    if (isSuccess) {
      setAllCategories(data?.data)
    }
    if (isSuccessBudget) {
      setAllBudget(budgetData?.data)
    }
  }, [isSuccess, data?.data, isSuccessBudget, budgetData?.data])

  const handleNext = () => {
    const payload = {
      house_type: categories?.map((item: Tag) => (item.id)),
      location: location,
      gender: gender,
      budget: budget
    }
    dispatch(SET_FORM_ONE(payload));
    next()
  }
  return (
    <div className="flex flex-col gap-[1.5rem] p-3 md:min-w-[800px] lg:min-w-[1200px]">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-[0.5rem]">
          <h3 className="text-center text-zinc-900 text-2xl font-bold leading-[28.80px]">
            Enter your preference
          </h3>
          <p className="text-neutral-500 text-base font-medium leading-relaxed">
            Please pick your choice
          </p>
        </div>
        {/* <div className="rounded-[30px] bg-[#F47D5B]/[15%] bg-opcity-20 p-[11px] py[15px] justify-center items-center">
          <span className="text-[#7F4433] font-[700] text-[18px] text-center">
            Step 2/3
          </span>
        </div> */}
      </div>
      <div className="bg-[#E7F6FD] bg-opacity-[0.4] p-3 flex flex-col gap-3 ">
        <div className="flex flex-col gap-2 ">
          <h4 className="text-zinc-900 text-xl font-medium leading-normal">
            Select your categories
          </h4>

          {
            isLoading ? <Spinner /> : <div className="flex flex-wrap gap-3 text-[#666161]">
              <MultiSelectTags options={allCategories} onSelectTag={setCategories} selectedTags={categories} />
            </div>
          }

        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-zinc-900 text-xl font-medium leading-normal">
            Select your budget
          </h4>
          {
            isLoadingBudget ? <Spinner /> : <RadioGroup optionType="button" value={budget} onChange={(e: RadioChangeEvent) => setBudget(e.target.value)}>
              <div className="flex flex-wrap gap-3">
                {allBudget.map((e, i) => (
                  <div className="font-medium" key={i}>
                    <RadioButton value={e.id} key={e.id}>
                      {e.text}
                    </RadioButton>
                  </div>
                ))}
              </div>
            </RadioGroup>
          }
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-zinc-900 text-xl font-medium leading-normal">
            Select your Location
          </h4>
          <RadioGroup optionType="button" value={location} onChange={(e: RadioChangeEvent) => setLocation(e.target.value)}>
            <div className="flex flex-wrap gap-3">
              {locationOptions.map((e, i) => (
                <div className="" key={i}>
                  <RadioButton value={e.value} key={i}>
                    {e.label}
                  </RadioButton>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-zinc-900 text-xl font-medium leading-normal">
            Select your Gender
          </h4>


          <RadioGroup optionType="button" value={gender} onChange={(e: RadioChangeEvent) => setGender(e.target.value)}>
            <div className="flex flex-wrap gap-3">
              {Gender.map((e, i) => (
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
      <AuthButton
        onClick={handleNext}
        style={{ background: "#010886" }}
        className="w-[200px] flex justify-start mt-4"
        type="primary"
      >
        Next Step
      </AuthButton>
    </div>
  );
};

export default Step1;
