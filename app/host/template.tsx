"use client"
import SideBar from "@/components/global/SideBar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import HostSidebar from "@/components/HostSidebar";

type children = {
    children: React.ReactNode;
};
const Template = ({ children }: children) => {
    const { push } = useRouter()
    useEffect(() => {
        const token = sessionStorage.getItem("authToken")
        if (!token) {
            push("/")
        }
    }, [push])
    return (
        <div className="grid grid-cols-[20%_80%] min-h-screen max-h-screen overflow-hidden">
            <HostSidebar />
            {children}
        </div>
    );
};

export default Template;
