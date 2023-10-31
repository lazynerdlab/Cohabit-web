"use client";
import "react-quill/dist/quill.snow.css";
import thumbnail from "@/assets/propertyThumbnail.jpg";
import Image from "next/image";
import Link from "next/link";
import ReactQuill from "react-quill";
import {
  CustomModal as Modal,
  CustomInput as Input,
  CustomSelect as Select,
  CustomButton as Button,
} from "@/lib/AntDesignComponents";
import { useRouter } from "next/navigation";

type modalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const PropertyModal = ({ open, setOpen }: modalProps) => {
  const { push } = useRouter();
  const options = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ];
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <Modal
      open={open}
      title={
        <div className="border-[#D6DDEB] border-b py-[0.5rem] flex gap-[0.5rem] p-[1rem]">
          <Image width={80} height={80} alt="property" src={thumbnail} />
          <div className="flex flex-col gap-[0.5rem]">
            <h5 className="text-[#25324B] text-[18px] md:text-[24px] font-[500]">
              Bungalow
            </h5>
            <div className="text-[#515B6F] text-[12px] md:text-[18px] font-[500] flex gap-[0.2rem]">
              <p>Lagos, Nigeria</p>
              <p>. 2 Bedroom</p>
              <p>. Available</p>
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
          <Input id="name" placeholder="Enter your full name" />
        </div>
        <div className="flex flex-col gap-[0.5rem]">
          <label
            htmlFor="name"
            className="text-[#515B6F] text-[12px] md:text-[16px] font-[700]"
          >
            Email Address
          </label>
          <Input id="name" placeholder="Enter your email address" />
        </div>
        <div className="flex flex-col gap-[0.5rem]">
          <label
            htmlFor="phone"
            className="text-[#515B6F] text-[12px] md:text-[16px] font-[700]"
          >
            Phone Number
          </label>
          <Input id="phone" placeholder="Enter your phone number" />
        </div>
        <div className="flex flex-col gap-[0.5rem] border-[#D6DDEB] border-b py-[0.5rem]">
          <label
            htmlFor="select"
            className="text-[#515B6F] text-[12px] md:text-[16px] font-[700]"
          >
            Do you want to share an apartment
          </label>
          <Select options={options} id="select" size="large" />
        </div>
        <div className="border-[#D6DDEB] border-b py-[0.5rem]">
          <p>Additional information</p>
          <ReactQuill
            className="w-full"
            theme="snow"
            placeholder="Add  anything else you want to share"
          />
        </div>
        <Button
          onClick={() => push("/payment")}
          className="w-full"
          type="primary"
        >
          Submit
        </Button>
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
