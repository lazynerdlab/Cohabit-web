import Image from "next/image";
import user from "@/assets/user.svg";

const IncomingChat = () => {
  return (
    <div className="chat chat-start py-0 w-[98%] mx-auto">
      <div className="chat-image avatar">
        <Image alt="user" src={user} />
      </div>
      <div className="chat-bubble bg-[#FFF] text-[#32475CDE]">Hi!</div>
      <div className="chat-footer opacity-50">12:46</div>
    </div>
  );
};

export default IncomingChat;
