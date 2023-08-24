import PaymentDetails from "./PaymentDetails";
import LinkIcon from "@/assets/icons/LinkIcon";
import {
  CustomSelect as Select,
  CustomInput as Input,
  CustomUpload as Upload,
} from "@/lib/AntDesignComponents";
import type { UploadProps } from "antd";
import { message } from "antd";

const Transfer = () => {
  const props: UploadProps = {
    name: "file",
    multiple: false,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
  return (
    <div className="w-[98%] mx-auto grid grid-cols-[60%_40%] gap-[1rem]">
      <div className="grid grid-cols-1 gap-[0.5rem] w-[98%] mx-auto border border-[#D6DDEB] p-[1rem] h-fit">
        <div className="flex flex-col items-start gap-[0.2rem] border-b border-[#D6DDEB]">
          <h4 className="text-[16px] font-[700] text-[#0C1938]">
            Bank Transfer
          </h4>
          <p className="text-[14px] font-[400] text-[#515B6F]">
            Please make a bank transfer with the following account number and
            send us the reciept
          </p>
        </div>
        <div className="rounded-[10px] bg-[#EBEEFE] px-[11px] py-[16px] flex flex-col gap-[0.5rem]">
          <span className="text-[#0C1938] text-[16px] font-[700]">
            Transfer details
          </span>
          <div className="grid grid-cols-3">
            <div className="flex flex-col gap-[0.2rem] p-[0.5rem]">
              <h6 className="text-[#515B6F] text-[16px] font-[500]">
                Account number
              </h6>
              <p className="text-[#0C1938] text-[16px] font-[400]">
                0566777888
              </p>
            </div>
            <div className="flex flex-col gap-[0.2rem] p-[0.5rem] border-l border-[#D3D6DB]">
              <h6 className="text-[#515B6F] text-[16px] font-[500]">
                Bank Name
              </h6>
              <p className="text-[#0C1938] text-[16px] font-[400]">Firstbank</p>
            </div>
            <div className="flex flex-col gap-[0.2rem] p-[0.5rem] border-l border-[#D3D6DB]">
              <h6 className="text-[#515B6F] text-[16px] font-[500]">
                Account name
              </h6>
              <p className="text-[#0C1938] text-[16px] font-[400]">Co-habit</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[0.2rem]">
          <label className="text-[#0C1938] text-[16px] font-[500]">
            Bank Name
          </label>
          <Select id="search" />
        </div>
        <div className="flex items-center w-full gap-[0.5rem]">
          <div className="flex flex-col gap-[0.2rem] w-full">
            <label
              htmlFor="receipt"
              className="text-[#0C1938] text-[16px] font-[500]"
            >
              Receipt Number
            </label>
            <Input id="receipt" />
          </div>
          <div className="flex flex-col gap-[0.2rem] w-full">
            <label
              htmlFor="time"
              className="text-[#0C1938] text-[16px] font-[500]"
            >
              Time Range
            </label>
            <Input id="time" />
          </div>
        </div>
        <div className="flex items-center justify-between gap-[1rem] w-full mx-auto">
          <h4 className="text-[#0C1938] text-[16px] font-[500]">
            Attach image of the reciept
          </h4>
          <Upload {...props}>
            <div className="flex gap-[0.3rem] p-[0.5rem]">
              <LinkIcon />
              <h4 className="text-[#0C1938] text-[16px] font-[500]">
                Attach image of the reciept
              </h4>
            </div>
          </Upload>
        </div>
      </div>
      <PaymentDetails />
    </div>
  );
};

export default Transfer;
