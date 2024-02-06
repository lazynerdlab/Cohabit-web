"use client";
import type { MenuProps } from "antd";
import { CustomMenu as Menu } from "@/lib/AntDesignComponents";
import HomeIconsm from "@/assets/icons/HomeIconsm";
import MessageIcon from "@/assets/icons/MessageIcon";
import SearchIcon from "@/assets/icons/SearchIcon";
import UserIcon from "@/assets/icons/UserIcon";
import HelpIcon from "@/assets/icons/HelpIcon";
import SettingsIcon from "@/assets/icons/SettingsIcon";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import user from "@/assets/user.svg";
import { usePathname } from "next/navigation";

import { MdLogout } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useGetHouseSeekerProfileQuery } from "@/redux/api/houseApi";
import { useAppDispatch } from "@/redux/hook";
import { CLEAR_USER } from "@/redux/slice/userSlice";
import { CLEAR_HOST, CLEAR_PROPERTY } from "@/redux/slice/propertySlice";
import { Spinner } from "../spinner/Spinner";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const Title = () => (
  <Image className="py-[0.5rem] hidden md:block" alt="" src={Logo} />
);

const SideBar = () => {
  const { push } = useRouter();
  const { data, isSuccess, isLoading } = useGetHouseSeekerProfileQuery({});
  const [profile, setProfile] = useState<Record<string, any>>();
  const [active, setActive] = useState("");
  const path = usePathname();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (isSuccess) {
      setProfile(data?.data);
    }
  }, [data?.data, isSuccess]);
  const items: MenuProps["items"] = useMemo(
    () => [
      getItem(
        <Link href="/dashboard">Dashboard</Link>,
        "/dashboard",
        <HomeIconsm
          className={`${
            path === "/dashboard" ? "stroke-colorPrimary" : "stroke-[#7C8493]"
          } h-[18px]`}
        />
      ),

      getItem(
        <Link href="/dashboard/message">Messages</Link>,
        "/dashboard/message",
        <MessageIcon
          className={`${
            path.includes("message")
              ? "stroke-colorPrimary"
              : "stroke-[#7C8493]"
          } h-[18px]`}
        />
      ),
      getItem(
        <Link href="/dashboard/find-property">Find property</Link>,
        "/dashboard/find-property",
        <SearchIcon
          className={`${
            path.includes("find-property")
              ? "stroke-colorPrimary"
              : "stroke-[#7C8493]"
          } h-[18px]`}
        />
      ),
      getItem(
        <Link href="/dashboard/profile">My Public Profile</Link>,
        "/dashboard/profile",
        <UserIcon
          className={`${
            path.includes("profile")
              ? "stroke-colorPrimary"
              : "stroke-[#7C8493]"
          } h-[18px]`}
        />
      ),

      { type: "divider" },

      getItem(
        <Link href="/dashboard/settings">Settings</Link>,
        "/dashboard/settings",
        <SettingsIcon
          className={`${
            path.includes("settings")
              ? "stroke-colorPrimary"
              : "stroke-[#7C8493]"
          } h-[18px]`}
        />
      ),
      getItem(
        <Link href="/dashboard/help-center">Help Center</Link>,
        "/dashboard/help-center",
        <HelpIcon
          className={`${
            path.includes("help-center")
              ? "stroke-colorPrimary"
              : "stroke-[#7C8493]"
          } h-[18px]`}
        />
      ),
    ],
    [path]
  );
  useEffect(() => {
    const rel = path.split("/");
    setActive(() => {
      if (rel[2]) return "/" + rel[1] + "/" + rel[2];
      else return "/" + rel[1];
    });
  }, [path]);
  const onClick: MenuProps["onClick"] = (e) => {
    setActive(e.key);
  };

  return (
    <div className="drawer-side z-[9999999999] h-screen">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <aside className="flex flex-col justify-between w-[16rem] h-screen overflow-hidden shadow-xl pt-[1rem] md:pt-0 bg-[#F8F8FD]">
        {/* <div className="grid grid-cols-1 grid-rows-[5%_75%_15%] md:grid-rows-[10%_75%_15%] border-solid border-r-[1px] border-[#D6DDEB] bg-[#F8F8FD] max-h-screen overflow-y-hidden"> */}
        <div>
          <Title />
          <Menu
            onClick={onClick}
            defaultSelectedKeys={[active]}
            selectedKeys={[active]}
            items={items}
          />
        </div>
        <div className="flex flex-col gap-[1rem] justify-self-end">
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              <div className="flex gap-2 items-center">
                <Image
                  alt="user"
                  src={
                    profile?.image === null
                      ? "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                      : profile?.image
                  }
                  width={50}
                  height={50}
                  className="h-[50px] rounded-full w-[50px] "
                />
                <div className="md:flex flex-col hidden">
                  <h4 className="text-[#202430] text-[18px] font-[600]">
                    {profile?.name}
                  </h4>
                </div>
              </div>
              <span
                className=" cursor-pointer p-3 bg-[#e20000] text-[#fff] flex justify-center gap-3 items-center"
                onClick={() => {
                  push("/");
                  window.sessionStorage.removeItem("authToken");
                }}
              >
                {" "}
                <MdLogout /> Log out
              </span>
            </>
          )}
        </div>
        {/* <div className="grid grid-cols-[20%_80%] mx-auto justify-between w-[80%] items-center gap-[1rem] py-[1rem] self-end justify-self-end">
          <Image alt="user" src={user} />
          <div className="flex flex-col">
            <h4 className="text-[#202430] text-[18px] font-[600]">Jake Gyll</h4>
            <p className="text-[#202430] text-opacity-[0.5] text-[14px] font-[400]">
              jakegyll@email.com
            </p>
          </div>
        </div> */}
        {/* </div> */}
      </aside>
    </div>
  );
};

export default SideBar;
