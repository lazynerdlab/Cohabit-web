import UserOnboarding from "@/components/user-onboarding/UserOnboarding";
import { ConfigProvider } from "antd";

const Page = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#010886",
          borderRadius: 5,
        },
      }}
    >
      <UserOnboarding />
    </ConfigProvider>
  );
};

export default Page;
