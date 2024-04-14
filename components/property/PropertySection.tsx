"use client";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { CustomButton as Button } from "@/lib/AntDesignComponents";
import RateIcon from "@/assets/icons/RateIcon";
import PropertySection2 from "./PropertySection2";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  useCreateListingReviewMutation,
  useGetListingRatingQuery,
  useGetListingReviewQuery,
} from "@/redux/api/houseApi";
import { useEffect, useState } from "react";
import { Spinner } from "../spinner/Spinner";
import { SET_PROPERTY_LOADING } from "@/redux/slice/propertySlice";
import { message, Rate } from "antd";

const PropertySection = () => {
  const propertyData = useAppSelector((state) => state.propertyData?.property);
  const loading = useAppSelector((state) => state.propertyData?.loading);
  const you = useAppSelector((state) => state.userData?.user?.data?.user);


  const dispatch = useAppDispatch();

  const {
    data: ratingData,
    isSuccess,
    isLoading,
  } = useGetListingRatingQuery(propertyData?.id);

  const {
    data: reviewData,
     refetch: refetchReview,
    isSuccess: reviewSuccess,
    isLoading: reviewIsLoading,
  } = useGetListingReviewQuery(propertyData?.id);

  const [rating, setRating] = useState<number>(0);
  const [data, setData] = useState<Record<string, any>>({});

  const [reviewRating, setReviewRating] = useState<number>();
  const [review, setReview] = useState<Record<string, any>[]>([]);
  const [reviewComment, setReviewComment] = useState<string>();

  let Aname = you?.firstname + ' ' + you?.lastname;
  const userNames = review?.map((e) => e?.user?.firstname + ' ' + e?.user?.lastname);
  const exists = userNames.includes(Aname);

  const [
    createListingReview,
    {
      //data: dataRes,
      isLoading: loadingReview,
      isSuccess: successReview,
      isError: isErrorReview,
      error: errorReview,
    },
  ] = useCreateListingReviewMutation();
  const onSubmitReview = async () => {
    if (!reviewRating || !reviewComment) {
      message.error("All fields are required");
      return;
    }
    if (reviewRating && reviewComment) {
      await createListingReview({
        rating: reviewRating,
        review: reviewComment,
        apartment_id: propertyData?.id,
      });
    }
    // After successfully submitting the review, refetch the review data
    refetchReview();
  };

  useEffect(() => {
    if (isSuccess) {
      setRating(ratingData?.data?.averageRating);
    }
    if (reviewSuccess) {
      setReview(reviewData?.data);
    }

    if (data) {
      setData(propertyData);
      dispatch(SET_PROPERTY_LOADING(false));
    }
    if (isErrorReview && typeof errorReview !== 'undefined') {
      if ('data' in errorReview) {
        console.error(errorReview.data);
      } else {
        console.log(errorReview);
      }
    }
    if (successReview) {
      message.success("Review submitted successfully!");
      setReviewRating(0);
      setReviewComment("");
    }


  }, [
    data,
    dispatch,
    errorReview,
    isErrorReview,
    isSuccess,
    propertyData,
    ratingData,
    reviewSuccess,
    reviewData,

  ]);
  const removeHTMLTags = (str: string) => {
    if (typeof str === "string") {
      return str.replace(/<[^>]*>/g, "");
    }
    return "";
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col-reverse md:grid md:grid-cols-[75%_25%] w-full md:mt-[1rem]">
          <div className="flex flex-col">
            <div className="p-[0.5rem] border border-[#D6DDEB] px-[20px] py-[13px] flex flex-col gap-[0.3rem]">
              <h4 className="text-[#25324B] text-[16px] md:text-[24px] font-[700]">
                Description
              </h4>
              <p className="text-[12px] md:text-[16px] font-[400] text-[#515B6F]">
                {removeHTMLTags(data?.description)}
              </p>
            </div>
            <div className="p-[0.5rem] border border-[#D6DDEB] px-[20px] py-[13px] flex flex-col gap-[0.3rem]">
              <h4 className="text-[#25324B] text-[16px] md:text-[24px] font-[700]">
                Key Features
              </h4>
              <ol className="list-decimal list-inside">
                <li className="text-[12px] md:text-[16px] font-[400] text-[#515B6F]">
                  {removeHTMLTags(data?.features)}
                </li>
              </ol>
            </div>
            <div className="p-[0.5rem] border border-[#D6DDEB] px-[20px] py-[13px] flex flex-col gap-[0.3rem]">
              <h4 className="text-[#25324B] text-[16px] md:text-[24px] font-[700]">
                Availability and Rental Terms
              </h4>
              <ol className="list-decimal list-inside">
                <li className="text-[12px] md:text-[16px] font-[400] text-[#515B6F]">
                  {data?.terms}
                </li>
              </ol>
            </div>
            <div className="p-[0.5rem] border border-[#D6DDEB] px-[20px] py-[13px] flex flex-col gap-[0.3rem]">
              <h4 className="text-[#25324B] text-[16px] md:text-[24px] font-[700]">
                Location
              </h4>
              {data?.location}
            </div>
            <div className="p-[0.5rem] border border-[#D6DDEB] px-[20px] py-[13px] flex flex-col gap-[0.3rem]">
              <h4 className="text-[#25324B] text-[16px] md:text-[24px] font-[700]">
                Rating
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-[30%_70%]">
                {isLoading ? (
                  <Spinner />
                ) : (
                  <div className="flex md:flex-col items-center">
                    <h1 className="text-[#000] font-[500] text-[32px]">
                      {String(rating).slice(0, 3)}
                    </h1>
                    <Rate value={rating} className="text-[26px]" />
                  </div>
                )}
              </div>
            </div>
            <div className="p-[0.5rem] border border-[#D6DDEB] px-[20px] py-[13px] flex flex-col gap-[0.3rem] overflow-y-scroll max-h-[200px] h-full">
              <h4 className="text-[#25324B] text-[16px] md:text-[24px] font-[700]">
                Reviews
              </h4>

              {
                reviewIsLoading ? <Spinner /> :
                  review.length > 0 ?
                    review?.map((e, index) => (
                      <div key={index} className=" mb-3">
                        <h3 className=" font-semibold text-sm UserName">{e?.user?.firstname + ' ' + e?.user?.lastname}</h3>
                        <p className="text-[12px] md:text-[16px] font-[400] text-[#515B6F]">
                          {removeHTMLTags(e?.review)}
                        </p>
                      </div>
                    ))
                    :
                    <h1>No reviews </h1>
              }

            </div>
            <div className={`p-[0.5rem] border border-[#D6DDEB] px-[20px] py-[13px] flex flex-col gap-[0.3rem] Review ${successReview || exists ? 'hidden' : ''}`}>
              <h4 className="text-[#25324B] text-[16px] md:text-[24px] font-[700]">
                Write a review
              </h4>
              <div className="">
                <p>leave a review</p>
                <ReactQuill
                  theme="snow"
                  placeholder="Message"
                  value={reviewComment}
                  onChange={setReviewComment}
                />
                <div className="flex justify-between items-end">
                  <span>
                    <h4 className="text-[#25324B] text-[16px] md:text-[24px] font-[700]">
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
          <PropertySection2 />
        </div>
      )}
    </>
  );
};

export default PropertySection;
