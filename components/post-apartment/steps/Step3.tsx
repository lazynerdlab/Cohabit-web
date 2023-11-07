"use client";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
// import ReactQuill from "react-quill";
import { AuthButton, CustomUpload as Upload } from "@/lib/AntDesignComponents";
import { message } from "antd";
import LinkIcon from "@/assets/icons/LinkIcon";
import type { UploadProps } from "antd";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/redux/hook";
import { SET_APARTMENT_FORM_TWO } from "@/redux/slice/apartmentSlice";

interface Props {
  next: () => void;
  prev: () => void;
}

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
const MAX_FILE_SIZE_MB = 5;
const Step3 = ({ next, prev }: Props) => {

  const dispatch = useAppDispatch()

  const [accessToken, setAccessToken] = useState<string>()
  const [documentUpload, setDocumentUpload] = useState<string[]>([]);
  const [desc, setDesc] = useState<string>();
  const [features, setFeatures] = useState<string>();

  useEffect(() => {
    const token = sessionStorage.getItem('authToken')
    if (token) {
      setAccessToken(token)
    }
  }, [])

  const props: UploadProps = {
    name: "file",
    multiple: true,
    action: `${process.env.NEXT_PUBLIC_BASE_URL}attachment`,
    headers: {
      Authorization: `Bearer ${accessToken}`
    },
    beforeUpload(file) {
      const fileSizeInMB = file.size / 1024 / 1024; // Convert file size to megabytes
      if (fileSizeInMB > MAX_FILE_SIZE_MB) {
        message.error(`File size must be less than ${MAX_FILE_SIZE_MB}MB.`);
        return false; // Prevent the upload
      }
      return true; // Allow the upload
    },
    onChange(info) {
      const { status } = info.file;
      if (status === "uploading") {

      }
      if (status === "done") {

        setDocumentUpload([...info.fileList.map((fileItem) => (fileItem.response?.data?.file))]);

      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  const handleStep2Submit = () => {
    if (!desc || !features || !documentUpload) {
      message.error("All fields are required");
      return
    }
    const payload = {
      description: desc,
      image: documentUpload[0],
      images: documentUpload,
      features,
    }
    // console.log(payload);
    if (desc && features && documentUpload) {
      dispatch(SET_APARTMENT_FORM_TWO(payload));
      next();
    }
  }


  return (
    <div className="grid grid-cols-1 gap-[0.5rem] w-[98%] mx-auto">
      <div className="flex flex-col items-start gap-[0.2rem] border-b border-[#D6DDEB]">
        <h4 className="text-[18px] font-[700] text-[#202430]">Details</h4>
        <p className="text-[16px] font-[400] text-[#515B6F]">
          Add the description of the apartment, pictures, and features.
        </p>
      </div>
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
      <div className="grid grid-cols-1 md:grid-cols-[40%_60%] items-start gap-[0.5rem] border-b border-[#D6DDEB] py-[0.5rem]">
        <div className="flex flex-col items-start gap-[0.2rem]">
          <h4 className="text-[16px] font-[500] text-[#25324B]">
            Apartment Description
          </h4>
          <p className="text-[16px] font-[400] text-[#515B6F]">
            Full details about the apartment
          </p>
        </div>
        <div className="flex h-[150px] flex-col items-stretch w-full md:w-[80%] mx-auto">
          <ReactQuill
            value={desc}
            onChange={setDesc}
            className="h-[70%]"
            theme="snow"
            placeholder="Enter apartment description"
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
        <div className="w-full h-[150px] md:w-[80%] mx-auto">
          <ReactQuill
            value={features}
            onChange={setFeatures}
            className="h-[70%]"
            theme="snow"
            placeholder="Enter apartment description"
          />
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
          onClick={handleStep2Submit}
          className="w-fit md:w-[20%] mt-4 justify-self-end !bg-[#010886]"
          type="primary"
        >
          Next
        </AuthButton>
      </div>
    </div>
  );
};

export default Step3;
