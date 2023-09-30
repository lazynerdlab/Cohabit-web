"use client";
import {
  CustomInput as Input,
  AuthButton as Button,
  CustomCollapse as Collapse,
  CustomSelect as Select,
  CustomButton as IconButton,
  CustomFloatButton as FloatButton,
} from "@/lib/AntDesignComponents";
import type { CollapseProps } from "antd";
import SearchIcon from "@/assets/icons/SearchIcon";
import SeeMoreIcon from "@/assets/icons/SeeMoreIcon";
import ThumbUpIcon from "@/assets/icons/ThumbUpIcon";
import ThumbDownIcon from "@/assets/icons/ThumbDownIcon";
import ChatIcon from "@/assets/icons/ChatIcon";
import { useState } from "react";
import cardbg from "@/assets/cardbg.svg";

const HelpCenter = () => {
  const [active, setActive] = useState(0);
  const arr = [
    "Getting Started",
    "My Profile",
    "Renting an apartment",
    "Getting a partner",
    "House Alerts",
  ];
  const options = [
    {
      value: "Most Relevant",
      label: "Most Relevant",
    },
    {
      value: "2",
      label: "Closed",
    },
    {
      value: "3",
      label: "Communicated",
    },
    {
      value: "4",
      label: "Identified",
    },
    {
      value: "5",
      label: "Resolved",
    },
    {
      value: "6",
      label: "Cancelled",
    },
  ];
  const genExtra = () => <SeeMoreIcon />;
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: (
        <p className="font-[500] text-[16px] md:text-[20px] text-[#25324B]">
          What is Co-habit ?
        </p>
      ),
      children: (
        <div className="flex flex-col gap-[1rem]">
          <span className="text-[#515B6F] text-[12px] md:text-[16px] font-[400] w[80%] mxauto p-[1rem] border-b border-[#D6DDEB]">
            Our mission is to help people find affordable homes with a seamless
            and rewarding shared experiences
          </span>
          <div className="flex items-center gap-[0.3rem]">
            <span className="text-[#515B6F] text-[12px] md:text-[16px] font-[600]">
              Was this article helpful?
            </span>
            <IconButton
              className="text-[#4640DE] text-[16px] font-[400]"
              icon={<ThumbUpIcon />}
            >
              Yes
            </IconButton>
            <IconButton
              className="text-[#4640DE] text-[16px] font-[400]"
              icon={<ThumbDownIcon />}
            >
              No
            </IconButton>
          </div>
        </div>
      ),
      showArrow: false,
      extra: genExtra(),
    },
    {
      key: "2",
      label: (
        <p className="font-[500] text-[16px] md:text-[20px] text-[#25324B]">
          How do i get an apartment without being scammed
        </p>
      ),
      children: (
        <div className="flex flex-col gap-[1rem]">
          <span className="text-[#515B6F] text-[12px] md:text-[16px] font-[400] w[80%] mxauto p-[1rem] border-b border-[#D6DDEB]">
            In co-habit we make sure that each apartment is being verified
            before showing our potential customers
          </span>
          <div className="flex items-center gap-[0.3rem]">
            <span className="text-[#515B6F] text-[12px] md:text-[16px] font-[600]">
              Was this article helpful?
            </span>
            <IconButton
              className="text-[#4640DE] text-[12px] md:text-[16px] font-[400]"
              icon={<ThumbUpIcon />}
            >
              Yes
            </IconButton>
            <IconButton
              className="text-[#4640DE] text-[16px] font-[400]"
              icon={<ThumbDownIcon />}
            >
              No
            </IconButton>
          </div>
        </div>
      ),
      showArrow: false,
      extra: genExtra(),
    },
  ];
  return (
    <>
      <div className="w-[98%] mx-auto grid md:grid-cols-[35%_65%] gap-[0.5rem]">
        <div className="grid grid-cols-1">
          <div className="w-full mx-auto flex flex-col items-start justify-start gap-[1rem]">
            <label
              htmlFor="search"
              className="text-[#7C8493] text-[16px] font-[700]"
            >
              Type your question or search keyword
            </label>
            <Input
              id="search"
              placeholder="Search"
              prefix={<SearchIcon className="stroke-[#515B6F]" />}
            />
          </div>
          <div className="flex flex-col gap-[0.2rem]">
            {arr.map((e, i) => (
              <div
                onClick={() => setActive(i)}
                key={i}
                className={`${
                  active === i ? "text-[#4640DE]" : "text-[#515B6F]"
                }  ${
                  i + 1 !== arr.length ? "border-b border-[#D6DDEB]" : ""
                } text-[16px] font-[500] p-[0.5rem] cursor-pointer`}
              >
                {e}
              </div>
            ))}
          </div>
          <div className="hidden md:block">
            <div
              style={{
                backgroundImage: `url(${cardbg.src})`,
                backgroundSize: "cover",
              }}
              className="rounded-[8px] flex flex-col gap-[1rem] py-[1rem] px-[2rem]"
            >
              <span className="text-[16px] md:text-[20px] font-[500] text-[#FFF]">
                Didn't find what you were looking for?
              </span>
              <span className="text-[#F8F8FD] text-[16px] font-[400]">
                Contact our customer service
              </span>
              <div>
                <Button className="text-colorPrimary !bg-[#FFF]">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[0.5rem] w-[98%] mx-auto">
          <div className="flex items-center gap-[0.1rem] w-full">
            <p className="text-[#7C8493] text-[16px] font-[400]">Sort by:</p>
            <Select options={options} defaultValue={"Most Relevant"} />
          </div>
          <div>
            <Collapse defaultActiveKey={1} items={items} />
          </div>
        </div>
        <div className="md:hidden block">
          <div
            style={{
              backgroundImage: `url(${cardbg.src})`,
              backgroundSize: "cover",
            }}
            className="rounded-[8px] flex flex-col gap-[1rem] py-[1rem] px-[2rem]"
          >
            <span className="text-[16px] md:text-[20px] font-[500] text-[#FFF]">
              Didn't find what you were looking for?
            </span>
            <span className="text-[#F8F8FD] text-[12px] md:text-[16px] font-[400]">
              Contact our customer service
            </span>
            <div>
              <Button className="text-colorPrimary !bg-[#FFF]">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
      <FloatButton icon={<ChatIcon className="w-full" />} />
    </>
  );
};

export default HelpCenter;
