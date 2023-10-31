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
      push("/sign-in")
    }
  }, [push])
  return (
    <div className="grid grid-cols-[20%_80%] min-h-screen max-h-screen overflow-hidden">
      <SideBar />
      {children}
    </div>
  );
};

export default Template;
