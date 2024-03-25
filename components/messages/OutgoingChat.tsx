import Image from "next/image";
import DeliverIcon from "@/assets/icons/DeliverIcon";

import { IoCheckmark } from "react-icons/io5";

interface IProps {
  image?: string;
  user_name?: string;
  message: string;
  time?: string;
  status?: string
}
const OutgoingChat = ({ image, user_name, message, time, status }: IProps) => {
  return (
    <div className="chat chat-end py-0 w-[98%] mx-auto">
       {image && (
        <div className="chat-image avatar hidden md:inline-flex" style={{ width: "50px", height: "50px", borderRadius: "50%", overflow: "hidden" }}>
          <Image alt="user" src={image}
          fill
          style={{objectFit:"cover"}}
           />
        </div>
      )}
      <span>{user_name}</span>
      <div className="chat-bubble bg-colorPrimary">{message}</div>
      <div className="chat-footer opacity-50 flex justify-end">
        {
          status === "sent" ?  
          <IoCheckmark className="fill-[#71DD37] text-xl" />
          :
          <DeliverIcon className="fill-[#71DD37]" />
        }
        <time>{time}</time>
      </div>
    </div>
  );
};

export default OutgoingChat;
