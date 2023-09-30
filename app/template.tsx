import { ConfigProvider } from "antd";

const template = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#010886",
          borderRadius: 5,
          fontFamily: "ubuntu",
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default template;
