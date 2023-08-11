"use client";
import { useState } from "react";
import { Steps } from "antd";
import Step1 from "./steps/Step1";

const description = "This is a description.";
const UserOnboarding = () => {
  const [current, setCurrent] = useState(0);
  return (
    <div className="w-full h-full">
      <Steps
        current={1}
        items={[
          {
            title: "Finished",
            description,
            content: <Step1 />,
          },
          {
            title: "In Progress",
            description,
            subTitle: "Left 00:00:08",
          },
          {
            title: "Waiting",
            description,
          },
        ]}
      />
      <div></div>
    </div>
  );
};

export default UserOnboarding;
