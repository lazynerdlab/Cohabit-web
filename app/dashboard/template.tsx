"use client"
import SideBar from "@/components/global/SideBar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

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
    <div className="drawer lg:drawer-open min-h-screen max-h-screen overflow-hidden">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-[#EEF2F7]">{children}</div>
      <SideBar />
    </div>
  );
};

export default Template;
