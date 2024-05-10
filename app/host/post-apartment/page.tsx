"use client";
import HostHeader from "@/components/header/HostHeader";
import PostApartment from "@/components/post-apartment/PostApartment";
import BackIcon from "@/assets/icons/BackIcon";
import { useRouter } from "next/navigation";

const Page = () => {
    const { back } = useRouter();
    return (
        <div className="grid grid-cols-1 grid-rows-[12%_88%] max-h-screen overflow-y-scroll">
            <HostHeader>
                <div className="flex items-center gap-[0.5rem]">
                    <BackIcon
                        onClick={() => {
                            back();
                        }}
                        className="w-[40px] h-[40px] font-[400] text-[15px] cursor-pointer"
                    />
                    <h4 className="text-[#25324B] text-[12px] md:text-[25px] font-[700]">
                        Post an apartment
                    </h4>
                </div>
            </HostHeader>
            <PostApartment />
        </div>
    );
};

export default Page;
