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
import useDebounce from "../hooks/useSearchDebounce";


const SideBar = ({ display, setDisplay }: { display: boolean; setDisplay: React.Dispatch<SetStateAction<boolean>> }) => {

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

  const debounceDelay = 300;
   // Use the custom debouncing hook
   const debouncedSearchQuery = useDebounce(searchQuery, debounceDelay);
  const {data: chats, isLoading, error, isSuccess, isError} = useGetChatsQuery({});

  const { data: searchedChats, isLoading: searchedLoading, error: searchedError, isSuccess: searchedSuccess, isError: isSearchedError } = useGetSearchedChatsQuery(debouncedSearchQuery);

  let currentUserAvi = sessionStorage.getItem('userAvatar')
  const currentUserTypeIdString = sessionStorage.getItem('myId');
  const currentUserTypeId = currentUserTypeIdString !== null ? parseInt(currentUserTypeIdString, 10) : null;


  const distinctUserNames = useMemo(() => {
    // Create a Map to store unique user names
    const uniqueNames = new Map();
    return onGoingChats.map((item) => {
      const userName = currentUserTypeId === item.sender_id ? item.receiver.name : item.sender.name;
      if (!uniqueNames.has(userName)) {
        uniqueNames.set(userName, true);
        return item;
      }
      return null; // Skip repeated names
    }).filter((item) => item !== null); // Remove null items
  }, [onGoingChats, currentUserTypeId]);



  useEffect(() => {
    if (isSuccess) {
      if (chats && chats.data.users && chats.data.users.length > 0) {
        setOnGoingChats(chats.data.users);
        const sender = chats.data.users[0];
        const receiver = chats.data.users[0];
        // Assign properties based on currentUserTypeId
          const payload = {
            receiverId: currentUserTypeId === sender.sender_id ? receiver.receiver_id : sender.sender.sender_id,
            name: currentUserTypeId === sender.sender_id ? receiver.receiver.name : sender.sender.name,
            userType: currentUserTypeId === sender.sender_id ? receiver.receiver.user_type : sender.sender.user_type,
            avatar: currentUserTypeId === sender.sender_id ? receiver.receiver.image : sender.sender.image,
          };

        dispatch(SET_CURRENT_CHAT(payload))
        setActiveChat(payload?.receiverId)
        console.log(currentUserTypeId === sender.sender_id ? receiver.receiver_id : sender.sender.sender_id)

      } else {
        setOnGoingChats([]);
        setActiveChat(null);
      }
    }
    if (isError) {
      const errMesg = error as any;
      console.log(errMesg?.data?.message);
    }
  }, [chats, error, isError, isSuccess, searchQuery]);

  if (isError) {
    const errMesg = error as any;
    console.log(errMesg?.data?.message);
  }

  useEffect(() => {
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
  }, [searchedChats, searchedError, isSearchedError, searchedSuccess, searchQuery]);

  const handleSearch = (value: string) => {
    setSearchQuery(value);
  };


  return (
    <div
      className={`${display ? "hidden" : "block"
        } transition duration-500 ease-in-out md:grid grid-cols-1 grid-rows-[10%_90%] md:grid-rows-[10%_90%] border-solid border-r-[1px] border-[#D6DDEB] bg-[#FFF] max-h-screen overflow-hidden`}
    >
      <div className="sticky top-0 z-[9999999999] bg-[#FFF] flex items-center justify-between gap-[0.5rem] w-full p-[2%] border-b border-[#32475C1F]">
        {currentUserAvi && ( // Check if currentUserAvi is not null
          <span className="relative" style={{ width: "35px", height: "35px", borderRadius: "50%", overflow: "hidden" }}>
            <Image alt="user" src={currentUserAvi} 
            fill
            style={{objectFit:"cover"}}
            />
            <ActiveBadge className="absolute right-0 bottom-0" />
          </span>
        )}
        <Input
          className="!rounded-[66px]"
          prefix={<SearchIcon className="stroke-[#32475C]/[54%]" />}
          placeholder="Search"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-3 my-2 p-2">
  <h4 className="text-[#010886] text-[20px] font-[500]">Chats</h4>
  {isLoading || searchedLoading ? (
    <div>Loading</div>
  ) : (
    onGoingChats.length > 0 ? (
    distinctUserNames.map((item: Record<string, any>) => {
          return (
            <div
              className={`flex items-center gap-3 bg-[#F9F9F9] cursor-pointer p-2 rounded-[8px] ${activeChat === item.receiver_id ? 'bg-colorPrimary text-neutral-50' : '' // Apply active background color if active
                }`}
              key={item.id}
              onClick={() => {
                const payload = {
                  receiverId: currentUserTypeId === item?.receiver_id ? item?.sender_id : item?.receiver_id,
                  name: currentUserTypeId === item?.receiver_id ? item?.sender.name : item?.receiver.name,
                  userType: currentUserTypeId === item?.receiver_id ? item?.sender.user_type : item?.receiver.user_type,
                  avatar: currentUserTypeId === item?.receiver_id ? item?.sender.image : item?.receiver.image,
                };
                dispatch(SET_CURRENT_CHAT(payload));
                setActiveChat(payload?.receiverId); // Set active chat item
                setDisplay((prev) => !prev);
              }}
            >
              <div className="relative">
                <img alt="user" src={currentUserTypeId === item?.sender_id ? item?.receiver.image : item?.sender.image} style={{ width: "30px", height: "30px", borderRadius: "50%", overflow: "hidden", objectFit: "cover" }} />
                <ActiveBadge className="absolute right-0 bottom-0" />
              </div>
              <div className="flex flex-col w-full">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">{currentUserTypeId === item?.sender_id ? item?.receiver.name : item?.sender.name}</h4>{/**chat user name */}
                  <span className="text-[11px]">{formatDate(item?.created_at)}</span>
                </div>
                <span className="text-[12px]">
                  {item?.message?.length > 30
                    ? item?.message.slice(0, 30) + "..."
                    : item?.message}
                </span>
              </div>
            </div>
          );
      })////
    ) :
    (
      <div className="text-center text-gray-500">No User found for your search.</div>
    )
  )}
</div>
    </div>
  );
};

export default SideBar;

