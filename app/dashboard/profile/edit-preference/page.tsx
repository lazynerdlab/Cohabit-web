import SeekerEdit1 from "@/components/editProfile/seekerEdit1";
import Header from "@/components/header/Header";

const Preference = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-[10%_90%] max-h-screen overflow-y-scroll">
      <Header>
        <h4 className="text-[#25324B] text-[25px] font-[700]">Edit Profile</h4>
      </Header>
      <SeekerEdit1 />
    </div>
  );
};

export default Preference;
