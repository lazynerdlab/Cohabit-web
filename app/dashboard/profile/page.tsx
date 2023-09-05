import Header from "@/components/header/Header";
import Profile from "@/components/profile/Profile";
import Registry from "../registry";

const page = () => {
  return (
    <Registry>
      <div className="grid grid-cols-1 grid-rows-[10%_90%] max-h-screen overflow-y-scroll">
        <Header>
          <h4 className="text-[#25324B] text-[25px] font-[700]">My Profile</h4>
        </Header>
        <Profile />
      </div>
    </Registry>
  );
};

export default page;
