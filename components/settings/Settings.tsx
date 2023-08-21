import type { TabsProps } from "antd";
import { CustomTabs as Tabs } from "@/lib/AntDesignComponents";
import Tab1 from "./Tab1";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "My Profile",
    children: <Tab1 />,
  },
  {
    key: "2",
    label: `Login Details`,
    children: `Content of Tab Pane 2`,
  },
];

const Settings = () => {
  return <Tabs defaultActiveKey="1" items={items} />;
};

export default Settings;
