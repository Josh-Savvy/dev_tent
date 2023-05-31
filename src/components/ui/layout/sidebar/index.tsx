/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React from "react";
import {
  GridOutline,
  PeopleOutline,
  ChatboxOutline,
  NotificationsOutline,
  LogOutOutline,
  SettingsOutline,
} from "react-ionicons";

export const LeftSideBar = () => {
  return (
    <div className="hidden md:flex sticky top-20 h-full w-[23%] pt-5">
      <div className="group grid gap-8 text-sm pl-3">
        <div className="flex items-center gap-2 duration-300 hover:bg-gray-700 cursor-pointer p-2 px-4 rounded-lg">
          <GridOutline color="white" /> <span>Feed</span>
        </div>
        <div className="flex items-center gap-2 duration-300 hover:bg-gray-700 cursor-pointer p-2 px-4 rounded-lg">
          <PeopleOutline color="white" /> <span>My Community</span>
        </div>
        <div className="flex items-center gap-2 duration-300 hover:bg-gray-700 cursor-pointer p-2 px-4 rounded-lg">
          <ChatboxOutline color="white" /> <span>Messages</span>
        </div>
        <div className="flex items-center gap-2 duration-300 hover:bg-gray-700 cursor-pointer p-2 px-4 rounded-lg">
          <NotificationsOutline color="white" /> <span>Notifications</span>
          <span className="bg-red-600 px-2.5 rounded-full text-white">
            2
          </span>
        </div>
        <div className="flex items-center gap-2 duration-300 hover:bg-gray-700 cursor-pointer p-2 px-4 rounded-lg">
          <GridOutline color="white" /> <span>Profile</span>
        </div>
        <div className="flex items-center gap-2 duration-300 hover:bg-gray-700 cursor-pointer p-2 px-4 rounded-lg">
          <SettingsOutline color="white" /> <span>Settings</span>
        </div>
        <div className="flex items-center gap-2 duration-300 hover:bg-gray-700 cursor-pointer p-2 px-4 rounded-lg">
          <LogOutOutline color="white" /> <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export const RightSideBar = () => {
  return (
    <div className="sticky top-20 h-full w-[23%] pl-5 lg:flex hidden pt-5">
      <div>RightSideBar</div>
    </div>
  );
};
