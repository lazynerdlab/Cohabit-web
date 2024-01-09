"use client";
// import "react-quill/dist/quill.snow.css";

import Image from "next/image";
import Link from "next/link";

import PhoneInput from "react-phone-input-2";
import {
  CustomModal as Modal,
  CustomInput as Input,
  CustomSelect as Select,

} from "@/lib/AntDesignComponents";

import { usePaystackPayment } from 'react-paystack';
import { useAppSelector } from "@/redux/hook";
import { useEffect, useState } from "react";
import { useInitializePaymentMutation } from "@/redux/api/paymentApi";
import { message } from "antd";

type modalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const PropertyModal = ({ open, setOpen }: modalProps) => {

  const { property } = useAppSelector((state) => state.propertyData);
  const options = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ];
  const durationOptions = [
    { value: "0", label: "Daily" },
    { value: "1", label: "Weekly" },
    { value: "2", label: "Monthly" },
    { value: "3", label: "Annually" },
  ];

  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [shareApartment, setShareApartment] = useState<string>("");
  const [duration, setDuration] = useState<string>("");

  const handlePhoneChange = (value: string) => {
    setPhone(value)
  }
  const handleShareApartmentChange = (value: string) => {
    setShareApartment(value)
  }
  const handleDurationChange = (value: string) => {
    setDuration(value)
  }

  useEffect(() => {
    if (property) {
      setFullName(property?.name)
      setEmail(property?.email)
      setPhone(property?.phone)
      setShareApartment(property?.share)
    }
  }, [property]);
  const [initializePayment, { data, isSuccess, isError, error, isLoading }] = useInitializePaymentMutation()
  const amountInNumber = parseInt(property?.amount?.replace(/,/g, ''))

  const config = {
    reference: (new Date()).getTime().toString(),
    email: data?.data?.email,
    amount: data?.data?.amount * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: data?.data?.key,
  };


  const initializePaystackPayment = usePaystackPayment(config);
  useEffect(() => {
    if (isSuccess) {
      setOpen(false)
      initializePaystackPayment()
    }

    if (isError) {
      const errMesg = error as any
      message.error(errMesg?.data?.message)
    }
  }, [data, error, initializePaystackPayment, isError, isSuccess, setOpen])
  const onHandleRentForm = async () => {

    if (!fullName || !email || !phone || !shareApartment) {
      message.error("All fields are required")
      return
    }

    if (phone.length < 10) {
      message.error("Phone number is invalid")
      return
    }
    if (!email.includes("@")) {
      message.error("Email is invalid")
      return
    }


    if (fullName && email && phone && shareApartment) {
      const data = {
        type: "rent",
        listing_id: property?.id,
        amount: amountInNumber,
        duration: duration,
      }
      await initializePayment(data)
    }
  }
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <Modal
      open={open}
      title={
        <div className="border-[#D6DDEB] border-b py-[0.5rem] flex gap-[0.5rem] p-[1rem]">
          <Image width={80} height={80} alt="property" src={property?.image} />
          <div className="flex flex-col gap-[0.5rem]">
            <h5 className="text-[#25324B] text-[18px] md:text-[24px] font-[500]">
              {
                property?.house_type
              }
            </h5>
            <div className="text-[#515B6F] text-[12px] md:text-[18px] font-[500] flex gap-[0.2rem]">
              <p>{property?.location}</p>
              <p>. {property.extras && property.extras.length >= 2 ? property.extras[0].value : 0} Bedroom</p>
              <p>. {property?.status}</p>
            </div>
          </div>
        </div>
      }
      onCancel={handleCancel}
      closable
    >
      <div className="flex flex-col gap-[0.5rem] w-[98%] mx-auto">
        <div className="flex flex-col">
          <h6 className="text-[#25324B] text-[18px] md:text-[24px] font-[500]">
            Submit your requirement
          </h6>
          <p className="text-[#7C8493] text-[12px] md:text-[16px] font-[400]">
            The folowing is required and will only shared with the host
          </p>
        </div>
        <div className="flex flex-col gap-[0.5rem]">
          <label
            htmlFor="name"
            className="text-[#515B6F] text-[12px] md:text-[16px] font-[700]"
          >
            Full name
          </label>
          <Input id="name" placeholder="Enter your full name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        </div>
        <div className="flex flex-col gap-[0.5rem]">
          <label
            htmlFor="name"
            className="text-[#515B6F] text-[12px] md:text-[16px] font-[700]"
          >
            Email Address
          </label>
          <Input id="name" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="flex flex-col gap-[0.5rem]">
          <label
            htmlFor="phone"
            className="text-[#515B6F] text-[12px] md:text-[16px] font-[700]"
          >
            Phone Number
          </label>
          <PhoneInput
            // onlyCountries={["ng", "ca"]} // Provide an array of country codes for the allowed countries
            country={"ng"}
            value={phone}
            onChange={handlePhoneChange}
            enableSearch
            inputStyle={{
              height: "40px",
              border: "1px solid #c7c7c7",
              borderRadius: "4px",
              outline: "none",
              width: "100%",
            }}
          />
        </div>
        <div className="flex flex-col gap-[0.5rem] border-[#D6DDEB] border-b py-[0.5rem]">
          <label
            htmlFor="select"
            className="text-[#515B6F] text-[12px] md:text-[16px] font-[700]"
          >
            Do you want to share an apartment
          </label>
          <Select options={options} id="select" size="large" value={shareApartment} onChange={handleShareApartmentChange} />
        </div>
        <div className="flex flex-col gap-[0.5rem] border-[#D6DDEB] border-b py-[0.5rem]">
          <label
            htmlFor="select"
            className="text-[#515B6F] text-[12px] md:text-[16px] font-[700]"
          >
            Duration
          </label>
          <Select options={durationOptions} id="select" size="large" value={duration} onChange={handleDurationChange} />
        </div>
        {/* <div className="border-[#D6DDEB] border-b py-[0.5rem]">
          <p>Additional information</p>
          <ReactQuill
            value={additionalInfo}
            onChange={setAdditionalInfo}
            className="w-full"
            theme="snow"
            placeholder="Add  anything else you want to share"
          />
        </div> */}
        <button
          onClick={onHandleRentForm}
          disabled={isLoading}
          className="w-full mt-[1rem] disabled:bg-[#c5c5c5] disabled:cursor-not-allowed h-[40px] bg-colorPrimary text-[#fff] text-[14px] font-medium rounded-md border-none"
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
        <span className="text-[#515B6F] text-[12px] md:text-[14px] font-[400] pr-[1rem]">
          By clicking 'Continue', you acknowledge that you have read and accept
          the{" "}
          <Link className="text-[#4640DE]" href={"#"}>
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link className="text-[#4640DE]" href={"#"}>
            Privacy Policy
          </Link>
          .
        </span>
      </div>
    </Modal>
  );
};

export default PropertyModal;
