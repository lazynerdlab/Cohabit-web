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
import { message } from "antd";
import IncomingChat from "./IncomingChat";
import OutgoingChat from "./OutgoingChat";
import { useEffect, useState } from "react";
import { Message } from "@/shared/models";
import {
  useGetMessagesQuery,
  useSendMessageMutation,
} from "@/redux/api/chatApi";
import { useAppSelector } from "@/redux/hook";

const Messages = () => {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [sentmessage, setSentMessage] = useState("");
  const [receivedMessages, setReceivedMessages] = useState<Message[]>([]);
  const [sentMessages, setSentMessages] = useState<Message[]>([]);

  // Hardcoded value for testing
  const receiverId: string = "sample_receiver_id";

  // const receiverId: string = useAppSelector(
  //   (state) => state.chatData.chat.receiverId
  // );

  const {
    data: messagesData,
    isSuccess: messagesSuccess,
    isError: messagesError,
  } = useGetMessagesQuery(receiverId);

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
    receiverId,
    message: sentmessage,
    messageType: "text", // Set the messageType field
  };

  // const newMessage: Message = {
  //   id: sentMessages.length + 1, // Generate a unique ID (you may want to handle this differently)
  //   receiverId,
  //   file: {},
  //   message: sentmessage,
  //   // created_at: new Date().toISOString(), // Include a timestamp
  // };

  const onHandlesendMessage = async () => {
    // Check if receiverId is available
    if (!receiverId) {
      message.error("Receiver ID is required.");
      return;
    }
    // Send the message
    await sendMessage(newMessage);
  };

  // const onHandlesendMessage = async () => {
  //   // Send the message
  //   await sendMessage(newMessage);
  // };

  useEffect(() => {
    if (sendIsSuccess) {
      setSentMessages((prevMessages) => [...prevMessages, newMessage]);
      setSentMessage("");
    }
    if (messagesSuccess) {
      console.log("Messages data:", messagesData); // Add this log
      if (messagesData && messagesData.data && messagesData.data.length > 0) {
        setReceivedMessages(messagesData.data);
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
        <div className="flex flex-col gap-[0.5rem] max-h[78vh] justify-between overflow-hidden md:overflow-y-scroll mb-[3%] relative">
          <div className="flex flex-col justify-end bg-[#32475C]/[4%] overflowy-scroll md:overflowy-scroll">
            {receivedMessages.map((msg) => (
              <div key={msg.id}>
                <IncomingChat user_name="Felecia Rower" message={msg.message} />

                {/* You can add more details like sender information or timestamp */}
              </div>
            ))}
            {sentMessages.map((msg) => (
              <div key={msg.id}>
                <OutgoingChat user_name="Felecia Rower" message={msg.message} />
                {/* You can add more details like timestamp */}
              </div>
            ))}
            {/* <IncomingChat />
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
            <OutgoingChat /> */}
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
