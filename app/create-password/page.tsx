"use client";
import authImage from "@/assets/BG.svg";
import CreatePassword from "@/components/create-password/CreatePassword";

const ResetPassword = () => {
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
      <CreatePassword />
    </div>
  );
};

export default ResetPassword;
