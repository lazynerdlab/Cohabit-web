import Header from "@/components/header/Header";
import DashBoard from "@/components/dashboard/DashBoard";

const Page = () => {
  return (
    <div
      className="grid grid-cols-1 grid-rows-[10%_90%] max-h-screen 3xl:max-w-[1600px] 3xl:mx-auto 3
        xl:shadow-md"
    >
      <Header>
        <h4 className="text-[#25324B] text-[18px] md:text-[25px] font-[700]">
          Dashboard
        </h4>
      </Header>
      <DashBoard />
    </div>
  );
};

export default Page;
