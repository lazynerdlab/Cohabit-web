"use client";
import SideBar from "./SideBar";
import ActiveBadge from "@/assets/icons/ActiveBadge";
import Image from "next/image";
import user from "@/assets/user.svg";
import VerticalSeeMore from "@/assets/icons/VerticalSeeMore";
import AttachmentIcon from "@/assets/icons/AttachmentIcon";
import {
  CustomTextArea as TextArea,
  CustomButton as Button,
} from "@/lib/AntDesignComponents";
import IncomingChat from "./IncomingChat";
import OutgoingChat from "./OutgoingChat";

const Messages = () => {
  return (
    <div className="grid grid-cols-[30%_70%]">
      <SideBar />
      <div className="bg-[#32475C]/[4%] grid grid-cols-1 grid-rows-[10%_90%_] md:grid-rows-[10%_90%] border-solid border-r-[1px] border-[#D6DDEB] max-h-screen">
        <div className="flex justify-between items-center w-full p-[2%] border-b border-[#32475C1F]">
          <div className="flex gap-[0.5rem] items-center">
            <span className="relative">
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
        <div className="flex flex-col gap-[0.5rem] max-h[78vh] justify-between overflowhidden overflow-y-scroll mb-[3%] relative">
          <div className="flex flex-col justify-end">
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
              className="!bg-colorPrimary"
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
