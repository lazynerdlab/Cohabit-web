import Header from "@/components/header/Header";
import Settings from "@/components/settings/Settings";

const page = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-[12%_88%] max-h-screen overflow-y-scroll">
      <Header>
        <h4 className="text-[#25324B] text-[25px] font-[700]">Settings</h4>
      </Header>
      <Settings />
    </div>
  );
};

export default page;
