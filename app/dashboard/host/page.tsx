import HostHeader from "@/components/header/HostHeader";
import HostDashboard from "@/components/host-dashboard/HostDashboard";
import Registry from "../registry";

const Page = () => {
  return (
    <Registry>
      <div className="grid grid-cols-1 grid-rows-[10%_90%] max-h-screen overflow-x-hidden overflow-y-scroll">
        <HostHeader>
          <h4 className="text-[#25324B] text-[18px] md:text-[25px] font-[700]">
            Dashboard
          </h4>
        </HostHeader>
        <HostDashboard />
      </div>
    </Registry>
  );
};

export default Page;
