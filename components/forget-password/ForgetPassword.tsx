import {
  CustomInput as Input,
  AuthButton as Button,
} from "@/lib/AntDesignComponents";
const ForgetPassword = () => {
  return (
    <div className="grid grid-cols-1 gap-[1rem] m-auto items-center w-[90%] md:w-[60%]">
      <div className="text-center text-gray-900 text-[32px] font-bold leading-[38.40px]">
        Forget Password
      </div>
      <div className="text-center text-neutral-500 text-lg font-normal leading-[28.80px]">
        Enter the email associated with your account and we’ll send an email
        with instraction to reset your Password
      </div>
      <form className="grid grid-cols-1 gap-[1.5rem]">
        <div className="w-full mx-auto flex flex-col items-start justify-start gap-[0.3rem]">
          <label
            htmlFor="email"
            className="text-slate-900 text-base font-bold leading-relaxed"
          >
            Email Address
          </label>
          <Input type="email" placeholder="This is a placeholder" id="email" />
        </div>
        <Button style={{ backgroundColor: "#010886" }} type="primary">
          Send Instruction
        </Button>
      </form>
    </div>
  );
};

export default ForgetPassword;
