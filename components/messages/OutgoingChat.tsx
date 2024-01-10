import Image from "next/image";
import user from "@/assets/user.svg";
import DeliverIcon from "@/assets/icons/DeliverIcon";

interface IProps {
  image?: string;
  user_name: string;
  message: string;
  time?: string;
}
const OutgoingChat = ({ image, user_name, message, time }: IProps) => {
  return (
    <div className="chat chat-end py-0 w-[98%] mx-auto">
      <div className="chat-image avatar hidden md:inline-flex">
        <Image alt="user" src={user} />
      </div>
      <span>{user_name}</span>
      <div className="chat-bubble bg-colorPrimary">{message}</div>
      <div className="chat-footer opacity-50 flex justify-end">
        <DeliverIcon className="fill-[#71DD37]" />
        <time>{time}</time>
      </div>
    </div>
  );
};

export default OutgoingChat;
