"use client";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Image from "next/image";
import map from "@/assets/map.jpg";
import {
  CustomRate as Rate,
  CustomProgress as Progress,
  CustomButton as Button,
} from "@/lib/AntDesignComponents";
import RateIcon from "@/assets/icons/RateIcon";
import PropertySection2 from "./PropertySection2";

const PropertySection = () => {
  return (
    <div className="flex flex-col-reverse md:grid md:grid-cols-[75%_25%] w-full md:mt-[6rem]">
      <div>
        <div className="p-[0.5rem] border border-[#D6DDEB] px-[20px] py-[13px] flex flex-col gap-[0.3rem]">
          <h4 className="text-[#25324B] text-[16px] md:text-[24px] font-[700]">
            Description
          </h4>
          <p className="text-[12px] md:text-[16px] font-[400] text-[#515B6F]">
            Welcome to your new home! This delightful 3-bedroom house, nestled
            in a peaceful and family-friendly neighborhood, offers comfort,
            convenience, and a warm sense of community. With its appealing curb
            appeal and well-maintained exterior, this property is sure to
            capture your heart from the moment you step inside.
          </p>
        </div>
        <div className="p-[0.5rem] border border-[#D6DDEB] px-[20px] py-[13px] flex flex-col gap-[0.3rem]">
          <h4 className="text-[#25324B] text-[16px] md:text-[24px] font-[700]">
            Key Features
          </h4>
          <ol className="list-decimal list-inside">
            <li className="text-[12px] md:text-[16px] font-[400] text-[#515B6F]">
              Spacious Living Areas: The interior boasts a generous open-concept
              layout, creating an inviting and airy atmosphere. The living room
              is bathed in natural light, creating a perfect space for
              relaxation and entertainment.
            </li>
            <li className="text-[12px] md:text-[16px] font-[400] text-[#515B6F]">
              Modern Kitchen: The well-appointed kitchen is equipped with modern
              appliances, ample storage, and a breakfast bar, making meal
              preparation a breeze. Whether you're an experienced cook or just
              enjoy the occasional culinary adventure, this kitchen has
              everything you need.
            </li>
            <li className="text-[12px] md:text-[16px] font-[400] text-[#515B6F]">
              Cozy Bedrooms: The three bedrooms are thoughtfully designed to
              provide a peaceful retreat after a long day. Each room features
              comfortable space, built-in closets, and large windows that bring
              in plenty of natural light.
            </li>
            <li className="text-[12px] md:text-[16px] font-[400] text-[#515B6F]">
              Updated Bathrooms: The house boasts recently renovated bathrooms,
              featuring elegant fixtures and tasteful finishes that exude a
              spa-like ambiance.
            </li>
            <li className="text-[12px] md:text-[16px] font-[400] text-[#515B6F]">
              Pet-Friendly: Your four-legged friends are welcome here! The
              property's pet-friendly policy allows for furry companions to
              share in the comfort of your new home.
            </li>
          </ol>
        </div>
        <div className="p-[0.5rem] border border-[#D6DDEB] px-[20px] py-[13px] flex flex-col gap-[0.3rem]">
          <h4 className="text-[#25324B] text-[16px] md:text-[24px] font-[700]">
            Availability and Rental Terms
          </h4>
          <ol className="list-decimal list-inside">
            <li className="text-[12px] md:text-[16px] font-[400] text-[#515B6F]">
              Monthly Rent: NGN 70,000.
            </li>
            <li className="text-[12px] md:text-[16px] font-[400] text-[#515B6F]">
              Security Deposit: One month's rent
            </li>
            <li className="text-[12px] md:text-[16px] font-[400] text-[#515B6F]">
              Lease Duration: 12 months (flexible options available)
            </li>
            <li className="text-[12px] md:text-[16px] font-[400] text-[#515B6F]">
              You can share apartment or co-working space with someone
            </li>
          </ol>
        </div>
        <div className="p-[0.5rem] border border-[#D6DDEB] px-[20px] py-[13px] flex flex-col gap-[0.3rem]">
          <h4 className="text-[#25324B] text-[16px] md:text-[24px] font-[700]">
            Location
          </h4>
          <Image alt="map" src={map} />
        </div>
        <div className="p-[0.5rem] border border-[#D6DDEB] px-[20px] py-[13px] flex flex-col gap-[0.3rem]">
          <h4 className="text-[#25324B] text-[16px] md:text-[24px] font-[700]">
            Rating
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-[30%_70%]">
            <div className="flex md:flex-col items-center">
              <h1 className="text-[#000] font-[500] text-[32px]">4.5</h1>
              <Rate character={<RateIcon />} defaultValue={4.5} />
            </div>
            <div className="grid grid-cols-2 gap-[0.5rem]">
              <div className="flex flex-col gap-[0.5rem]">
                <h6 className="text-[#25324B] text-[16px] font-[500]">
                  Property
                </h6>
                <Progress
                  percent={80}
                  showInfo={false}
                  strokeColor={"#56CDAD"}
                />
              </div>
              <div className="flex flex-col gap-[0.5rem]">
                <h6 className="text-[#25324B] text-[16px] font-[500]">
                  Very Neat
                </h6>
                <Progress
                  percent={80}
                  showInfo={false}
                  strokeColor={"#56CDAD"}
                />
              </div>
              <div className="flex flex-col gap-[0.5rem]">
                <h6 className="text-[#25324B] text-[16px] font-[500]">
                  Location
                </h6>
                <Progress
                  percent={80}
                  showInfo={false}
                  strokeColor={"#56CDAD"}
                />
              </div>
              <div className="flex flex-col gap-[0.5rem]">
                <h6 className="text-[#25324B] text-[16px] font-[500]">
                  Good Service
                </h6>
                <Progress
                  percent={80}
                  showInfo={false}
                  strokeColor={"#56CDAD"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="p-[0.5rem] border border-[#D6DDEB] px-[20px] py-[13px] flex flex-col gap-[0.3rem]">
          <h4 className="text-[#25324B] text-[16px] md:text-[24px] font-[700]">
            Review
          </h4>
          <p className="text-[12px] md:text-[16px] font-[400] text-[#515B6F]">
            The house is conveniently situated in a peaceful neighborhood with
            easy access to local amenities such as schools, parks, shopping
            centers, and public transportation. The quiet surroundings and
            friendly neighbors make it an excellent place to call home
          </p>
        </div>
        <div className="p-[0.5rem] border border-[#D6DDEB] px-[20px] py-[13px] flex flex-col gap-[0.3rem]">
          <h4 className="text-[#25324B] text-[16px] md:text-[24px] font-[700]">
            Write a review
          </h4>
          <div className="">
            <p>leave a review</p>
            <ReactQuill theme="snow" placeholder="Message" />
            <div className="flex justify-between items-end">
              <span>
                <h4 className="text-[#25324B] text-[16px] md:text-[24px] font-[700]">
                  Rating
                </h4>
                <Rate />
              </span>
              <Button type="primary" style={{ backgroundColor: "#515B6F" }}>
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
      <PropertySection2 />
    </div>
  );
};

export default PropertySection;
