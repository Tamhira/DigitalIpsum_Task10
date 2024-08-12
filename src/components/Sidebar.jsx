import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaRegUser, FaUserCircle } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { BsShop } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import img1 from "../assets/img1.png";

function Sidebar() {
  const location = useLocation();
  const selectedTab = location.pathname;

  return (
    <div className="bg-gray-800 text-white px-6 pt-6 rounded-lg flex flex-col justify-between">
      <div className="pb-6">
        <div 
          className={`pb-6 flex gap-6 cursor-pointer ${selectedTab === "/" ? "text-[#593EF8] font-bold" : "text-gray-400"}`}
        >
          <div className={`pt-1 ${selectedTab === "/" ? "text-[#593EF8]" : "text-gray-400"}`}>
            <IoHomeOutline />
          </div>
          <Link to="/" className={`${selectedTab === "/" ? "text-[#593EF8]" : "text-gray-400"}`}>Dashboard</Link>
        </div>
        <div 
          className={`pb-6 flex gap-6 cursor-pointer ${selectedTab === "/market" ? "text-[#593EF8] font-bold" : "text-gray-400"}`} 
        >
          <div className={`pt-1 ${selectedTab === "/market" ? "text-[#593EF8]" : "text-gray-400"}`}>
            <BsShop />
          </div>
          <Link to="/market" className={`${selectedTab === "/market" ? "text-[#593EF8]" : "text-gray-400"}`}>Market</Link>
        </div>
        <div 
          className={`pb-6 flex gap-6 cursor-pointer ${selectedTab === "/active" ? "text-[#593EF8] font-bold" : "text-gray-400"}`}
        >
          <div className={`pt-1 ${selectedTab === "/active" ? "text-[#593EF8]" : "text-gray-400"}`}>
            <HiOutlineSpeakerphone />
          </div>
          <Link to="/active" className={`${selectedTab === "/active" ? "text-[#593EF8]" : "text-gray-400"}`}>Active Bid</Link>
        </div>
        <div 
          className={`pb-6 flex gap-6 cursor-pointer ${selectedTab === "/portfolio" ? "text-[#593EF8] font-bold" : "text-gray-400"}`}
        >
          <div className={`pt-1 ${selectedTab === "/portfolio" ? "text-[#593EF8]" : "text-gray-400"}`}>
            <FaRegUser />
          </div>
          <Link to="/portfolio" className={`${selectedTab === "/portfolio" ? "text-[#593EF8]" : "text-gray-400"}`}>Portfolio</Link>
        </div>
        <div 
          className={`pb-6 flex gap-6 cursor-pointer ${selectedTab === "/favourite" ? "text-[#593EF8] font-bold" : "text-gray-400"}`}
        >
          <div className={`pt-1 ${selectedTab === "/favourite" ? "text-[#593EF8]" : "text-gray-400"}`}>
            <FaRegHeart />
          </div>
          <Link to="/favourite" className={`${selectedTab === "/favourite" ? "text-[#593EF8]" : "text-gray-400"}`}>Favourite</Link>
        </div>
      </div>

      <div className="bg-gray-700 text-xl px-6 py-2 rounded-lg mb-6 mt-36">
        <div className="font-semibold">All Balance</div>
        <div className="text-4xl text-[#593EF8] font-bold py-4">
          $96800
        </div>
        <div>
          <img src={img1} alt="" />
        </div>
        <div className="bg-[#593EF8] my-4 rounded-full px-2 text-white py-2 text-center">
          Top Up Balance
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
