"use client";
import HomeCard from "../cards/HomeCard";
import { CustomPagination as Pagination } from "@/lib/AntDesignComponents";
import { useGetHostListingQuery } from "@/redux/api/hostApi";
import { useEffect, useState } from "react";
import { Spinner } from "../spinner/Spinner";
import { message } from "antd";

const HouseListings = () => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [path] = useState(`hosts/apartment?count=${rowsPerPage}&page=${page}`);
  const [listingData, setListingData] = useState<Record<string, any>[]>([]);
  const { data, isSuccess, isLoading, isError, error } = useGetHostListingQuery(
    { path }
  );
  const [loading, setLoading] = useState(isLoading);

  useEffect(() => {
    if (isSuccess) {
      setLoading(true);
      setListingData(data?.data);
      setPage(data?.meta?.current_page);
      setRowsPerPage(data?.meta?.per_page);
      setLoading(false);
    }

    if (isError) {
      const errMesg = error as any;
      message.error(errMesg?.data?.message);
    }
  }, [
    data?.data,
    data?.meta?.current_page,
    data?.meta?.per_page,
    error,
    isError,
    isSuccess,
  ]);

  return (
    <div className="grid grid-cols-1 gap-[0.5rem]">
      <div className="ml-[1rem]">
        <div className="text-[#25324B] flex flex-col gap-[0.1rem]">
          <p className="text-[10px] md:text-[16px] font-[400]">
            Showing {data?.meta?.total} results
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1rem] w-[98%] pl-5">
        {loading ? (
          <Spinner />
        ) : listingData?.length === 0 ? (
          <p className="font-medium ml-[1rem]">No listings found</p>
        ) : (
          listingData?.map((item: Record<string, any>, i) => (
            <HomeCard key={i} data={item} />
          ))
        )}
      </div>
      <div className="w-full flex justify-center mt-5 mb-5">
        {data?.meta?.total === 0 ? null : (
          <Pagination
            pageSize={rowsPerPage}
            total={data?.meta?.total}
            current={data?.meta?.current_page}
            onChange={(page, count) => {
              setRowsPerPage(count || 10);
              setPage(page);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default HouseListings;
