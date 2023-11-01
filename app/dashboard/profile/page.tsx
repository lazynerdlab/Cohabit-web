import Header from "@/components/header/Header";
import Profile from "@/components/profile/Profile";
import { ReduxProvider } from "@/redux/provider";

const page = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-[10%_90%] max-h-screen overflow-y-scroll">
      <Header>
        <h4 className="text-[#25324B] text-[25px] font-[700]">My Profile</h4>
      </Header>
      <Profile />
    </div>
  );
};

export default page;
