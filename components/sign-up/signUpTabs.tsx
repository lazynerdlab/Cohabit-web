import React from "react";
import { CustomTabs as Tabs } from "@/lib/AntDesignComponents";
import type { TabsProps } from "antd";
import SignUp from "./sign-up";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: `Home Seekers`,
    children: <SignUp />,
  },
  {
    key: "2",
    label: `Host`,
    children: <SignUp />,
  },
];

const SignUpTabs = () => (
  <Tabs centered={true} defaultActiveKey="1" items={items} />
);

export default SignUpTabs;
