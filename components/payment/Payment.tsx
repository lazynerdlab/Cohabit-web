import type { TabsProps } from "antd";
import { CustomTabs as Tabs } from "@/lib/AntDesignComponents";
import Card from "./Card";
import Transfer from "./Transfer";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Card",
    children: <Card />,
  },
  {
    key: "2",
    label: `Bank Transfer`,
    children: <Transfer />,
  },
];

const Payment = () => {
  return (
    <div className="w-[98%] mx-auto py-[1rem] items-start">
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
};

export default Payment;
