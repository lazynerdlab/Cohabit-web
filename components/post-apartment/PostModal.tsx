"use client";
import HomeIcon from "@/assets/icons/HomeIcon";
import {
  CustomModal as Modal,
  AuthButton as Button,
} from "@/lib/AntDesignComponents";
import { useRouter } from "next/navigation";

type modalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const PostModal = ({ open, setOpen }: modalProps) => {
  const { push } = useRouter();
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <Modal
      open={open}
      title={null}
      closeIcon={<></>}
      closable
      onCancel={handleCancel}
    >
      <div className="bg-opacity-[0.4] grid grid-cols-1 gap-[1rem] py-[2%]">
        <div className="bg-[#FFF] m-auto rounded-[15px]">
          <div className="grid grid-cols-1 gap-[1rem] items-center justify-center mx-auto">
            <HomeIcon className="block mx-auto" />
            <h3 className="text-[#1E5156] text-[32px] font-bold leading-[38.40px] text-center">
              Post Successful !
            </h3>
            <span className="text-center text-[#7C8493] text-lg font-normal leading-[28.80px]">
              The apartment you posted will be verified .
            </span>
            <Button
              style={{ backgroundColor: "#010886" }}
              onClick={() => push("/dashboard/host/house-listing/1")}
              type="primary"
            >
              Let’s go!
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PostModal;
