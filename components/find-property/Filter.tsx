"use client";

import { useState, useMemo, useEffect, Dispatch, SetStateAction } from "react";
import { Collapse, CollapseProps, type MenuProps } from "antd";
import { CustomButton as Button } from "@/lib/AntDesignComponents";
import { FilterTags, Tag } from "@/shared/UIs/Tags";
import {
  useGetAllAreasQuery,
  useGetHouseBudgetQuery,
  useGetHouseTypeQuery,
} from "@/redux/api/houseApi";

const { Panel } = Collapse;

interface IProps {
  locations: Tag[];
  areas: Tag[];
  propertyTypes: Tag[];
  budgets: Tag[];
  setPropertyType: Dispatch<SetStateAction<Tag[]>>;
  setBudgets: Dispatch<SetStateAction<Tag[]>>;
  setLocations: Dispatch<SetStateAction<Tag[]>>;
  setAreas: Dispatch<SetStateAction<Tag[]>>;
  stateQuery?: string;
}

export const locationOptions = [
  { value: "lagos", label: "Lagos", id: 2 },
  { value: "abuja", label: "Abuja", id: 3 },
];
const Filter = ({
  setLocations,
  locations,
  setAreas,
  areas,
  setPropertyType,
  propertyTypes,
  setBudgets,
  budgets,
  stateQuery,
}: IProps) => {
  const [areasOptions, setAreasOptions] = useState([]);
  const [propertyOptions, setPropertyOptions] = useState([]);
  const [budgetOptions, setBudgetOptions] = useState([]);

  const [path, setPath] = useState(`get_house_areas?count=30&random=1`);

  useEffect(() => {
    if (stateQuery) {
      setPath(`get_house_areas?count=30&random=1&state=${stateQuery}`);
    }
  }, [stateQuery]);

  const generateUpdatedAreaQueryString = () => {
    if (locations) {
      const filteredAreas = Array.isArray(locations)
        ? locations
          .map((state: Record<string, any>) => state.value || state.id)
          .filter(Boolean)
        : [locations]
          .map((state: Record<string, any>) => state.value || state.id)
          .filter(Boolean);

      if (filteredAreas.length > 0) {
        const encodedAreas = filteredAreas
          .map((state) => encodeURIComponent(state))
          .join(`&state[]=`);
        setPath(`get_house_areas?count=30&random=1&state[]=${encodedAreas}`);
      }
    }
  };

  useEffect(() => {
    generateUpdatedAreaQueryString();
  }, [locations]);

  const {
    data: areaData,
    isSuccess: areaIsSuccess,
    isError: areaIsError,
  } = useGetAllAreasQuery({
    path,
  });
  const {
    data: budgetData,
    isSuccess: budgetSuccess,
    isError: budgetIsError,
  } = useGetHouseBudgetQuery({});
  const { data, isLoading, isError, error, isSuccess } = useGetHouseTypeQuery(
    {}
  );
  useEffect(() => {
    if (areaIsSuccess) {
      setAreasOptions(areaData?.data?.data);
    }
    if (budgetSuccess) {
      setBudgetOptions(budgetData?.data);
    }
    if (isSuccess) {
      setPropertyOptions(data?.data);
    }
    if (isError || areaIsError || budgetIsError) {
      console.log(error);
    }
  }, [
    areaIsSuccess,
    areaData,
    budgetSuccess,
    isSuccess,
    budgetData?.data,
    data?.data,
    isError,
    areaIsError,
    budgetIsError,
    error,
  ]);
  // const [areas, setAreas] = useState<Tag[]>([]);

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: (
        <span className="font-medium text-colorPrimary">Property Type</span>
      ),
      children: (
        <div className="max-h-[300px] overflow-auto">
          <FilterTags
            options={propertyOptions}
            onSelectTag={setPropertyType}
            selectedTags={propertyTypes}
          />
        </div>
      ),
    },
    {
      key: "2",
      label: <span className="font-medium text-colorPrimary">Location</span>,
      children: (
        <>
          <FilterTags
            options={locationOptions}
            onSelectTag={setLocations}
            selectedTags={locations}
          />
        </>
      ),
    },
    {
      key: "3",
      label: <span className="font-medium text-colorPrimary">Areas</span>,
      children: (
        <div className="max-h-[300px] overflow-auto">
          <FilterTags
            options={areasOptions}
            onSelectTag={setAreas}
            selectedTags={areas}
          />
        </div>
      ),
    },
    {
      key: "4",
      label: <span className="font-medium text-colorPrimary">budget</span>,
      children: (
        <div className="max-h-[300px] overflow-auto">
          <FilterTags
            options={budgetOptions}
            onSelectTag={setBudgets}
            selectedTags={budgets}
          />
        </div>
      ),
    },
  ];
  const onChange = (key: string | string[]) => {
    // console.log(key);
  };
  return (
    <>
      {/* <Menu
        mode="inline"
        defaultOpenKeys={openKeys}
        items={items}
        selectable={false}
        onClick={(e) => {
          setOptions((prev) => {
            const modified = { ...prev };
            const path = e.keyPath[1];
            const element = e.key;
            modified[path][element] = !prev[path][element];
            return { ...modified };
          });
        }}
        className="max-h-screen min-h-screen max-w-[80vw] overflow-y-scroll w-full absolute mini:relative z-[9999999]"
      /> */}
      {/* <div className="">
        <Collapse items={items} ghost expandIconPosition={"end"} defaultActiveKey={['1']} onChange={onChange} />

      </div> */}
      <div className="drawer-side z-[999999999999999] md:left-[16rem]">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <aside className="flex flex-col w-[16rem] h-screen overflow-hidden shadow-xl pt-[1rem] md:pt-0 bg-[#F8F8FD] gap-[0.5rem]">
          {/* <Menu
          mode="inline"
          defaultOpenKeys={openKeys}
          items={items}
          selectable={false}
          onClick={(e) => {
            setOptions((prev) => {
              const modified = { ...prev };
              const path = e.keyPath[1];
              const element = e.key;
              modified[path][element] = !prev[path][element];
              return { ...modified };
            });
          }}
          className="max-w-[80vw] overflow-y-scroll w-full z-[9999999]"
        /> */}
          <Collapse
            items={items}
            ghost
            expandIconPosition={"end"}
            defaultActiveKey={["1"]}
            onChange={onChange}
          />
          <Button className="mx-auto !w-[80%] !bg-[#010886]" type="primary">
            Apply
          </Button>
        </aside>
      </div>
    </>
  );
};

export default Filter;
