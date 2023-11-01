"use client";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import {
  CustomButton as Button,
  CustomRate as Rate,
} from "@/lib/AntDesignComponents";

const ViewHostSection = () => {

  return (
    <div className="flex flex-col-reverse md:grid grid-cols-[60%_40%]">
      <div className="flex flex-col gap-[0.3rem]">
        <div className="p-[0.5rem] border border-[#D6DDEB] px-[10px] md:px-[20px] py-[6px] md:py-[13px] flex flex-col gap-[0.3rem]">
          <h4 className="text-[#25324B] text-[18px] md:text-[24px] font-[700]">
            Review
          </h4>
          <Rate value={4} />
          <p className="text-[12px] md:text-[16px] font-[400] text-[#515B6F]">
            He is so polite and respectful, he gave me so much atentions.
          </p>
        </div>
        <div className="p-[0.5rem] border border-[#D6DDEB] px-[20px] py-[13px] flex flex-col gap-[0.3rem]">
          <h4 className="text-[#25324B] text-[18px] md:text-[24px] font-[700]">
            Write a review
          </h4>
          <div className="">
            <p>leave a review</p>
            <ReactQuill className="w-full" theme="snow" placeholder="Message" />
            <div className="flex justify-between items-end">
              <span>
                <h4 className="text-[#25324B] text-[24px] font-[700]">
                  Rating
                </h4>
                <Rate />
              </span>
              <Button type="primary" className="!bg-[#515B6F]">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[98%] h-fit mx-auto border border-[#D6DDEB] rounded-[10px] flex flex-col">
        <div className="bg-[#9CA9F9] p-[0.5rem] md:p-[1rem] rounded-t-[10px]">
          <p className="text-[16px] font-[400]">Feel free to contact</p>
        </div>
        <div className="p-[1rem] md:p-[2rem] flex flex-col items-center gap-[1rem]">
          <p>Thomas Last Active 10Hours Ago</p>
          <Button className="!bg-[#010886]" type="primary">
            Message
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ViewHostSection;
