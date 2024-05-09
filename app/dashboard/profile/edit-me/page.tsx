import SeekerEdit2 from "@/components/editProfile/seekerEdit2";
import Header from "@/components/header/Header";

const Page = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-[10%_90%] max-h-screen overflow-y-scroll">
      <div className=" p-4">
        <h4 className="text-[#25324B] text-[25px] font-[700]">Edit Profile</h4>
        </div>
      <SeekerEdit2 />
    </div>
  );
};

export default Page;
