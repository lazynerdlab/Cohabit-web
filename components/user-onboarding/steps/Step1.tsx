import { RadioButton, RadioGroup } from "@/lib/AntDesignComponents";
import { data } from "../radioDummy";

const Step1 = () => {
  return (
    <div className="grid grid-cols-1 gap-[1rem] w-full">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-[0.5rem]">
          <h3 className="text-center text-zinc-900 text-2xl font-bold leading-[28.80px]">
            Enter your preference
          </h3>
          <p className="text-neutral-500 text-base font-medium leading-relaxed">
            Please pick your choice
          </p>
        </div>
        <div className="rounded-[30px] bg-red-400 bg-opcity-20 justify-center items-center">
          <span className="text-[#7F4433] font-[700] text-[18px] text-center">
            Step 1/2
          </span>
        </div>
      </div>
      <div className="bg-[#E7F6FD] bg-opacity-[0.4] grid grid-cols-1 w-[100vw]">
        <div>
          <h4 className="text-center text-zinc-900 text-xl font-medium leading-normal">
            Select your categories
          </h4>
          <div className="grid grid-cols-7 justify-between items-center">
            {data.map((e, i) => (
              <RadioButton value={e.value} />
            ))}
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
      <div></div>
    </div>
  );
};

export default Step1;
