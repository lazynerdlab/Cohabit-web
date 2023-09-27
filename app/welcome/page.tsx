"use client";
import { useRouter } from "next/navigation";
import HomeIcon from "@/assets/icons/HomeIcon";
import { AuthButton } from "@/lib/AntDesignComponents";

const Welcome = () => {
    const { push } = useRouter();
    return (
        <div className="flex flex-col justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-[0.4] gap-[1rem] ">
            <div className="bg-[#FFF] w-full ">
                <div className="flex items-center flex-col gap-[1rem]">
                    <HomeIcon className="block mx-auto" />
                    <h3 className="text-[#1E5156] text-[15px] md:text-[32px] font-bold leading-[38.40px] text-center">
                        Welcome on board !
                    </h3>
                    <span className="text-center text-[#7C8493] text-[12px] md:text-lg font-normal leading-[28.80px]">
                        Awesome, your dashboard is ready .
                    </span>
                    <AuthButton
                        style={{ backgroundColor: "#010886" }}
                        onClick={() => push("/dashboard")}
                        type="primary"
                    >
                        Let’s go!
                    </AuthButton>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
