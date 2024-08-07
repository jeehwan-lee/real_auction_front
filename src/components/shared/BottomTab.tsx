import React from "react";
import { IoIosSearch } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { RxHome } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

function BottomTab() {
  const location = useLocation().pathname;

  if (location.split("/")[1] === "auction") return null;

  return (
    <div className="bg-white shadow-md justify-between flex py-4 px-6 items-center fixed bottom-0 z-50 w-full max-w-[430px]">
      <Link to="/">
        <RxHome
          className={`text-3xl  ${
            location === "/" ? "text-gray-800" : "text-gray-400"
          }  hover:text-gray-800 cursor-pointer`}
        />
      </Link>
      <Link to="/myAuction">
        <IoChatbubbleEllipsesOutline
          className={`text-3xl  ${
            location === "/myAuction" ? "text-gray-800" : "text-gray-400"
          }  hover:text-gray-800 cursor-pointer`}
        />
      </Link>
      <Link to="/register">
        <CiCirclePlus
          className={`text-4xl  ${
            location === "/register" ? "text-gray-800" : "text-gray-400"
          }  hover:text-gray-800 cursor-pointer`}
        />
      </Link>
      <Link to="/notice">
        <CiBellOn
          className={`text-4xl  ${
            location === "/notice" ? "text-gray-800" : "text-gray-400"
          }  hover:text-gray-800 cursor-pointer`}
        />
      </Link>
      <Link to="/profile">
        <VscAccount
          className={`text-3xl  ${
            location === "/profile" ? "text-gray-800" : "text-gray-400"
          }  hover:text-gray-800 cursor-pointer`}
        />
      </Link>
    </div>
  );
}

export default BottomTab;
