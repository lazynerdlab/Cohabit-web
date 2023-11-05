"use client";
import { useGetHostBarChartQuery } from "@/redux/api/hostApi";
import { useEffect, useState } from "react";
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

const data = [
  {
    name: "January",
    house_rented: 4000,
    house_view: 2400,
    // amt: 2400,
  },
  {
    name: "February",
    house_rented: 3000,
    house_view: 1398,
    // amt: 2210,
  },
  // {
  //   name: "Page C",
  //   uv: 2000,
  //   pv: 9800,
  //   amt: 2290,
  // },

  // {
  //   name: "Page G",
  //   uv: 3490,
  //   pv: 4300,
  //   amt: 2100,
  // },
];


const BarCharts = () => {

  const [timeFrame, setTimeFrame] = useState<string>("monthly")
  const [statsData, setStatsData] = useState<Record<string, any>>({})
  const { data: stats, isLoading, isSuccess } = useGetHostBarChartQuery({
    timeframe: timeFrame
  })
  useEffect(() => {
    if (isSuccess) {
      setStatsData(stats?.data);
    }
  }, [isSuccess, stats])

  return (
    <>
      {
        isLoading ? <Spinner /> : <ResponsiveContainer width="100%" height="100%">
          <BarChart
            // width={800}
            // height={}
            data={data}
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
            <Bar dataKey="house_view" stackId="a" fill="#DF8026" />
            <Bar dataKey="house_rented" stackId="a" fill="#010886" />
          </BarChart>
        </ResponsiveContainer>
      }
    </>
  );
};

export default BarCharts;
