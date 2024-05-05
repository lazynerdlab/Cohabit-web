/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import JpgIcon from "@/assets/icons/JpgIcon";
import {
  CustomUpload as Upload,
  CustomInput as Input,
  CustomDatePicker as DatePicker,
  CustomSelect as Select,
  RadioGroup,
  CustomRadio as Radio,
  CustomButton as Button,
} from "@/lib/AntDesignComponents";
import { message } from "antd";
import type { DatePickerProps, RadioChangeEvent, UploadProps } from "antd";
import { useGetHouseSeekerProfileQuery } from "@/redux/api/houseApi";
import { useEffect, useState } from "react";

import { useAppSelector } from "@/redux/hook";
import { useUpdateProfileMutation } from "@/redux/api/settingApi";
import moment from "moment";
import { Spinner } from "../spinner/Spinner";

const options = [
  { value: "0", label: "Male" },
  { value: "1", label: "Female" },
  { value: "2", label: "Others" },
];

const statusOptions = [
  {
    value: "",
    label: "Select an option",
  },
  {
    value: "Looking for apartment",
    label: "Looking for apartment",
  },
  {
    value: "Looking for flatmate",
    label: "Looking for flatmate",
  },
];

const MAX_FILE_SIZE_MB = 5;

const Tab1 = () => {
  const user = useAppSelector((state) => state.userData.user);
  const { data, isSuccess, isLoading, isError, error } = useGetHouseSeekerProfileQuery({});
  const userData = user?.data?.user
  const [accessToken, setAccessToken] = useState<string>()
  const [image, setImage] = useState<string>();

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
      if (status !== "uploading") {

      }
      if (status === "done") {
        setImage(info?.file?.response?.data?.file)
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  const [lastName, setLastName] = useState<string>();
  const [firstName, setFirstName] = useState<string>();
  const [phoneNo, setPhoneNo] = useState<string>();
  const [gender, setGender] = useState<string>();
  const [userStatus, setUserStatus] = useState<string>();
  const [dob, setDOB] = useState<any>();
  const [email, setEmail] = useState<string>();
  const [userType, setUserType] = useState<string>();

  const handleGenderChange = (value: string) => {
    setGender(value);
  }
  const handleStatusChange = (value: string) => {
    setUserStatus(value);
  }
  const radioOnChange = (e: RadioChangeEvent) => {
    setUserType(e.target.value);
  };

  const dateOnChange: DatePickerProps['onChange'] = (date, dateString) => {
    setDOB(date);
  };

  const [updateProfile, { isLoading: updateProfileLoading, isSuccess: updateProfileSuccess, isError: updateProfileIsError, error: updateProfileError}] = useUpdateProfileMutation();

  useEffect(() => {
    if (updateProfileSuccess) {
      message.success("Profile updated successfully");
    }
    if (updateProfileIsError) {
      message.error("Profile update failed");
      //message.error(updateProfileError?.data?.message);
      /**
       *  if ('status' in updateProfileError){
        //const messErr = updateProfileError.data;
        setUserErr(updateProfileError?.data);
        message.error(userErr?.message);
        //message.useMessage(updateProfileError?.data)
        //console.error("well:", updateProfileError.data);
      }else{
        console.log(updateProfileError)
      }
       */
      console.log(updateProfileError);
    }
  }, [updateProfileError, updateProfileIsError, updateProfileSuccess]);

  useEffect(() => {
    if (isSuccess) {
      setImage(data?.data?.image)
      setEmail(data?.data?.email)
      setPhoneNo(data?.data?.phone)
      setGender(data?.data?.gender)
      setUserStatus(data?.data?.house_seeker_status)
      setDOB(data?.data?.dob)
    }

    if (user) {
      setUserType(userData?.user_type)
      setFirstName(userData?.firstname)
      setLastName(userData?.lastname)
    }
    if (isError) {
      console.log(error);
    }
  }, [data, isSuccess, isError, error, userData]);


  let date = moment(dob?.$d).format("YYYY-MM-DD")

  const handleProfileUpdate = async () => {
    if (!firstName || !lastName || !image || !phoneNo || !gender || !dob || !userStatus || !userType) {
      // Handle the case where any field is empty
      message.error("Please fill in all fields.");
      return;
    }
    await updateProfile({
      firstname: firstName,
      image: image,
      lastname: lastName,
      phone_no: phoneNo,
      gender: gender === "female" || gender === "FEMALE" ? 1 : gender === "male" || gender === "MALE" ? 2 : 0,
      dob,
      status: userStatus,
      account_type: userType
    });
  };

  return (
    <>
      {
        isLoading ? <Spinner /> : <div className="grid grid-cols-1 gap-[0.5rem] w-[98%] mx-auto">
          <div className="flex flex-col items-start gap-[0.2rem] border-b border-[#D6DDEB]">
            <h4 className="text-[18px] font-[700] text-[#202430]">
              Basic Information
            </h4>
            <p className="text-[16px] font-[400] text-[#515B6F]">
              This is your personal information that you can update anytime.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[30%_70%] items-center gap-[1rem] border-b border-[#D6DDEB] py-[0.5rem]">
            <div className="flex flex-col items-start gap-[0.2rem]">
              <h4 className="text-[16px] font-[500] text-[#25324B]">
                Profile Photo
              </h4>
              <p className="text-[16px] font-[400] text-[#515B6F]">
                This image will be shown publicly as your profile picture, it will
                help recruiters recognize you!
              </p>
            </div>
            <div className="flex items-center gap-[1rem] w-[98%] md:w-[80%] mx-auto">
              <img alt="photo" src={image === null ? "https://cdn-icons-png.flaticon.com/512/149/149071.png" : image} width={100} height={100} className=" rounded-[100%] object-cover  mr-1" />
              <Upload {...props}>
                <div className="flex flex-col items-center p-[0.2rem] md:p-[0.5rem]">
                  <JpgIcon className="hidden md:block" />
                  <span className="flex flex-col md:flex-row items-center gap-[0.2rem] text-[10px] md:text-[16px] font-[400]">
                    <p className="text-colorPriary text[12px] md:text[16px]">
                      Click to replace
                    </p>
                    <p className="text-[#515B6F)]">or drag and drop</p>
                  </span>
                  <p className="text-[10px] md:text-[16px] font-[400] text-[#7C8493]">
                    SVG, PNG, JPG or GIF (max. 400 x 400px).
                  </p>
                </div>
              </Upload>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[30%_70%] items-start gap-[0.5rem] border-b border-[#D6DDEB] py-[0.5rem]">
            <h4 className="text-[16px] font-[500] text-[#25324B]">
              Personal Details
            </h4>
            <div className="grid grid-cols-1 items-center gap-[1rem] w-full md:w-[80%] mx-auto">
              <div className="w-full mx-auto flex flex-col items-start justify-start gap-[0.5rem]">
                <label
                  htmlFor="name"
                  className="text-[#0C1938] text-[16px] font-[700]"
                >
                  First Name *
                </label>
                <Input className="" value={firstName} placeholder="This is a placeholder" id="name" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)} />
              </div>
              <div className="w-full mx-auto flex flex-col items-start justify-start gap-[0.5rem]">
                <label
                  htmlFor="name"
                  className="text-[#0C1938] text-[16px] font-[700]"
                >
                  Last Name *
                </label>
                <Input className="" value={lastName} placeholder="This is a placeholder" id="name" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[0.5rem]">
                <div className="w-full mx-auto flex flex-col items-start justify-start gap-[0.5rem]">
                  <label
                    htmlFor="name"
                    className="text-[#0C1938] text-[16px] font-[700]"
                  >
                    Phone Number *
                  </label>
                  <Input
                    className=""
                    type="number"
                    value={phoneNo}
                    id="name"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhoneNo(e.target.value)}
                  />
                </div>
                <div className="w-full mx-auto flex flex-col items-start justify-start gap-[0.5rem]">
                  <label
                    htmlFor="name"
                    className="text-[#0C1938] text-[16px] font-[700]"

                  >
                    Email *
                  </label>
                  <Input
                    className=""
                    value={email}
                    placeholder="This is a placeholder"
                    id="name"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    disabled
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-[0.5rem] items-stretch">
                <div className="w-full mx-auto flex flex-col items-start justify-start gap-[0.5rem]">
                  <label
                    htmlFor="name"
                    className="text-[#0C1938] text-[16px] font-[700]"
                  >
                    Date of Birth *
                  </label>
                  {/* <DatePicker className="w-full" value={dob} onChange={dateOnChange} /> */}
                  <input type="date" name="" id="" value={dob} className="w-full p-[0.15rem]" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDOB(e.target.value)} />
                </div>
                <div className="w-full mx-auto flex flex-col items-start justify-start gap-[0.5rem]">
                  <label
                    htmlFor="name"
                    className="text-[#0C1938] text-[16px] font-[700]"
                  >
                    Gender *
                  </label>
                  <Select
                    className="w-full"
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    value={gender}
                    onChange={handleGenderChange}
                    options={options}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[30%_70%] items-start gap-[0.5rem] border-b border-[#D6DDEB] py-[0.5rem]">
            <div className="flex flex-col items-start gap-[0.2rem]">
              <h4 className="text-[16px] font-[500] text-[#25324B]">
                Account Type
              </h4>
              <p className="text-[16px] font-[400] text-[#515B6F]">
                You can update your account type
              </p>
            </div>
            <RadioGroup className="" style={{ color: "#4640DE" }} value={userType} onChange={radioOnChange}>
              <div className="grid grid-cols-1 w-full md:w-[80%] mx-auto">
                <Radio value={"house_seeker"}>
                  <div className="flex flex-col items-start">
                    <h5 className="text-[#25324B] text-[16px] font-[500]">
                      House Seeker
                    </h5>
                    <p className="text-[#515B6F] text-[16px] font-[400]">
                      Looking for an apartment
                    </p>
                  </div>
                </Radio>
                <Radio value={"host"}>
                  <div className="flex flex-col items-start">
                    <h5 className="text-[#25324B] text-[16px] font-[500]">Host</h5>
                    <p className="text-[#515B6F] text-[16px] font-[400]">
                      Posting an apartment
                    </p>
                  </div>
                </Radio>
              </div>
            </RadioGroup>
          </div>
          <div className="grid grid-cols-[30%_70%] items-start gap-[0.5rem] py-[0.5rem]">
            <h4 className="text-[16px] font-[500] text-[#25324B]">Set Status</h4>
            <div className="w-[80%] mx-auto">
              <div className="w-full mx-auto flex flex-col items-start justify-start gap-[0.5rem]">
                <label
                  htmlFor="status"
                  className="text-[#0C1938] text-[16px] font-[700]"
                >
                  Status *
                </label>
                <Select
                  className="w-full"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  id="status"
                  value={userStatus}
                  onChange={handleStatusChange}
                  options={statusOptions}
                  defaultValue={statusOptions[0]}
                />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end py-[2rem]">
            <Button className="!bg-[#010886]" type="primary" disabled={updateProfileLoading} onClick={handleProfileUpdate}>
              {updateProfileLoading ? "Updating..." : "Update Profile"}
            </Button>
          </div>
        </div>
      }
    </>
  );
};

export default Tab1;

