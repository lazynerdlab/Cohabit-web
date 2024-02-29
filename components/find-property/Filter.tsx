"use client";

import { useState, useMemo, useEffect, Dispatch, SetStateAction } from "react";
import { Collapse, CollapseProps, type MenuProps } from "antd";
import { CustomButton as Button } from "@/lib/AntDesignComponents";
import { FilterTags, Tag } from "@/shared/UIs/Tags";
import {
  useGetAllAreasQuery,
  useGetHouseBudgetQuery,
  useGetHouseTypeQuery,
  useLazyGetAllAreasQuery,
} from "@/redux/api/houseApi";
interface IProps {
  locations: string;
  areas: string[];
  propertyTypes: string[];
  budgets: string[];
  setPropertyType: Dispatch<SetStateAction<string[]>>;
  setBudgets: Dispatch<SetStateAction<string[]>>;
  setLocations: Dispatch<SetStateAction<string>>;
  setAreas: Dispatch<SetStateAction<string[]>>;
}
import {
  CustomMenu as Menu,
  CustomCheckBox as Checkbox,
} from "@/lib/AntDesignComponents";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const Filter = ({
  setLocations,
  locations,
  setAreas,
  areas,
  setPropertyType,
  propertyTypes,
  setBudgets,
  budgets,
}: IProps) => {
  const [openKeys, setOpenKeys] = useState(["property", "budget"]);
  const {
    data: houseTypes,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useGetHouseTypeQuery({});
  const { data: budgetList } = useGetHouseBudgetQuery({});
  const [getAreas, { data: areasData }] = useLazyGetAllAreasQuery();
  useEffect(() => {
    getAreas({
      path: `get_house_areas${locations ? `?state=${locations}` : "/all"}`,
    });
  }, [locations]);
  const items = [
    getItem(
      "Property Type",
      "property",
      null,
      houseTypes?.data?.map((item: Record<string, any>) =>
        getItem(
          <label className="cursor-pointer" htmlFor={`type-${item.id}`}>
            {item.title}
          </label>,
          item.id,
          <Checkbox
            onChange={(e) => {
              if (e.target.checked) {
                setPropertyType((prev) => [...prev, item.id]);
              } else {
                setPropertyType((prev) =>
                  prev.filter((type) => type !== item.id)
                );
              }
            }}
            id={`type-${item.id}`}
            checked={propertyTypes.includes(item.id)}
          />
        )
      ) || []
    ),
    getItem("Location", "location", null, [
      getItem(
        <label className="cursor-pointer" htmlFor="abuja">
          Abuja
        </label>,
        "abuja",
        <Checkbox
          onChange={(e) => {
            if (e.target.checked) {
              setLocations("abuja");
            } else {
              setLocations("");
            }
          }}
          id="abuja"
          checked={locations === "abuja"}
        />
      ),
      getItem(
        <label className="cursor-pointer" htmlFor="lagos">
          Lagos
        </label>,
        "lagos",
        <Checkbox
          onChange={(e) => {
            console.log(locations);
            if (e.target.checked) {
              setLocations("lagos");
            } else {
              setLocations("");
            }
          }}
          id="lagos"
          checked={locations === "lagos"}
        />
      ),
    ]),
    getItem(
      "Areas",
      "areas",
      null,
      areasData?.data?.map((item: Record<string, any>) =>
        getItem(
          <label className="cursor-pointer" htmlFor={`area-${item?.id}`}>
            {item.area}
          </label>,
          item.id,
          <Checkbox
            onChange={(e) => {
              if (e.target.checked) {
                setAreas((prev) => [...prev, item.id]);
              } else {
                setAreas((prev) => prev.filter((type) => type !== item.id));
              }
            }}
            id={`area-${item?.id}`}
            checked={areas.includes(item.id)}
          />
        )
      ) ||
        areasData?.data?.data?.map((item: Record<string, any>) =>
          getItem(
            <label className="cursor-pointer" htmlFor={`area-${item?.id}`}>
              item.area
            </label>,
            item.id,
            <Checkbox
              onChange={(e) => {
                if (e.target.checked) {
                  setAreas((prev) => [...prev, item.id]);
                } else {
                  setAreas((prev) => prev.filter((type) => type !== item.id));
                }
              }}
              id={`area-${item?.id}`}
              checked={areas.includes(item.id)}
            />
          )
        ) ||
        []
    ),
    getItem(
      "Budget",
      "budget",
      null,
      budgetList?.data?.map((item: Record<string, any>) =>
        getItem(
          <label
            className="cursor-pointer w-full"
            htmlFor={`budget-${item.id}`}
          >
            {item.text}
          </label>,
          item.id,
          <Checkbox
            onChange={(e) => {
              if (e.target.checked) {
                setBudgets((prev) => [...prev, item.id]);
              } else {
                setBudgets((prev) =>
                  prev.filter((budget) => budget !== item.id)
                );
              }
            }}
            id={`budget-${item.id}`}
            checked={budgets.includes(item.id)}
          />
        )
      ) || []
    ),
  ];

  return (
    <>
      <div className="drawer-side z-[999999999999999] md:left-[16rem]">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <aside className="flex flex-col w-[16rem] h-screen overflow-hidden shadow-xl pt-[1rem] md:pt-0 bg-[#F8F8FD] gap-[0.5rem]">
          <Menu
            mode="inline"
            defaultOpenKeys={openKeys}
            items={items}
            selectable={false}
            // onClick={(e) => {
            //   setOptions((prev) => {
            //     const modified = { ...prev };
            //     const path = e.keyPath[1];
            //     const element = e.key;
            //     modified[path][element] = !prev[path][element];
            //     return { ...modified };
            //   });
            // }}
            className="max-h-screen min-h-screen max-w-[80vw] overflow-y-scroll w-full absolute mini:relative z-[9999999]"
          />
        </aside>
      </div>
    </>
  );
};

export default Filter;
