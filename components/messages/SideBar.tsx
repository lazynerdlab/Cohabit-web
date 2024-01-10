"use client";
import type { MenuProps } from "antd";
import {
  ChatMenu as Menu,
  CustomInput as Input,
} from "@/lib/AntDesignComponents";
import ActiveBadge from "@/assets/icons/ActiveBadge";
import { SetStateAction, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import user from "@/assets/user.svg";
import SearchIcon from "@/assets/icons/SearchIcon";
import { useAppDispatch } from "@/redux/hook";
import { SET_CURRENT_CHAT } from "@/redux/slice/chatSlice";
import { useGetChatsQuery } from "@/redux/api/chatApi";

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

const recentChats = [
  {
    id: "1",
    name: "Felecia Rower",
    time: "July 20",
    message: "I want to share an apartment with you. ",
  },
  {
    id: "2",
    name: "Prisca Rower",
    time: "July 20",
    message: "I want to share an apartment with you. ",
  }
]
const SideBar = ({
  display,
  setDisplay,
}: {
  display: boolean;
  setDisplay: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const [active, setActive] = useState("1");
  const items: MenuProps["items"] = useMemo(
    () => [
      getItem(
        <h4 className="text-[#010886] text-[20px] font-[500]">Chats</h4>,
        "grp1",
        null,
        [
          getItem(
            <div className="mb-[0.5rem] !h-[50px] flex flex-col relative">
              <span className="text-[16px] flex justify-between gap-[0.5rem] !h-[15px] font-[400]">
                <h4 className="!h-[15px]">Felecia Rower</h4>
                <p className="!h-[15px]">July 20</p>
              </span>
              <span className="text-[14px] !h-[35px] font-[400] truncate">
                I want to share an apartment with you.{" "}
              </span>
            </div>,
            "1",
            <div className="relative block my-auto">
              <Image alt="user" src={user} />
              <ActiveBadge className="absolute right-0 bottom-0" />
            </div>
          ),
          getItem(
            <div className="mb-[0.5rem] !h-[50px] flex flex-col relative">
              <span className="text-[16px] flex justify-between gap-[0.5rem] !h-[15px] font-[400]">
                <h4 className="!h-[15px]">Felecia Rower</h4>
                <p className="!h-[15px]">July 20</p>
              </span>
              <span className="text-[14px] !h-[35px] font-[400] truncate">
                I want to share an apartment with you.{" "}
              </span>
            </div>,
            "2",
            <div className="relative block my-auto">
              <Image className="w-[45px] h-[45px]" alt="user" src={user} />
              <ActiveBadge className="absolute right-0 bottom-0" />
            </div>
          ),
          getItem(
            <div className="mb-[0.5rem] !h-[50px] flex flex-col relative">
              <span className="text-[16px] flex justify-between gap-[0.5rem] !h-[15px] font-[400]">
                <h4 className="!h-[15px]">Felecia Rower</h4>
                <p className="!h-[15px]">July 20</p>
              </span>
              <span className="text-[14px] !h-[35px] font-[400] truncate">
                I want to share an apartment with you.{" "}
              </span>
            </div>,
            "3",
            <div className="relative block my-auto">
              <Image alt="user" src={user} />
              <ActiveBadge className="absolute right-0 bottom-0" />
            </div>
          ),
          getItem(
            <div className="mb-[0.5rem] !h-[50px] flex flex-col relative">
              <span className="text-[16px] flex justify-between gap-[0.5rem] !h-[15px] font-[400]">
                <h4 className="!h-[15px]">Felecia Rower</h4>
                <p className="!h-[15px]">July 20</p>
              </span>
              <span className="text-[14px] !h-[35px] font-[400] truncate">
                I want to share an apartment with you.{" "}
              </span>
            </div>,
            "4",
            <div className="relative block my-auto">
              <Image alt="user" src={user} />
              <ActiveBadge className="absolute right-0 bottom-0" />
            </div>
          ),
        ],
        "group"
      ),
      getItem(
        <h4 className="text-[#010886] text-[20px] font-[500]">
          Recently chatted with
        </h4>,
        "grp",
        null,
        [
          getItem(
            <div className="mb-[0.5rem] !h-[50px] flex flex-col relative">
              <span className="text-[16px] flex justify-between gap-[0.5rem] !h-[15px] font-[400]">
                <h4 className="!h-[15px]">Felecia Rower</h4>
                <p className="!h-[15px]">July 20</p>
              </span>
              <span className="text-[14px] !h-[35px] font-[400] truncate">
                I want to share an apartment with you.{" "}
              </span>
            </div>,
            "5",
            <div className="relative block my-auto">
              <Image alt="user" src={user} />
              <ActiveBadge className="absolute right-0 bottom-0" />
            </div>
          ),
          getItem(
            <div className="mb-[0.5rem] !h-[50px] flex flex-col relative">
              <span className="text-[16px] flex justify-between gap-[0.5rem] !h-[15px] font-[400]">
                <h4 className="!h-[15px]">Felecia Rower</h4>
                <p className="!h-[15px]">July 20</p>
              </span>
              <span className="text-[14px] !h-[35px] font-[400] truncate">
                I want to share an apartment with you.{" "}
              </span>
            </div>,
            "6",
            <div className="relative block my-auto">
              <Image alt="user" src={user} />
              <ActiveBadge className="absolute right-0 bottom-0" />
            </div>
          ),
          getItem(
            <div className="mb-[0.5rem] !h-[50px] flex flex-col relative">
              <span className="text-[16px] flex justify-between gap-[0.5rem] !h-[15px] font-[400]">
                <h4 className="!h-[15px]">Felecia Rower</h4>
                <p className="!h-[15px]">July 20</p>
              </span>
              <span className="text-[14px] !h-[35px] font-[400] truncate">
                I want to share an apartment with you.{" "}
              </span>
            </div>,
            "7",
            <div className="relative block my-auto">
              <Image alt="user" src={user} />
              <ActiveBadge className="absolute right-0 bottom-0" />
            </div>
          ),
          getItem(
            <div className="mb-[0.5rem] !h-[50px] flex flex-col relative">
              <span className="text-[16px] flex justify-between gap-[0.5rem] !h-[15px] font-[400]">
                <h4 className="!h-[15px]">Felecia Rower</h4>
                <p className="!h-[15px]">July 20</p>
              </span>
              <span className="text-[14px] !h-[35px] font-[400] truncate">
                I want to share an apartment with you.{" "}
              </span>
            </div>,
            "8",
            <div className="relative block my-auto">
              <Image alt="user" src={user} />
              <ActiveBadge className="absolute right-0 bottom-0" />
            </div>
          ),
        ],
        "group"
      ),
    ],
    []
  );
  const dispatch = useAppDispatch()
  const onClick: MenuProps["onClick"] = (e) => {
    setActive(e.key);
    setDisplay((prev) => !prev);
  };

  const { data: chats, isLoading, error, isSuccess, isError } = useGetChatsQuery({})
  const [onGoingChats, setOnGoingChats] = useState<Record<string, any>[]>([])
  useEffect(() => {
    if (isSuccess) {
      setOnGoingChats(chats)
    }
    if (isError) {
      const errMesg = error as any
      console.log(errMesg?.data?.message)
    }
  }, [chats, error, isError, isSuccess])
  return (
    <div
      className={`${display ? "hidden" : "block"
        } transition duration-500 ease-in-out md:grid grid-cols-1 grid-rows-[10%_90%] md:grid-rows-[10%_90%] border-solid border-r-[1px] border-[#D6DDEB] bg-[#FFF] max-h-screen overflow-hidden`}
    >
      <div className="sticky top-0 z-[9999999999] bg-[#FFF] flex items-center justify-between gap-[0.5rem] w-full p-[2%] border-b border-[#32475C1F]">
        <span className="relative">
          <Image alt="user" src={user} />
          <ActiveBadge className="absolute right-0 bottom-0" />
        </span>
        <Input
          className="!rounded-[66px]"
          prefix={<SearchIcon className="stroke-[#32475C]/[54%]" />}
          placeholder="Search"
        />
      </div>
      <div className="flex flex-col gap-3 my-2 p-2">
        {
          isLoading ? <div>Loading</div> : onGoingChats.map((item: Record<string, any>) => (
            <div className="flex items-center gap-3 bg-[#F9F9F9] cursor-pointer p-2 rounded-[8px]" key={item.id} onClick={() => {
              const payload = {
                receiverId: item?.id,
                name: item?.name,
                avatar: item?.avatar
              }
              dispatch(SET_CURRENT_CHAT(payload))
              setDisplay((prev) => !prev);
            }}>
              <div className="relative">
                <Image alt="user" src={user} />
                <ActiveBadge className="absolute right-0 bottom-0" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">{item?.name}</h4>
                  <span className="text-[11px]">{item?.time}</span>
                </div>
                <span className="text-[12px]">{item.message.length > 30 ? item?.message.slice(0, 30) + "..." : item?.message}</span>
              </div>
            </div>
          ))
        }
      </div>
      {/* <Menu
        mode="inline"
        onClick={onClick}
        className="overflow-y-scroll noscroll-bar"
        defaultSelectedKeys={[active]}
        selectedKeys={[active]}
        items={items}
      /> */}
    </div>
  );
};

export default SideBar;
