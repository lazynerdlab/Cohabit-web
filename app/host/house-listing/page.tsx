import HostHeader from "@/components/header/HostHeader";
import HouseListings from "@/components/house-listings/HouseListings";


const Page = () => {
    return (
        <div className="grid grid-cols-1 grid-rows-[12%_88%] max-h-screen overflow-x-hidden overflow-y-scroll">
            <HostHeader>
                <h4 className="text-[#25324B] text-[12px] sm:text-[18px] md:text-[25px] font-[700]">
                    House Listing
                </h4>
            </HostHeader>
            <HouseListings />
        </div>
    );
};

export default Page;
