import Image from "next/image";
import user from "@/assets/user.svg";
import DeliverIcon from "@/assets/icons/DeliverIcon";

const OutgoingChat = () => {
  return (
    <div className="chat chat-end py-0 w-[98%] mx-auto">
      <div className="chat-image avatar">
        <Image alt="user" src={user} />
      </div>
      <div className="chat-bubble bg-colorPrimary">Hello</div>
      <div className="chat-footer opacity-50 flex justify-end">
        <DeliverIcon className="fill-[#71DD37]" />
        <time>1:16pm</time>
      </div>
    </div>
  );
};

export default OutgoingChat;
