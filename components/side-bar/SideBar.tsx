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

const Title = () => <Image className="mxauto py-[0.5rem]" alt="" src={Logo} />;

const SideBar = () => {
  const [active, setActive] = useState("/dashboard");
  const path = usePathname();
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
            path === "/dashboard/message"
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
            path === "/dashboard/find-property"
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
            path === "/dashboard/profile"
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
            path === "/dashboard/settings"
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
            path === "/dashboard/help-center"
              ? "stroke-colorPrimary"
              : "stroke-[#7C8493]"
          } h-[18px]`}
        />
      ),
    ],
    [path]
  );
  useEffect(() => {
    setActive(path);
  }, [path]);
  const onClick: MenuProps["onClick"] = (e) => {
    setActive(e.key);
  };

  return (
    <div className="grid grid-cols-1 grid-rows-[10%_75%_15%] border-solid border-r-[1px] border-[#D6DDEB] bg-[#F8F8FD] max-h-screen overflow-y-hidden">
      <Title />
      <Menu
        onClick={onClick}
        defaultSelectedKeys={[active]}
        selectedKeys={[active]}
        items={items}
      />
      <div className="grid grid-cols-[20%_80%] mx-auto items-center gap-[1rem] py-[1rem]">
        <Image alt="user" src={user} />
        <div className="flex flex-col">
          <h4 className="text-[#202430] text-[18px] font-[600]">Jake Gyll</h4>
          <p className="text-[#202430] text-opacity-[0.5] text-[14px] font-[400]">
            jakegyll@email.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
