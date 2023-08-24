"use client";
import SignIn from "@/components/sign-in/sign-in";
import authImage from "@/assets/BG.svg";

const Login = () => {
  return (
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
  );
};

export default Login;
