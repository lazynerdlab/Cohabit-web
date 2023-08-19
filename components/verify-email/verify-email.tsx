import {
  CustomInput as Input,
  AuthButton as Button,
} from "@/lib/AntDesignComponents";

const VerifyEmailForm = () => {
  return (
    <div className="grid grid-cols-1 gap-[1rem] m-auto items-center w-[60%]">
      <div className="text-center text-gray-900 text-[32px] font-bold leading-[38.40px]">
        Verify your Email
      </div>
      <div className="text-center text-neutral-500 text-lg font-normal leading-[28.80px]">
        Please fill the code to confirm your email
      </div>
      <form className="grid grid-cols-1 gap-[1.5rem]">
        <div className="w-full mx-auto flex flex-col items-start justify-start gap-[0.3rem]">
          <label
            htmlFor="code"
            className="text-slate-900 text-base font-bold leading-relaxed"
          >
            Enter verification Code
          </label>
          <Input
            // className="px-[16px] py-[12px]"
            placeholder="This is a placeholder"
            id="code"
          />
        </div>
        <Button type="primary">verify</Button>
      </form>
      <div className="flex justify-start items-center gap-[0.5rem]">
        <h3 className="text-neutral-500 text-base font-normal leading-relaxed">
          Didn’t get the code?
        </h3>
        <div className="text-center text-cyan-900 text-base font-semibold leading-normal">
          Click Resend
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailForm;
