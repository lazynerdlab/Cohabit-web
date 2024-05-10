import Header from "@/components/header/Header";
import FindProperty from "@/components/find-property/FindProperty";

const Page = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-[12%_88%] max-h-screen overflow-y-scroll">
      <Header>
        <h4 className="text-[#25324B] text-[18px] md:text-[25px] font-[700]">
          Find Property
        </h4>
      </Header>
      <FindProperty />
    </div>
  );
};

export default Page;
