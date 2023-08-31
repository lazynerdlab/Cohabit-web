import SignUpTabs from "@/components/sign-up/signUpTabs";
import authImage from "@/assets/BG.svg";
import { ConfigProvider } from "antd";
const SignUp = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#010886",
          borderRadius: 5,
        },
      }}
    >
      <div className="grid md:grid-cols-[45%_55%] min-h-[100vh]">
        <div className="w-full bg-[#F8F8FD] md:grid grid-cols-1 hidden">
          <div
            style={{
              background: `url(${authImage.src})`,
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            className="w-full bg-[#F8F8FD] mx-auto"
          ></div>
        </div>
        <SignUpTabs />
      </div>
    </ConfigProvider>
  );
};

export default SignUp;
