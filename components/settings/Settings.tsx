import type { TabsProps } from "antd";
import { CustomTabs as Tabs } from "@/lib/AntDesignComponents";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "My Profile",
    children: <Tab1 />,
  },
  {
    key: "2",
    label: `Login Details`,
    children: <Tab2 />,
  },
];

const Settings = () => {

  return (
    <div className="w-[98%] mx-auto py-[1rem]">
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
};

export default Settings;
