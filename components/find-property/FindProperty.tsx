"use client";

import { useEffect, useState } from "react";

import HomeCard from "../cards/HomeCard";
import Filter from "./Filter";
import {
  CustomPagination as Pagination,
  CustomSelect as Select,
} from "@/lib/AntDesignComponents";

import SearchIcon from "@/assets/icons/SearchIcon";
import { FiFilter } from "react-icons/fi";
import useWidth from "../hooks/useWidth";
import { useGetListingsQuery } from "@/redux/api/landingPageApi";
import { Tag } from "@/shared/UIs/Tags";

const FindProperty = () => {
  const width = useWidth();
  const [filter, setFilter] = useState(Number(width) > 700);

  const [propertyType, setPropertyType] = useState<Tag[]>([]);
  const [budgets, setBudgets] = useState<Tag[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [areas, setAreas] = useState<Tag[]>([]);

  const [locations, setLocations] = useState<Tag[]>([]);
  const [houseData, setHouseData] = useState<Record<string, any>[]>([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [path, setPath] = useState(`listings?page=${page}&count=10`);

  let updatedPath = `listings?page=${page}&count=10`;

  const { data, isSuccess, isLoading, isError, error } = useGetListingsQuery({
    path,
  });

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

  const generateUpdatedQueryString = () => {
    const queryParams = [];

    queryParams.push(`page=${page}`);
    queryParams.push(`count=${rowsPerPage}`);

    if (searchValue) {
      queryParams.push(`keyword=${searchValue}`);
    }
    const filterParams = [
      { param: "budget[]", values: budgets },
      { param: "property_type[]", values: propertyType },
      { param: "state[]", values: locations },
      { param: "area[]", values: areas },
    ];

    for (const filter of filterParams) {
      const { param, values } = filter;

      if (values) {
        const filteredValues = Array.isArray(values)
          ? values
            .map((value: Record<string, any>) => value.value || value.id)
            .filter(Boolean)
          : [values]
            .map((value: Record<string, any>) => value.value || value.id)
            .filter(Boolean);

        if (filteredValues.length > 0) {
          const encodedValues = filteredValues
            .map((value) => encodeURIComponent(value))
            .join(`&${param}=`);
          const decodedValue = decodeURIComponent(encodedValues);
          queryParams.push(`${param}=${decodedValue}`);
        }
      }
    }
    const updatedPath = `listings?${queryParams.join("&")}`;
    return updatedPath;
  };

  useEffect(() => {
    if (searchValue || page || rowsPerPage) {
      setPath(updatedPath);
    }
  }, [searchValue, page, rowsPerPage, updatedPath]);

  useEffect(() => {
    const updatedPath = generateUpdatedQueryString();
    setPath(updatedPath);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue, page, budgets, propertyType, locations, areas]);
  return (
    <div className="drawer relative min-h-screen max-h-screen overflow-hidden">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content overflow-y-scroll bg-[#EEF2F7]">
        <div className="grid grid-cols-1 gap-[0.5rem] overflow-y-scroll">
          <div className="grid grid-cols-[40%_60%] md:grid-cols-[45%_50%_5%] items-center w-[98%] mx-auto">
            <div className="flex items-center">
              <label htmlFor="my-drawer-3" className="flex text-blue-800 px-3">
                <FiFilter className="cursor-pointer" />
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
            {/* <div className="flex items-center gap-[0.1rem] w-full">
              <p className="text-[#7C8493] text-[10px] md:text-[16px] font-[400]">
                Sort by:
              </p>
              <Select options={options} defaultValue={"Most Relevant"} />
            </div>
            <SortIcon className="hidden md:block" /> */}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-[1rem] w-[98%] mx-auto">
            {loading ? (
              <> Loading...</>
            ) :
              <> {houseData?.map((item: Record<string, any>, i: number | string) => (
                <HomeCard key={i} data={item} />
              ))}</>

            }

          </div>
          <div className="w-full flex justify-center mt-4">
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
    // <div className="grid grid-cols-[5%_95%] mini:grid-cols-[25%_75%] max-h-screen min-h-screen">
    //   <div>
    //     {Number(width) < 700 &&
    //       (filter ? (
    //         <SearchIcon
    //           onClick={() => {
    //             setFilter((prev) => !prev);
    //           }}
    //           className="cursor-pointer stroke-colorPrimary"
    //         />
    //       ) : (
    //         <FiFilter
    //           className="cursor-pointer"
    //           onClick={() => {
    //             setFilter((prev) => !prev);
    //           }}
    //         />
    //       ))}
    //     {filter && <Filter locations={locations} setLocations={setLocations} areas={areas} setAreas={setAreas} propertyTypes={propertyType} setPropertyType={setPropertyType} budgets={budgets} setBudgets={setBudgets} />}
    //   </div>
    //   <div className="flex flex-col gap-3">
    //     <div className="grid grid-cols-[40%_60%] md:grid-cols-[45%_50%_5%] w-[98%] mx-auto">
    //       <div className="text-[#25324B] flex flex-col gap-[0.1rem]">
    //         <h4 className="lg:text-[24px] text-[12px] md:text-[18px] font-[700]">
    //           All Property
    //         </h4>
    //         <p className="text-[10px] md:text-[16px] font-[400]">
    //           Showing {data?.meta?.total}  results
    //         </p>
    //       </div>
    //     </div>
    //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[1rem] w-[98%] mx-auto">
    // {
    //   loading ? (
    //     <> Loading...</>
    //   ) :
    //     <> {houseData?.map((item: Record<string, any>, i: number | string) => (
    //       <HomeCard key={i} data={item} />
    //     ))}</>

    // }

    //     </div>
    //     <div className="w-full flex justify-center mt-4">
    //       <Pagination
    //         pageSize={rowsPerPage}
    //         total={data?.meta?.total}
    //         current={data?.meta?.current_page}
    //         onChange={(page, count) => {
    //           setRowsPerPage(count || 10);
    //           setPage(page);
    //         }}
    //       />

    //     </div>
    //   </div>
    //   {/* <Filter /> */}
    // </div>
    // <div className="grid grid-cols-[5%_95%] mini:grid-cols-[25%_75%] max-h-screen min-h-screen">
    //   <div>
    //     {/* {Number(width) < 700 &&
    //       (filter ? (
    //         <SearchIcon
    //           onClick={() => {
    //             setFilter((prev) => !prev);
    //           }}
    //           className="cursor-pointer stroke-colorPrimary"
    //         />
    //       ) : (
    //         <FiFilter
    //           className="cursor-pointer"
    //           onClick={() => {
    //             setFilter((prev) => !prev);
    //           }}
    //         />
    //       ))} */}
    // <label htmlFor="my-drawer-3" className="flex text-blue-800 px-3">
    //   <FiFilter className="cursor-pointer" />
    // </label>
    //   </div>
    //   <div className="grid grid-cols-1 gap-[0.5rem] overflow-y-scroll">
    //     <div className="grid grid-cols-[40%_60%] md:grid-cols-[45%_50%_5%] items-center w-[98%] mx-auto">
    //       <div className="text-[#25324B] flex flex-col gap-[0.1rem]">
    //         <h4 className="lg:text-[24px] text-[12px] md:text-[18px] font-[700]">
    //           All Property
    //         </h4>
    //         <p className="text-[10px] md:text-[16px] font-[400]">
    //           Showing 73 results
    //         </p>
    //       </div>
    //       <div className="flex items-center gap-[0.1rem] w-full">
    //         <p className="text-[#7C8493] text-[10px] md:text-[16px] font-[400]">
    //           Sort by:
    //         </p>
    //         <Select
    //           // size="small"
    //           options={options}
    //           defaultValue={"Most Relevant"}
    //         />
    //       </div>
    //       <SortIcon className="hidden md:block" />
    //     </div>
    //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[1rem] w-[98%] mx-auto">
    //       {arr.map((e, i) => (
    //         <HomeCard key={i} />
    //       ))}
    //     </div>
    //     <div className="w-full flex justify-center">
    //       <Pagination total={50} />
    //     </div>
    //   </div>
    //   <Filter />
    // </div>
  );
};

              export default FindProperty;
