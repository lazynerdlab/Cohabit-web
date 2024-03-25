"use client";
import SideBar from "./SideBar";
import ActiveBadge from "@/assets/icons/ActiveBadge";
import Image from "next/image";
import VerticalSeeMore from "@/assets/icons/VerticalSeeMore";
import AttachmentIcon from "@/assets/icons/AttachmentIcon";
import BackIcon from "@/assets/icons/BackIcon";
import {
  CustomTextArea as TextArea,
  CustomButton as Button,
} from "@/lib/AntDesignComponents";
import { Input, message } from "antd";
import IncomingChat from "./IncomingChat";
import OutgoingChat from "./OutgoingChat";
import { useEffect, useState } from "react";
import { Message } from "@/shared/models";
import {
  useGetMessagesQuery,
  useSendMessageMutation,
  useGetSearchedMessagesQuery
} from "@/redux/api/chatApi";

import { useAppSelector } from "@/redux/hook";
import SearchIcon from "@/assets/icons/SearchIcon";
import useDebounce from "../hooks/useSearchDebounce";

const Messages = () => {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [sentmessage, setSentMessage] = useState("");
  const [sentMessages, setSentMessages] = useState<Message[]>([]);
  const [searchMessageQuery, setSearchMessageQuery] = useState<string>(""); // State to hold search query

  // Hardcoded value for testing
  //const receiver_id = 2;
  //useGetHostProfileQuery
  const debounceDelay = 300;
  // Use the custom debouncing hook
  const debouncedSearchQuery = useDebounce(searchMessageQuery, debounceDelay);

  /**
   * const currentUserReceiverId = Number(sessionStorage.getItem('messageid'));
  const receiver_id: number = useAppSelector((state) => {
    // Prioritize currentUserReceiverId if it exists and is a valid number
    if (Number.isFinite(currentUserReceiverId)) {
      return currentUserReceiverId;
    }
    // Fallback to state.chatData.chat.receiverId
    return state.chatData.chat.receiverId;
  });
   */
  const receiver_id = useAppSelector(
    (state) => state.chatData.chat.receiverId
  );
  const chatt_name: string = useAppSelector(
    (state) => state.chatData.chat.name
);
const avatar: string = useAppSelector(
  (state) => state.chatData.chat.avatar
);
const userType: string = useAppSelector(
  (state) => state.chatData.chat.userType
);

//console.log(receiver_id)

const currentUserTypeIdString = sessionStorage.getItem('myId');
const currentUserTypeId = currentUserTypeIdString !== null ? parseInt(currentUserTypeIdString, 10) : null;



const {
  data: messagesData,
  isSuccess: messagesSuccess,
  isError: messagesError,
} = useGetMessagesQuery(receiver_id);
const {
  data: searchedMessages,
  isLoading: searchedLoading,
  error: searchedError,
  isSuccess: searchedSuccess,
  isError: isSearchedError,
} = useGetSearchedMessagesQuery({
  id: receiver_id,
  query: debouncedSearchQuery
});

const [
  sendMessage,
  {
    isLoading: sendIsLoading,
    isSuccess: sendIsSuccess,
    isError: sendIsError,
    error: sendError,
  },
] = useSendMessageMutation();

const newMessage: Message = {
  id: sentMessages.length + 1,
  receiver_id,
  message: sentmessage,
  messageType: "text", // Set the messageType field
  //file: {},

};

const onHandlesendMessage = async () => {
  // Check if receiverId is available
  if (!receiver_id) {
    message.error("Receiver ID is required.");
    return;
  }
  // Send the message
  await sendMessage(newMessage);
};
useEffect(() => {
  if (searchedSuccess) {
    if (searchedMessages && searchedMessages.data && searchedMessages.data.chats && searchedMessages.data.chats.length > 0) {
      setSentMessages(searchedMessages.data.chats); // Update ongoing chats with searched chats
    } else {
      setSentMessages([]); // Set to empty array if no searched chats available
    }

  }
  if (isSearchedError) {
    const errMesg = searchedError as any;
    console.log(errMesg?.data?.message);
  }
}, [searchedMessages, searchedError, isSearchedError, searchedSuccess]);



useEffect(() => {

  if (sendIsSuccess) {
    setSentMessages((prevMessages) => [...prevMessages, newMessage]);
    setSentMessage("");
  }
  if (messagesSuccess) {
    console.log("Messages data:", messagesData); // Add this log
    setSentMessages(messagesData.data.chats)
   
  }
  if (sendIsError || messagesError) {
    const errMesg = sendError as any;
    message.error(errMesg?.data?.message);
  }
}, [
  messagesData,
  messagesError,
  messagesSuccess,
  sendError,
  sendIsError,
  sendIsSuccess,
]);


const handleSearch = (value: string) => {
  setSearchMessageQuery(value); // Trigger search when user types in the search input
};



return (
  <div className="grid grid-cols-1 md:grid-cols-[30%_70%]">
    <SideBar setDisplay={setMobileToggle} display={mobileToggle} />
    <div
      className={`${mobileToggle ? "block" : "hidden"
        } bg-[#32475C]/[4%] md:grid grid-cols-1 grid-rows-[10%_90%] transition duration-500 ease-in-out md:grid-rows-[10%_90%] border-solid border-r-[1px] border-[#D6DDEB] max-h-screen `}
    >
      <div className={`sticky md:top-0 top-[10%] z-[9999999999] bg-[#FFF] md:bg-[#32475C]/[4%] flex justify-between items-center w-full p-[2%] border-b border-[#32475C1F] `}>
        <div className={`flex gap-[0.5rem] items-center ${!chatt_name && ' hidden'}`}>
          <span className="relative flex">
            <BackIcon
              onClick={() => setMobileToggle((prev) => !prev)}
              className="block md:hidden"
            />
            <div className="chat-image avatar hidden md:inline-flex" style={{ width: "40px", height: "40px", borderRadius: "50%", overflow: "hidden" }}>
              <Image alt="user" src={avatar} fill
                style={{ objectFit: "cover" }} />
            </div>
            <ActiveBadge className="absolute right-0 bottom-0" />
          </span>
          <span className={`flex flex-col text-[#32475C99] font-[500] `}>
            <p>{chatt_name}</p>
            <p>{userType}</p>
          </span>
        </div>
        <Input
          className="!rounded-[66px] max-w-[200px]"
          prefix={<SearchIcon className="stroke-[#32475C]/[54%]" />}
          placeholder="Search"
          onChange={(e) => handleSearch(e.target.value)}

        />
        <VerticalSeeMore className="cursor-pointer" />
      </div>
      <div className="flex flex-col gap-[0.5rem] max-h[78vh] justify-between overflow-hidden md:overflow-y-scroll mb-[3%] relative">
        <div className="flex flex-col justify-end bg-[#32475C]/[4%] overflowy-scroll md:overflowy-scroll">
          {
            sentMessages.map((msg) => (
              <div key={msg.id}>

                {currentUserTypeId === parseInt(msg?.sender_id ?? '', 10) ? (
                  <OutgoingChat user_name={msg.sender?.name} image={msg.sender?.image} message={msg.message} status={msg.status} />

                ) : (
                  <IncomingChat user_name={msg.sender?.name} message={msg.message} image={msg.sender?.image} />
                )}
              </div>
            ))

          }

        </div>
        <div className="grid grid-cols-[80%_20%] sticky bottom-0 items-stretch w-[98%] mx-auto">
          <span className="relative">
            <TextArea
              autoSize={{ maxRows: 4 }}
              placeholder="Type Your Message here..."
              value={sentmessage}
              onChange={(e) => setSentMessage(e.target.value)} // Ensure onChange handler
            />

            <input
              className="hidden"
              type="file"
              id="file"
              title="Select File"
            />
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
            onClick={onHandlesendMessage}
          >
            {sendIsLoading ? "..." : "Send"}
          </Button>
        </div>
      </div>
    </div>
  </div>
);
};

export default Messages;
