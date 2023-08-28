import HostHeader from "@/components/header/HostHeader";
import Registry from "../../registry";
import HouseListings from "@/components/house-listings/HouseListings";

const Page = () => {
  return (
    <Registry>
      <div className="grid grid-cols-1 grid-rows-[10%_90%] max-h-screen overflow-x-hidden overflow-y-scroll">
        <HostHeader>
          <h4 className="text-[#25324B] text-[25px] font-[700]">
            House Listing
          </h4>
        </HostHeader>
        <HouseListings />
      </div>
    </Registry>
  );
};

export default Page;
