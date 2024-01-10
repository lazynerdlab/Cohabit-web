"use client"
import UserOnboarding from "@/components/user-onboarding/UserOnboarding";
import { ConfigProvider } from "antd";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const { push } = useRouter();

  useEffect(() => {
    const token = sessionStorage.getItem("authToken");
    const pathname = localStorage.getItem("pathname")
    console.log(pathname);

    if (!token) {
      push(pathname ?? "");
      localStorage.clear();
    }
  }, [push])
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#010886",
          borderRadius: 5,
        },
      }}
    >
      <div className="w-full h-scrren 3xl:max-w-[1600px] 3xl:mx-auto
        ">
        <UserOnboarding />
      </div>
    </ConfigProvider>
  );
};

export default Page;
