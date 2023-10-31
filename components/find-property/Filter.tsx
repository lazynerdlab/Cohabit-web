"use client";
import { useState, useMemo } from "react";
import type { MenuProps } from "antd";
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

const Filter = () => {
  const [openKeys, setOpenKeys] = useState(["property", "budget"]);
  const [options, setOptions] = useState<Record<string, any>>({
    property: {
      one: false,
      two: false,
      three: false,
      four: false,
      five: false,
    },
    location: {
      one: false,
      two: false,
    },
    areas: {
      one: false,
      two: false,
      three: false,
      four: false,
    },
    budget: {
      one: false,
      two: false,
      three: false,
      four: false,
    },
  });
  const items = useMemo(
    () => [
      getItem("Property Type", "property", null, [
        getItem(
          "Apartment (7,997)",
          "one",
          <Checkbox checked={options.property.one} />
        ),
        getItem(
          "Duplex (5)",
          "two",
          <Checkbox checked={options.property.two} />
        ),
        getItem(
          "Mini-Flat(2)",
          "three",
          <Checkbox checked={options.property.three} />
        ),
        getItem(
          "Bungalow (24)",
          "four",
          <Checkbox checked={options.property.four} />
        ),
        getItem(
          "Workspace (3)",
          "five",
          <Checkbox checked={options.property.five} />
        ),
      ]),
      getItem("Location", "location", null, [
        getItem(
          "Abuja(24)",
          "one",
          <Checkbox checked={options.location.one} />
        ),
        getItem("Lagos(3)", "two", <Checkbox checked={options.location.two} />),
      ]),
      getItem("Areas", "areas", null, [
        getItem("Abaji (57)", "one", <Checkbox checked={options.areas.one} />),
        getItem("Bwari (3)", "two", <Checkbox checked={options.areas.two} />),
        getItem(
          "Bwari (3)",
          "three",
          <Checkbox checked={options.areas.three} />
        ),
        getItem("Bwari (3)", "four", <Checkbox checked={options.areas.four} />),
      ]),
      getItem("Budget", "budget", null, [
        getItem(
          "100k -500k (4)",
          "one",
          <Checkbox checked={options.budget.one} />
        ),
        getItem(
          "100k -500k (4)",
          "two",
          <Checkbox checked={options.budget.two} />
        ),
        getItem(
          "100k -500k (4)",
          "three",
          <Checkbox checked={options.budget.three} />
        ),
        getItem(
          "100k -500k (4)",
          "four",
          <Checkbox checked={options.budget.four} />
        ),
      ]),
    ],
    [options]
  );

  return (
    <div className="drawer-side z-[9999999999]">
      <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
      <aside className="flex flex-col w-[16rem] h-screen overflow-hidden shadow-xl pt-[1rem] md:pt-0 bg-[#F8F8FD]">
        <Menu
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
          className="max-h-screen min-h-screen max-w-[80vw] overflow-y-scroll w-full z-[9999999]"
        />
      </aside>
    </div>
  );
};

export default Filter;
