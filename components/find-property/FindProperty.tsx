"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import HomeCard from "../cards/HomeCard";
import Filter from "./Filter";
import { CustomPagination as Pagination } from "@/lib/AntDesignComponents";

import { FiFilter } from "react-icons/fi";
import useWidth from "../hooks/useWidth";
import {
  useGetListingsQuery,
  useLazyGetListingsQuery,
} from "@/redux/api/landingPageApi";
import { Tag } from "@/shared/UIs/Tags";
import { MdMenuOpen } from "react-icons/md";

const FindProperty = () => {
  const width = useWidth();
  const param = useSearchParams();
  const [getListings, { data, isSuccess, isLoading, isError, error }] =
    useLazyGetListingsQuery();
  const [filter, setFilter] = useState(Number(width) > 700);
  const [propertyType, setPropertyType] = useState<string[]>([]);
  const [budgets, setBudgets] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [areas, setAreas] = useState<string[]>([]);

  const [locations, setLocations] = useState("");
  const [houseData, setHouseData] = useState<Record<string, any>[]>([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [stateQuery, setStateQuery] = useState("");
  useEffect(() => {
    if (param.get("state")) {
      setLocations(param.get("state")!);
    }
    if (param.get("property")) {
      setPropertyType((prev) => [...prev, param.get("property")!]);
    }
  }, [param]);
  useEffect(() => {
    getListings({
      path: `listings?page=${page}&count=10${locations ? `&state=${locations}` : ""
        }${areas.length > 0 ? areas?.map((e) => `&area[]=${e}`).join("") : ""}${budgets.length > 0 ? budgets?.map((e) => `&budget[]=${e}`).join("") : ""
        }${propertyType.length > 0
          ? propertyType?.map((e) => `&property_type[]=${e}`).join("")
          : ""
        }`,
    });
  }, [page, locations, areas, propertyType, budgets]);
  const [loading, setLoading] = useState(isLoading);
  useEffect(() => {
    if (isSuccess) {
      setLoading(true);
      setHouseData(data?.data);
      setPage(data?.meta?.current_page);
      setRowsPerPage(data?.meta?.per_page);
      setLoading(false);
    }
    if (isError) {
      console.error(error);
    }
  }, [isSuccess, isError, data, error]);

  return (
    <div className="drawer relative min-h-screen h-full ">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content  bg-[#FFFFFF]">
        <div className="grid grid-cols-1 gap-[0.5rem] ">
          <div className="grid grid-cols-[40%_60%] md:grid-cols-[45%_50%_5%] items-center w-[98%] mx-auto">
            <div className="flex items-center">
              <label htmlFor="my-drawer-3" className="flex text-blue-800 px-3">
                {/* <FiFilter className="cursor-pointer" /> */}
                <MdMenuOpen className="cursor-pointer" />
              </label>
              <div className="text-[#25324B] flex flex-col gap-[0.1rem]">
                <h4 className="lg:text-[24px] text-[12px] md:text-[18px] font-[700]">
                  All Property
                </h4>
              </div>
              <p className="text-[10px] md:text-[16px] font-[400]">
                -Showing {data?.meta?.total} results
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-[1rem] w-[98%] mx-auto">
            {loading ? (
              <> Loading...</>
            ) : (
              <>
                {" "}
                {houseData?.map(
                  (item: Record<string, any>, i: number | string) => (
                    <HomeCard key={i} data={item} />
                  )
                )}
              </>
            )}
          </div>
          <div className="w-full flex justify-center mt-4 mb-9">
            <Pagination
              pageSize={rowsPerPage}
              total={data?.meta?.total}
              current={data?.meta?.current_page}
              onChange={(page) => {
                setPage(page);
              }}
            />
          </div>
        </div>
      </div>
      <Filter
        locations={locations}
        setLocations={setLocations}
        areas={areas}
        setAreas={setAreas}
        propertyTypes={propertyType}
        setPropertyType={setPropertyType}
        budgets={budgets}
        setBudgets={setBudgets}
      />
    </div>
  );
};

export default FindProperty;
