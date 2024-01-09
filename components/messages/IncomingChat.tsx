import Image from "next/image";
import user from "@/assets/user.svg";
interface IProps {
  image?: string;
  user_name: string;
  message: string;
  time?: string;
}
const IncomingChat = ({ image, user_name, message, time }: IProps) => {
  return (
    <div className="chat chat-start py-0 w-[98%] mx-auto">
      <div className="chat-image avatar hidden md:inline-flex">
        <Image alt="user" src={user} />
      </div>
      <span>{user_name}</span>
      <div className="chat-bubble bg-[#FFF] text-[#32475CDE]">{message}</div>
      <div className="chat-footer opacity-50">{time}</div>
    </div>
  );
};

export default IncomingChat;
