import {
  CustomPasswordInput as Input,
  AuthButton as Button,
} from "@/lib/AntDesignComponents";
const CreatePassword = () => {
  return (
    <div className="grid grid-cols-1 gap-[0.5rem] m-auto w-[60%]">
      <div className="text-center text-gray-900 text-[32px] font-bold leading-[38.40px]">
        Password
      </div>
      <div className="text-center text-neutral-500 text-lg font-normal leading-[28.80px]">
        Create your password
      </div>
      <form className="grid grid-cols-1 gap-[1.5rem]">
        <div className="w-full mx-auto flex flex-col items-start justify-start gap-[0.3rem]">
          <label
            htmlFor="password"
            className="text-slate-900 text-base font-bold leading-relaxed"
          >
            Create Password
          </label>
          <Input
            type="password"
            placeholder="This is a placeholder"
            id="email"
          />
        </div>
        <div className="w-full mx-auto flex flex-col items-start justify-start gap-[0.3rem]">
          <label
            htmlFor="ConfirmPassword"
            className="text-slate-900 text-base font-bold leading-relaxed"
          >
            Confirm Password
          </label>
          <Input
            type="password"
            placeholder="This is a placeholder"
            id="ConfirmPassword"
          />
        </div>
        <Button style={{ backgroundColor: "#010886" }} type="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CreatePassword;
