"use client";

import { useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Spinner } from "../spinner/Spinner";

interface IProps {
  isLoading: boolean
  data: Record<string, any>
}

const BarCharts = ({ isLoading, data }: IProps) => {

  return (
    <>
      {
        isLoading ? <Spinner /> : <ResponsiveContainer width="100%" height="100%">
          <BarChart
            // width={800}
            // height={}
            data={data?.barchart}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            {/* <YAxis /> */}
            <Tooltip />
            <Legend />
            <Bar dataKey="house_review" stackId="a" fill="#DF8026" />
            <Bar dataKey="house_rented" stackId="a" fill="#010886" />
          </BarChart>
        </ResponsiveContainer>
      }
    </>
  );
};

export default BarCharts;
