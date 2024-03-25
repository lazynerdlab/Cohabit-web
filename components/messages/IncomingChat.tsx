import Image from "next/image";
import user from "@/assets/user.svg";
interface IProps {
  image?: string;
  user_name: string | undefined;
  message: string;
  time?: string;
}
const IncomingChat = ({ image, user_name, message, time }: IProps) => {
  return (
    <div className="chat chat-start py-0 w-[98%] mx-auto">
        {image && (
        <div className="chat-image avatar hidden md:inline-flex" style={{ width: "50px", height: "50px", borderRadius: "50%", overflow: "hidden" }}>
          <Image alt="user" src={image}
          fill
          style={{objectFit:"cover"}}
           />
        </div>
      )}
      <span>{user_name}</span>
      <div className="chat-bubble bg-[#FFF] text-[#32475CDE]">{message}</div>
      <div className="chat-footer opacity-50">{time}</div>
    </div>
  );
};

export default IncomingChat;
