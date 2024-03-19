"use client";
import SideBar from "./SideBar";
import Echo from "laravel-echo";
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
import { useGetHostProfileQuery } from "@/redux/api/hostApi";

const Messages = () => {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [sentmessage, setSentMessage] = useState("");
  const [receivedMessages, setReceivedMessages] = useState<Message[]>([]);
  const [sentMessages, setSentMessages] = useState<Message[]>([]);
  const [searchMessageQuery, setSearchMessageQuery] = useState<string>(""); // State to hold search query

  // Hardcoded value for testing
  //const receiver_id = 2;
  useGetHostProfileQuery
  const receiver_id: string = useAppSelector(
    (state) => state.chatData.chat.receiverId
  );
  const chatt_name: string = useAppSelector(
    (state) => state.chatData.chat.name
  );
  const avatar: string = useAppSelector(
    (state) => state.chatData.chat.avatar
  );
 

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
    query: searchMessageQuery
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
    // console.log("Chats searching:", searchedLoading);
    // Log isLoading value
    if (searchedSuccess) {
      if (searchedMessages && searchedMessages.data && searchedMessages.data.chats && searchedMessages.data.chats.length > 0) {
        setSentMessages(searchedMessages.data.chats); // Update ongoing chats with searched chats
        console.log(searchedMessages.data.chats); // Update ongoing chats with searched chats
        console.log(searchedMessages.data); // Update ongoing chats with searched chats
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
      if (messagesData && messagesData.data && messagesData.data.length > 0) {
        setReceivedMessages(messagesData.data);

        console.log(sentMessages)
      } else {
        setReceivedMessages([]); // No messages, set empty array
      }
    }
    if (sendIsError || messagesError) {
      const errMesg = sendError as any;
      message.error(errMesg?.data?.message);
    }
  }, [
    messagesData?.data,
    messagesError,
    messagesSuccess,
    sendError,
    sendIsError,
    sendIsSuccess,
  ]);

  // useEffect(() => {
  //   const echo = new Echo({
  //     broadcaster: 'pusher',
  //     key: process.env.PUSHER_APP_KEY,
  //     cluster: process.env.PUSHER_APP_CLUSTER,
  //     encrypted: true,
  //     enabledTransports: ['ws', 'wss'],
  //     wsHost: process.env.PUSHER_APP_HOST,
  //     wsPort: process.env.PUSHER_APP_WS_PORT ?? 80,
  //     wssPort: process.env.PUSHER_APP_WSS_PORT ?? 443,

  //   })

  //   // Subscribe to the chat channel
  //   const channel = echo.private(`chat.${receiverId}`);

  //   // Listen for incoming messages
  //   channel.listen('ChatMessageEvent', (event: Message) => {
  //     setReceivedMessages((prevMessages) => [...prevMessages, event]);
  //   });

  //   // Clean up event listeners when the component unmounts
  //   return () => {
  //     channel.stopListening('ChatMessageEvent');
  //   };
  // }, [receiverId]);
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
              <p>Host</p>
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
            {receivedMessages.map((msg) => (
              <div key={msg.id}>
                <IncomingChat user_name="Felecia Rower" message={msg.message} />

                {/* You can add more details like sender information or timestamp */}
              </div>
            ))}
            {
              sentMessages.length > 0 ? (
                sentMessages.map((msg) => (
                  <div key={msg.id}>
                    <OutgoingChat user_name={msg.sender?.name} image={msg.sender?.image} message={msg.message} />
                  </div>
                ))
              ) : (
                <div className=" h-[300px] flex items-center justify-center">Getting Chats.</div>
              )
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
