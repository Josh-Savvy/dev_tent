/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React, { useState } from "react";
import * as ReactIcons from "react-ionicons";

export const LeftSideBar = () => {
  

  const links = [
    { icon: "GridOutline", link: "/", title: "Feed" },
    { icon: "PeopleOutline", link: "/community", title: "My community" },
    { icon: "ChatboxOutline", link: "#", title: "Messages" },
    { icon: "NotificationsOutline", link: "#", title: "Notifications" },
    { icon: "PersonOutline", link: "#", title: "Profile" },
    { icon: "SettingsOutline", link: "#", title: "Settings" },
  ];
  const [activeLink, setActiveLink] = useState("/");
  return (
    <div className="hidden md:flex sticky top-20 h-full w-[23%] pt-5">
      <div className="group grid gap-8 text-sm pl-3 select-none">
        {links?.map((link, i) => {
          interface IconType {
            [key: string]: React.ElementType;
          }
          const IconComponent: IconType = ReactIcons;
          const Icon = IconComponent[link.icon];
          return (
            <Link href={link.link ? link.link : "#"} key={i}>
              <div
                onClick={() => {
                  setActiveLink(link.link);
                  console.log({ link: link.link });
                  console.log({ pathname: pathname });
                }}
                className={`flex items-center gap-2 duration-300 ${
                  pathname === activeLink
                    ? "bg-gray-700 animate__fadeInUp"
                    : "bg-none"
                }animate__animated transition-all transition duration-300 hover:bg-gray-700 cursor-pointer p-2 px-4 rounded-lg`}
              >
                <Icon color="white" /> <span>{link.title}</span>
                {link.title == "Notifications" ? (
                  <span className="bg-red-600 px-3 rounded-full text-white">
                    2
                  </span>
                ) : (
                  ""
                )}
              </div>
            </Link>
          );
        })}

        <Link href="#">
          <div className="flex items-center gap-2 duration-300 hover:bg-gray-700 cursor-pointer p-2 px-4 rounded-lg">
            <ReactIcons.LogOutOutline color="white" /> <span>Logout</span>
          </div>
        </Link>
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
