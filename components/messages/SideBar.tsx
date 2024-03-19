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
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { SET_CURRENT_CHAT } from "@/redux/slice/chatSlice";
import { useGetChatsQuery, useGetSearchedChatsQuery } from "@/redux/api/chatApi";


const SideBar = ({display,  setDisplay}: {display: boolean;  setDisplay: React.Dispatch<SetStateAction<boolean>>}) => {

  const dispatch = useAppDispatch();
  const [activeChat, setActiveChat] = useState<string | null>(null);
  const [onGoingChats, setOnGoingChats] = useState<Record<string, any>[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");


  const formatDate = (timestamp: string | number | Date) => {
    const date = new Date(timestamp);
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    return `${month} ${day}`;
  };
  
  const {
    data: chats,
    isLoading,
    error,
    isSuccess,
    isError,
  } = useGetChatsQuery({});

  const {
    data: searchedChats,
    isLoading:searchedLoading,
    error: searchedError,
    isSuccess: searchedSuccess,
    isError: isSearchedError,
  } = useGetSearchedChatsQuery(searchQuery);

  useEffect(() => {
    if (isSuccess) {
      if (chats && chats.data.users && chats.data.users.length > 0) {
        setOnGoingChats(chats.data.users);
       
        console.log(chats.data);
        setActiveChat(chats.data.users[0].receiver_id)
        const payload = {
          receiverId: chats.data.users[0].receiver_id,
          name: chats.data.users[0].receiver.name,
          avatar: chats.data.users[0].receiver.image,
        };
        dispatch(SET_CURRENT_CHAT(payload))
      } else {
        setOnGoingChats([]); 
        setActiveChat(null);
      }
    }
    if (isError) {
      const errMesg = error as any;
      console.log(errMesg?.data?.message);
    }
  }, [chats, error, isError, isSuccess]);

  useEffect(() => {
    console.log("Chats searching:", searchedLoading);
    // Log isLoading value
    if (searchedSuccess) {
      if (searchedChats && searchedChats.data && searchedChats.data.users && searchedChats.data.users.length > 0) {
        setOnGoingChats(searchedChats.data.users); 
        console.log(searchedChats.data); 
      } else {
        setOnGoingChats([]); 
      }
    }
    if (isSearchedError) {
      const errMesg = searchedError as any;
      console.log(errMesg?.data?.message);
    }
  }, [searchedChats, searchedError, isSearchedError, searchedSuccess]);

  const handleSearch = (value: string) => {
    setSearchQuery(value); 
  };


  return (
    <div
      className={`${
        display ? "hidden" : "block"
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
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-3 my-2 p-2">
      <h4 className="text-[#010886] text-[20px] font-[500]">Chats</h4>
        {isLoading || searchedLoading  ? (
          <div>Loading</div>
    
        ) : (
          onGoingChats.map((item: Record<string, any>) => (
            <div
            className={`flex items-center gap-3 bg-[#F9F9F9] cursor-pointer p-2 rounded-[8px] ${
              activeChat === item.receiver_id ? 'bg-colorPrimary text-neutral-50' : '' // Apply active background color if active
            }`}
              key={item.id}
              onClick={() => {
                const payload = {
                  receiverId: item?.receiver_id,
                  name: item?.receiver.name,
                  avatar: item?.receiver.image,
                };
                dispatch(SET_CURRENT_CHAT(payload));
                setActiveChat(item.receiver_id); // Set active chat item
                setDisplay((prev) => !prev);
              }}
            >
              <div className="relative" >
                <img alt="user" src={item?.receiver.image} style={{  width: "30px", height: "30px", borderRadius: "50%", overflow: "hidden" , objectFit:"cover" }}/>
                
                <ActiveBadge className="absolute right-0 bottom-0" />
              </div>
              <div className="flex flex-col w-full">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">{item?.receiver.name}</h4>
                  <span className="text-[11px]">{formatDate(item?.created_at)}</span>
                </div>
                <span className="text-[12px]">
                  {item.message.length > 30
                    ? item?.message.slice(0, 30) + "..."
                    : item?.message}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SideBar;
