import { CustomButton as Button } from "@/lib/AntDesignComponents";
import EditIcon from "@/assets/icons/EditIcon";
import EmailIcon from "@/assets/icons/EmailIcon";
import PhoneIcon from "@/assets/icons/PhoneIcon";
import LanguageIcon from "@/assets/icons/LanguageIcon";

const ProfileSection2 = () => {
  return (
    <div className="flex flex-col gap-[0.5rem] w-full md:w-[95%] mx-auto">
      <div className="py-[1rem] border border-[#D6DDEB] px-[20px] flex flex-col gap-[0.3rem]">
        <span className="flex items-center gap-[0.5rem]">
          <h4 className="text-[#25324B] text-[20px] font-[700]">
            Additional Details
          </h4>
          <Button icon={<EditIcon className="fill-colorPrimary" />} />
        </span>
        <div className="grid grid-cols-[15%_85%] gap-[0.2rem]">
          <EmailIcon className="self-start" />
          <span className="flex flex-col gap-[0.3rem] text-[16px] font-[400]">
            <h5 className="text-[#7C8493]">Email</h5>
            <p className="text-[#25324B]">jakegyll@email.com</p>
          </span>
        </div>
        <div className="grid grid-cols-[15%_85%] gap-[0.2rem]">
          <PhoneIcon className="self-start" />
          <span className="flex flex-col gap-[0.3rem] text-[16px] font-[400]">
            <h5 className="text-[#7C8493]">Phone</h5>
            <p className="text-[#25324B]">+44 1245 572 135</p>
          </span>
        </div>
        <div className="grid grid-cols-[15%_85%] gap-[0.2rem]">
          <LanguageIcon className="self-start" />
          <span className="flex flex-col gap-[0.3rem] text-[16px] font-[400]">
            <h5 className="text-[#7C8493]">Languages</h5>
            <p className="text-[#25324B]">English, French</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection2;
