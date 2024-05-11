"use client";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import {
  CustomButton as Button,
  CustomRate as Rate,
} from "@/lib/AntDesignComponents";
import { useCreateHostReviewMutation } from "@/redux/api/seekerApi";
import { useEffect, useState } from "react";
import { message } from "antd";
import { useRouter } from "next/navigation";
import { Spinner } from "@/components/spinner/Spinner";
import { SET_CURRENT_CHAT } from "@/redux/slice/chatSlice";
import { useAppSelector, useAppDispatch } from "@/redux/hook";

interface Props {
  data?: Record<string, any>;
  ratingLoading: boolean
  ratingSuccess: boolean
  hostId: string | null
  refetch: () => void;
}

const ViewHostSection = ({ data, ratingLoading, ratingSuccess, hostId, refetch }: Props) => {
  const [rating, setRating] = useState<number>(0);
  const [reviewRating, setReviewRating] = useState<number>();
  const [review, setReview] = useState<Record<string, any>[]>([]);
  const [reviewComment, setReviewComment] = useState<string>();


  const [
    createHostReview,
    {
      //data: dataRes,
      isLoading: loadingReview,
      isSuccess: successReview,
      isError: isErrorReview,
      error: errorReview,
    },
  ] = useCreateHostReviewMutation();
  const onSubmitReview = async () => {
    if (!reviewRating || !reviewComment) {
      message.error("All fields are required");
      return;
    }
    if (reviewRating && reviewComment) {
      await createHostReview({
        rating: reviewRating,
        review: reviewComment,
        host_id: hostId,
      }).unwrap()
        .then((res) => {
          if (res?.message === 'u have posted a review already') {
            message.warning('you have posted a review already')
            return;
          }
          message.success("Review submitted successfully!");
          refetch();
        });
    }
    // After successfully submitting the review, refetch the review data
    //refetchReview();
  };

  useEffect(() => {

    if (ratingSuccess) {
      setReview(data?.host_reviews);
      setRating(data?.host_avg_rating);
    }
    if (isErrorReview) {
      message.error("Failed to submit review!");
    }
    if (successReview) {

      setReviewRating(0);
      setReviewComment("");
    }
  }, [ratingSuccess, data, successReview, isErrorReview])

  const removeHTMLTags = (str: string) => {
    if (typeof str === "string") {
      return str.replace(/<[^>]*>/g, "");
    }
    return "";
  };

  const router = useRouter(); // Initialize useRouter
  const dispatch = useAppDispatch();

  async function handleMessageClick() {
    const payload = {
      messageId: data?.host_reviews?.id,
      messageName: data?.host_reviews?.name,
      avatarM: data?.host_reviews?.image,
      userTypeM: "Host"
    };
    try {
      dispatch(SET_CURRENT_CHAT(payload))
      localStorage.setItem("messageid", payload.messageId)
      localStorage.setItem("messageName", payload.messageName)
      // console.log(payload.messageId)
      router.push("/dashboard/message");
    } catch (error) {
      console.error("Error setting current chat:", error);
    }
  }


  return (
    <div className="flex flex-col-reverse md:grid grid-cols-[60%_40%]">
      <div className="flex flex-col gap-[0.3rem]">
        <div className="p-[0.5rem] border border-[#D6DDEB] px-[10px] md:px-[20px] py-[6px] md:py-[13px] flex flex-col gap-[0.3rem]">
          <div className=" mt-5">
            <h4 className="text-[#25324B] text-[18px] md:text-[24px] font-[700]">
              Avg. Rating
            </h4>
            <Rate value={rating} />
          </div>
          <div className=" overflow-y-scroll noscroll-bar max-h-[200px] h-full">
          <h4 className="text-[#25324B] text-[18px] md:text-[24px] font-[700] mt-5">
            Review
          </h4>

          {
            ratingLoading ? <Spinner /> :
              review?.length > 0 ?
                review?.map((e, index) => (
                  <div key={index} className=" mb-3">
                    <h3 className=" font-semibold text-sm UserName">{e?.user?.firstname + ' ' + e?.user?.lastname}</h3>
                    <p className="text-[12px] md:text-[16px] font-[400] text-[#515B6F] flex gap-5">
                      {removeHTMLTags(e?.review)} <Rate value={e?.rating} />
                    </p>
                  </div>
                ))
                :
                <h1>No reviews </h1>
          }
         </div>

        </div>
        <div className="p-[0.5rem] border border-[#D6DDEB] px-[20px] py-[13px] flex flex-col gap-[0.3rem]">
          <h4 className="text-[#25324B] text-[18px] md:text-[24px] font-[700]">
            Write a review
          </h4>
          <div className="">
            <p>leave a review</p>
            <ReactQuill
              className="w-full"
              theme="snow"
              placeholder="Message"
              value={reviewComment}
              onChange={setReviewComment}
            />
            <div className="flex justify-between items-end">
              <span>
                <h4 className="text-[#25324B] text-[24px] font-[700]">
                  Rating
                </h4>
                <Rate value={reviewRating} onChange={setReviewRating} />
              </span>
              <Button
                type="primary"
                disabled={loadingReview}
                className="!bg-[#515B6F]"
                onClick={onSubmitReview}
              >
                {loadingReview ? "Submitting" : "Submit"}
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
          <p>{data?.host_details?.firstname} Last Active 10Hours Ago</p>
          <Button className="!bg-[#010886]" type="primary" onClick={handleMessageClick}>
            Message
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ViewHostSection;
