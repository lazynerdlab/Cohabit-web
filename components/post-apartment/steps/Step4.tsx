"use client";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import Home from "@/assets/property.svg";
import { useRouter } from "next/navigation";
import {
  RadioGroup,
  CustomRadio as Radio,
  CustomInputNumber as InputNumber,
  CustomSelect as Select,
  CustomInput,
  AuthButton,
} from "@/lib/AntDesignComponents";
import { useAppSelector } from "@/redux/hook";
import { Image, message } from "antd";
import { usePostApartmentMutation } from "@/redux/api/hostApi";
import { useEffect } from "react";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
interface IProps {
  prev: () => void
}

const Step4 = ({ prev }: IProps) => {
  const { push } = useRouter();

  const { step1, step2 } = useAppSelector((state) => state.apartmentData);
  const [postApartment, { isLoading, isSuccess, isError, error }] = usePostApartmentMutation()

  const handlePostApartment = async () => {
    await postApartment({
      ...step1, ...step2
    })
  }

  useEffect(() => {
    if (isSuccess) {
      message.success("Apartment Created Successfully")
      push("/host")
    }
    if (isError) {
      const errMesg = error as any
      message.error(errMesg?.data?.message)
    }
  }, [error, isError, isSuccess, push])
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 gap-[0.5rem] w-[98%] mx-auto">
        <div className="flex flex-col items-start gap-[0.2rem] border-b border-[#D6DDEB]">
          <h4 className="text-[18px] font-[700] text-[#202430]">Details</h4>
          <p className="text-[16px] font-[400] text-[#515B6F]">
            Add the description of the apartment, pictures, and features.
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
          <div className="flex items-center justify-start gap-[1rem] w-full md:w-[80%] mx-auto">
            <RadioGroup value={step1?.house_type} disabled>
              <div className="flex flex-col gap-[0.3rem]">
                <Radio value={1}>
                  <p className="text-[#515B6F] text-[16px] font-[400]">
                    Bungalow
                  </p>
                </Radio>
                <Radio value={2}>
                  <p className="text-[#515B6F] text-[16px] font-[400]">
                    Duplex
                  </p>
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
              Please specify the estimated Amount range for the Apartment *You
              can leave this blank
            </p>
          </div>
          <div className="flex justify-start w-full md:w-[80%] mx-auto">
            <CustomInput
              className="w-[70%]"
              value={step1?.price}
              style={{
                width: "80%",
              }}
              disabled
              prefix={<p>N</p>}
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
            <CustomInput value={step1?.slots} disabled />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] items-start gap-[0.5rem] border-b border-[#D6DDEB] py-[0.5rem]">
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
                value={step1?.state}
                disabled
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-[0.5rem] w-[98%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] items-center gap-[1rem] border-b border-[#D6DDEB] py-[0.5rem]">
          <div className="flex flex-col items-start gap-[0.2rem]">
            <h4 className="text-[16px] font-[500] text-[#25324B]">
              Upload the pictures of the apartment
            </h4>
            <p className="text-[16px] font-[400] text-[#515B6F]">
              This image will be shown publicly as your profile picture, it will
              help recruiters recognize you!
            </p>
          </div>
          <div className="flex flex-col items-stretch gap-[1rem] w-full md:w-[80%] mx-auto">
            <span className="text-[#202430] text-[16px] font-[500]">
              Upload pictures (Png, Jpeg). not less than 500mb
            </span>
            <Image.PreviewGroup
              preview={{
                // onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
              }}
              items={step2?.images}
            >
              <Image width={200} height={150} className="rounded-[4px] object-cover" src={step2?.images[0]} alt="apartment images" />
            </Image.PreviewGroup>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] items-start gap-[0.5rem] border-b border-[#D6DDEB] py-[0.5rem]">
          <div className="flex flex-col items-start gap-[0.2rem]">
            <h4 className="text-[16px] font-[500] text-[#25324B]">
              Apartment Description
            </h4>
            <p className="text-[16px] font-[400] text-[#515B6F]">
              Full details about the apartment
            </p>
          </div>
          <div className="w-full">
            <ReactQuill
              className="w-full"
              theme="snow"
              value={
                step2?.description
              }
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] items-start gap-[0.5rem] border-b border-[#D6DDEB] py-[0.5rem]">
          <div className="flex flex-col items-start gap-[0.2rem]">
            <h4 className="text-[16px] font-[500] text-[#25324B]">
              Key Features
            </h4>
            <p className="text-[16px] font-[400] text-[#515B6F]">
              Outline the key features of the apartment
            </p>
          </div>
          <div className="w-full">
            <ReactQuill
              className="w-full"
              theme="snow"
              value={
                step2?.features
              }
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <AuthButton
          onClick={prev}
          className="w-fit md:w-[20%] mt-4 justify-self-end !bg-[#010886]"
          type="primary"
        >
          Prev
        </AuthButton>
        <AuthButton
          onClick={handlePostApartment}
          className="w-fit md:w-[20%] mt-4 justify-self-end !bg-[#010886]"
          type="primary"
          disabled={isLoading}
        >
          {isLoading ? "Creating" : "Create"}
        </AuthButton>
      </div>
    </div>
  );
};

export default Step4;
