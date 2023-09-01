import {
  RadioGroup,
  CustomRadio as Radio,
  CustomInputNumber as InputNumber,
  CustomSelect as Select,
} from "@/lib/AntDesignComponents";

const Step2 = () => {
  const options = [
    {
      value: "1",
      label: "Not Identified",
    },
    {
      value: "2",
      label: "Closed",
    },
    {
      value: "3",
      label: "Communicated",
    },
    {
      value: "4",
      label: "Identified",
    },
    {
      value: "5",
      label: "Resolved",
    },
    {
      value: "6",
      label: "Cancelled",
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-[0.5rem] w-[98%] mx-auto">
      <div className="flex flex-col items-start gap-[0.2rem] border-b border-[#D6DDEB]">
        <h4 className="text-[18px] font-[700] text-[#202430]">
          Basic Information
        </h4>
        <p className="text-[16px] font-[400] text-[#515B6F]">
          This information will be displayed publicly.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[40%_60%] items-center gap-[1rem] border-b border-[#D6DDEB] py-[0.5rem]">
        <div className="flex flex-col items-start self-start gap-[0.2rem]">
          <h4 className="text-[16px] font-[500] text-[#25324B]">
            Type of Apartment
          </h4>
          <p className="text-[16px] font-[400] text-[#515B6F]">
            You can select type of apartment
          </p>
        </div>
        <div className="flex items-center justify-start justify-self-start gap-[1rem] w-full md:w-[80%] mx-auto">
          <RadioGroup>
            <div className="flex flex-col gap-[0.3rem]">
              <Radio value={1}>
                <p className="text-[#515B6F] text-[16px] font-[400]">
                  Bungalow
                </p>
              </Radio>
              <Radio value={2}>
                <p className="text-[#515B6F] text-[16px] font-[400]">Duplex</p>
              </Radio>
              <Radio value={3}>
                <p className="text-[#515B6F] text-[16px] font-[400]">
                  Self-Contain
                </p>
              </Radio>
              <Radio value={4}>
                <p className="text-[#515B6F] text-[16px] font-[400]">
                  2 Bedroom Apartment
                </p>
              </Radio>
              <Radio value={5}>
                <p className="text-[#515B6F] text-[16px] font-[400]">
                  3 Bedroom Apartment
                </p>
              </Radio>
            </div>
          </RadioGroup>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[40%_60%] items-center gap-[1rem] border-b border-[#D6DDEB] py-[0.5rem]">
        <div className="flex flex-col items-start gap-[0.2rem]">
          <h4 className="text-[16px] font-[500] text-[#25324B]">Amount</h4>
          <p className="text-[16px] font-[400] text-[#515B6F]">
            Please specify the estimated Amount range for the Apartment *You can
            leave this blank
          </p>
        </div>
        <div className="flex justify-start w-full md:w-[80%] mx-auto">
          <InputNumber
            className="w-[70%]"
            style={{
              width: "80%",
            }}
            prefix={<p>N</p>}
            controls={false}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[40%_60%] items-center gap-[1rem] border-b border-[#D6DDEB] py-[0.5rem]">
        <div className="flex flex-col items-start gap-[0.2rem]">
          <h4 className="text-[16px] font-[500] text-[#25324B]">
            Number of slot
          </h4>
          <p className="text-[16px] font-[400] text-[#515B6F]">
            List the number of people you want in an apartment
          </p>
        </div>
        <div className="flex items-center gap-[1rem] w-full md:w-[80%] mx-auto">
          <InputNumber controls />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[40%_60%] items-start gap-[0.5rem] py-[0.5rem]">
        <div className="flex flex-col items-start gap-[0.2rem]">
          <h4 className="text-[16px] font-[500] text-[#25324B]">Location</h4>
          <p className="text-[16px] font-[400] text-[#515B6F]">
            You can select apartment location
          </p>
        </div>
        <div className="w-full md:w-[80%] mx-auto">
          <div className="w-full mx-auto flex flex-col items-start justify-start gap-[0.5rem]">
            <label
              htmlFor="status"
              className="text-[#0C1938] text-[16px] font-[700]"
            >
              Select Apartment Location
            </label>
            <Select
              className="w-full"
              style={{
                width: "100%",
                height: "100%",
              }}
              id="status"
              options={options}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
