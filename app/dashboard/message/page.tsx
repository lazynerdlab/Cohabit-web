import Messages from "@/components/messages/Messages";
import Header from "@/components/header/Header";

const pages = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-[10%_90%] max-h-screen overflow-x-hidden overflow-y-scroll">
      <Header>
        <h4 className="text-[#25324B] text-[18px] md:text-[25px] font-[700]">
          Messages
        </h4>
      </Header>
      <Messages />
    </div>
  );
};

export default pages;
