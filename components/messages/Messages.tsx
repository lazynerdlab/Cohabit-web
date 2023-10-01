"use client";
import SideBar from "./SideBar";
import ActiveBadge from "@/assets/icons/ActiveBadge";
import Image from "next/image";
import user from "@/assets/user.svg";
import VerticalSeeMore from "@/assets/icons/VerticalSeeMore";
import AttachmentIcon from "@/assets/icons/AttachmentIcon";
import BackIcon from "@/assets/icons/BackIcon";
import {
  CustomTextArea as TextArea,
  CustomButton as Button,
} from "@/lib/AntDesignComponents";
import IncomingChat from "./IncomingChat";
import OutgoingChat from "./OutgoingChat";
import { useState } from "react";

const Messages = () => {
  const [mobileToggle, setMobileToggle] = useState(false);
  return (
    <div className="grid grid-cols-1 md:grid-cols-[30%_70%]">
      <SideBar setDisplay={setMobileToggle} display={mobileToggle} />
      <div
        className={`${
          mobileToggle ? "block" : "hidden"
        } bg-[#32475C]/[4%] md:grid grid-cols-1 grid-rows-[10%_90%] transition duration-500 ease-in-out md:grid-rows-[10%_90%] border-solid border-r-[1px] border-[#D6DDEB] max-h-screen`}
      >
        <div className="sticky md:top-0 top-[10%] z-[9999999999] bg-[#FFF] md:bg-[#32475C]/[4%] flex justify-between items-center w-full p-[2%] border-b border-[#32475C1F]">
          <div className="flex gap-[0.5rem] items-center">
            <span className="relative flex">
              <BackIcon
                onClick={() => setMobileToggle((prev) => !prev)}
                className="block md:hidden"
              />
              <Image alt="user" src={user} />
              <ActiveBadge className="absolute right-0 bottom-0" />
            </span>
            <span className="flex flex-col text-[#32475C99] font-[500]">
              <p>Felecia Rower</p>
              <p>Host</p>
            </span>
          </div>
          <VerticalSeeMore className="cursor-pointer" />
        </div>
        <div className="flex flex-col gap-[0.5rem] max-h[78vh] justify-between overflowhidden md:overflow-y-scroll mb-[3%] relative">
          <div className="flex flex-col justify-end bg-[#32475C]/[4%] overflowy-scroll md:overflowy-scroll">
            <IncomingChat />
            <OutgoingChat />
            <IncomingChat />
            <OutgoingChat />
            <IncomingChat />
            <OutgoingChat />
            <IncomingChat />
            <OutgoingChat />
            <IncomingChat />
            <OutgoingChat />
            <IncomingChat />
            <OutgoingChat />
            <IncomingChat />
            <OutgoingChat />
            <IncomingChat />
            <OutgoingChat />
          </div>
          <div className="grid grid-cols-[80%_20%] sticky bottom-0 items-stretch w-[98%] mx-auto">
            <span className="relative">
              <TextArea
                autoSize={{ maxRows: 2 }}
                placeholder="Type Your Message here..."
              />
              <input className="hidden" type="file" id="file" />
              <label
                htmlFor="file"
                className="absolute right-[2%] cursor-pointer top-[50%] translate-y-[-50%]"
              >
                <AttachmentIcon />
              </label>
            </span>
            <Button
              type="primary"
              htmlType="submit"
              className="!bg-colorPrimary self-end"
            >
              send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
