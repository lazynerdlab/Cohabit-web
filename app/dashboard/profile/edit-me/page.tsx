import SeekerEdit2 from "@/components/editProfile/seekerEdit2";
import Header from "@/components/header/Header";
import { Suspense } from "react";

const EditMe = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-[10%_90%] max-h-screen overflow-y-scroll">
      <Header>
        <h4 className="text-[#25324B] text-[25px] font-[700]">Edit Profile</h4>
      </Header>
      <Suspense fallback={null}>
      <SeekerEdit2 />
      </Suspense>
    </div>
  );
};

export default EditMe;
