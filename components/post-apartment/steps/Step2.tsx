"use client";
import {
  RadioGroup,
  CustomRadio as Radio,
  CustomSelect as Select,
  AuthButton as Button,
  CustomInput,
} from "@/lib/AntDesignComponents";
import { useGetAllAreasQuery } from "@/redux/api/houseApi";
import { useAppDispatch } from "@/redux/hook";
import { SET_APARTMENT_FORM_ONE } from "@/redux/slice/apartmentSlice";
import { RadioChangeEvent, message } from "antd";
import { useEffect, useState } from "react";

interface Props {
  next: () => void;
}
const Step2 = ({ next }: Props) => {
  const options = [
    {
      value: "lagos",
      label: "Lagos",
    },
    {
      value: "abuja",
      label: "Abuja",
    },

  ];
  const dispatch = useAppDispatch()
  const [apartmentType, setApartmentType] = useState<string>();
  const [state, setState] = useState<string | null>();
  const [areasOptions, setAreasOptions] = useState([]);

  const [location, setLocation] = useState<string | null>();
  const [amount, setAmount] = useState<number>(0);
  const [slot, setSlot] = useState<number>(0);

  const handleStateSelect = (value: string) => {
    setState(value);
  };
  const handleLocationSelect = (value: string) => {
    setLocation(value);
  };
  const [path, setPath] = useState<string>();

  const { data: areaData, isSuccess: areaIsSuccess } = useGetAllAreasQuery({
    path
  }, { skip: !state })

  useEffect(() => {
    if (state) {
      setPath(`get_house_areas?count=30&state=${state}`)
    }
    if (areaIsSuccess) {
      setAreasOptions(areaData?.data)
      console.log(areasOptions)
    }
  }, [areaData?.data, areaIsSuccess, state])

  const areaId = location?.slice(-2)

  const handleStep1Submit = () => {
    if (!apartmentType || !location || !amount || !slot || !state) {
      message.error("All fields are required");
      return
    }
    const payload = {
      house_type: apartmentType,
      state: state,
      location: `${location}, ${state}`,
      price: amount,
      slots: slot,
      area_id: areaId
    }

    if (amount && slot && apartmentType && location && state) {
      dispatch(SET_APARTMENT_FORM_ONE(payload))
      next()
    }
  }


  return (
    <div className="grid grid-cols-1 gap-[0.5rem] w-[98%] mx-auto">
      <div className="flex flex-col items-start gap-[0.2rem] border-b border-[#D6DDEB]">
        <h4 className="text-[18px] font-[700] text-[#202430]">
          Basic Information
        </h4>
        <p className="text-[16px] font-[400] text-[#515B6F]">
          This information will be displayed publicly.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[40%_60%] items-center gap-[1rem] border-b border-[#D6DDEB] py-[0.5rem]">
        <div className="flex flex-col items-start self-start gap-[0.2rem]">
          <h4 className="text-[16px] font-[500] text-[#25324B]">
            Type of Apartment
          </h4>
          <p className="text-[16px] font-[400] text-[#515B6F]">
            You can select type of apartment
          </p>
        </div>
        <div className="flex items-center justify-start justify-self-start gap-[1rem] w-full md:w-[80%] mx-auto">
          <RadioGroup value={apartmentType} onChange={(e: RadioChangeEvent) => setApartmentType(e.target.value)}>
            <div className="flex flex-col gap-[0.3rem]">
              <Radio value={1}>
                <p className="text-[#515B6F] text-[16px] font-[400]">
                  Bungalow
                </p>
              </Radio>
              <Radio value={2}>
                <p className="text-[#515B6F] text-[16px] font-[400]">Duplex</p>
              </Radio>
              <Radio value={3}>
                <p className="text-[#515B6F] text-[16px] font-[400]">
                  Self-Contain
                </p>
              </Radio>
              <Radio value={4}>
                <p className="text-[#515B6F] text-[16px] font-[400]">
                  2 Bedroom Apartment
                </p>
              </Radio>
              <Radio value={5}>
                <p className="text-[#515B6F] text-[16px] font-[400]">
                  3 Bedroom Apartment
                </p>
              </Radio>
            </div>
          </RadioGroup>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[40%_60%] items-center gap-[1rem] border-b border-[#D6DDEB] py-[0.5rem]">
        <div className="flex flex-col items-start gap-[0.2rem]">
          <h4 className="text-[16px] font-[500] text-[#25324B]">Amount</h4>
          <p className="text-[16px] font-[400] text-[#515B6F]">
            Please specify the estimated Amount range for the Apartment *You can
            leave this blank
          </p>
        </div>
        <div className="flex justify-start w-full md:w-[80%] mx-auto">
          <CustomInput
            className="w-[70%]"
            value={amount}
            onChange={(e: any) => setAmount(e.target.value)}
            style={{
              width: "80%",
            }}
            prefix={<p>₦</p>}
            type="number"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[40%_60%] items-center gap-[1rem] border-b border-[#D6DDEB] py-[0.5rem]">
        <div className="flex flex-col items-start gap-[0.2rem]">
          <h4 className="text-[16px] font-[500] text-[#25324B]">
            Number of slot
          </h4>
          <p className="text-[16px] font-[400] text-[#515B6F]">
            List the number of people you want in an apartment
          </p>
        </div>
        <div className="flex items-center gap-[1rem] w-full md:w-[80%] mx-auto">
          <CustomInput type="number" min={0} value={slot} onChange={(e: any) => setSlot(e.target.value)} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[40%_60%] items-start gap-[0.5rem] py-[0.5rem]">
        <div className="flex flex-col items-start gap-[0.2rem]">
          <h4 className="text-[16px] font-[500] text-[#25324B]">State</h4>
          <p className="text-[16px] font-[400] text-[#515B6F]">
            You can select apartment state
          </p>
        </div>
        <div className="w-full md:w-[80%] mx-auto">
          <div className="w-full mx-auto flex flex-col items-start justify-start gap-[0.5rem]">
            <label
              htmlFor="status"
              className="text-[#0C1938] text-[16px] font-[700]"
            >
              Select Apartment State
            </label>
            <Select
              className="w-full"
              style={{
                width: "100%",
                height: "100%",
              }}
              id="status"
              value={state}
              onChange={handleStateSelect}
              options={options}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[40%_60%] items-start gap-[0.5rem] py-[0.5rem]">
        <div className="flex flex-col items-start gap-[0.2rem]">
          <h4 className="text-[16px] font-[500] text-[#25324B]">Location</h4>
          <p className="text-[16px] font-[400] text-[#515B6F]">
            You can select apartment location
          </p>
        </div>
        <div className="w-full md:w-[80%] mx-auto">
          <div className="w-full mx-auto flex flex-col items-start justify-start gap-[0.5rem]">
            <label
              htmlFor="status"
              className="text-[#0C1938] text-[16px] font-[700]"
            >
              Select Apartment Location
            </label>
            <Select
              className="w-full"
              style={{
                width: "100%",
                height: "100%",
              }}
              id="status"
              value={location}
              onChange={handleLocationSelect}
              options={areasOptions?.map((item: Record<string, any>) => ({
                value: `${item?.area} ${item?.id}`,
                label: item?.area,
              }))}
            />
          </div>
        </div>
      </div>
      <Button
        onClick={handleStep1Submit}
        className="w-fit md:w-[20%] mt-4 justify-self-end !bg-[#010886]"
        type="primary"
      >
        Next
      </Button>
    </div>
  );
};

export default Step2;
