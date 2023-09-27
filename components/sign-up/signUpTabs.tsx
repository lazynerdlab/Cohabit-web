"use client";
import { useEffect, useState } from "react"
import { CustomTabs as Tabs } from "@/lib/AntDesignComponents";
import Image from "next/image";
import type { TabsProps } from "antd";
import SignUp from "./sign-up";
import Logo from "@/assets/logo.svg";
import SignUpHomeSeeker from "./sign-up-houseSeeker";
const items: TabsProps["items"] = [
  {
    key: "1",
    label: `Home Seekers`,
    children: <SignUpHomeSeeker />,
  },
  {
    key: "2",
    label: `Host`,
    children: <SignUp />,
  },
];
const SignUpTabs = () => (


  <div className="self-center justify-self-center grid grid-col-1">
    <Image className="justify-self-center h-full md:hidden" alt="" src={Logo} />
    <Tabs centered={true} defaultActiveKey="1" items={items} />
  </div>

);

export default SignUpTabs;
