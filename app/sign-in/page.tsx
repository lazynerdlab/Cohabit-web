import SignIn from "@/components/sign-in/sign-in";
import authImage from "@/assets/BG.svg";
import { ConfigProvider } from "antd";

const Login = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#010886",
          borderRadius: 5,
        },
      }}
    >
      <div className="grid grid-cols-[45%_55%] min-h-[100vh]">
        <div className="w-full bg-[#F8F8FD] grid grid-cols-1">
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
        <SignIn />
      </div>
    </ConfigProvider>
  );
};

export default Login;
