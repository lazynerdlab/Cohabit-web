import Header from "@/components/header/Header";
import HostProfile from "@/components/profile/HostProfile";

const page = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-[12%_88%] max-h-screen overflow-y-scroll">
      <Header>
        <h4 className="text-[#25324B] text-[25px] font-[700]">Host Profile</h4>
      </Header>
      <HostProfile />
    </div>
  );
};

export default page;
