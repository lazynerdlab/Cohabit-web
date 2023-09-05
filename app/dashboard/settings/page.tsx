import Header from "@/components/header/Header";
import Settings from "@/components/settings/Settings";
import Registry from "../registry";

const page = () => {
  return (
    <Registry>
      <div className="grid grid-cols-1 grid-rows-[10%_90%] max-h-screen overflow-y-scroll">
        <Header>
          <h4 className="text-[#25324B] text-[25px] font-[700]">Settings</h4>
        </Header>
        <Settings />
      </div>
    </Registry>
  );
};

export default page;
