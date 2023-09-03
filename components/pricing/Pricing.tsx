import BasicCard from "./cards/BasicCard";
import StandardCard from "./cards/StandardCard";
import EnterpriseCard from "./cards/EnterpriseCard";

const Pricing = () => {
  return (
    <div className="w-[98%] mx-auto border-t border-x rounded-[8px] border-[#D6DDEB] p-[5%] grid grid-cols-1 md:grid-cols-3 justify-center items-stretch gap-[1rem] mt-[0.5rem]">
      <BasicCard />
      <StandardCard />
      <EnterpriseCard />
    </div>
  );
};

export default Pricing;
