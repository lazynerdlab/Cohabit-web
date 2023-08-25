import SideBar from "@/components/side-bar/SideBar";
import { ConfigProvider } from "antd";
type children = {
  children: React.ReactNode;
};
const Registry = ({ children }: children) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#010886",
          borderRadius: 5,
        },
      }}
    >
      <div className="grid grid-cols-[20%_80%] min-h-screen max-h-screen overflow-hidden">
        <SideBar />
        {children}
      </div>
    </ConfigProvider>
  );
};

export default Registry;
