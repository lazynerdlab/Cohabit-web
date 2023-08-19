import Header from "@/components/header/Header";
import DashBoard from "@/components/dashboard/DashBoard";

const page = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-[10%_90%] max-h-screen overflow-y-scroll">
      <Header>
        <h4 className="text-[#25324B] text-[25px] font-[700]">Dashboard</h4>
      </Header>
      <DashBoard />
    </div>
  );
};

export default page;
