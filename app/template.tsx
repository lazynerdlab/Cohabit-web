import { ConfigProvider } from "antd";
import { Ubuntu } from "next/font/google";
const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const template = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#010886",
          borderRadius: 5,
          fontFamily: ubuntu.style.fontFamily,
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default template;
