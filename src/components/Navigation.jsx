import React from "react";
import logo from "../assets/logo.png";
import { FaRegBell, FaUserCircle } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";

function Navigation() {
  return (
    <>
      <div className="bg-gray-800 text-white flex justify-between py-3 px-6 rounded-lg mb-4">
        <div>
          <img src={logo} alt="Logo" style={{ width: "50px" }} className="rounded-full"/>
        </div>

        <div className="flex gap-4">
          <div>
            <input
              type="text"
              className="bg-gray-700 text-white px-4 py-3 rounded-full"
              placeholder="Search"
              style={{ width: "500px" }}
            />
          </div>

          <div>
            <div className="flex bg-gray-700 p-2 gap-2 rounded-full">
              <div className="rounded-full px-4 py-1 flex gap-2 cursor-pointer border border-gray-500">
                <div className="pt-1">
                  <FaMoon />
                </div>
                <div>Dark</div>
              </div>
              <div className="rounded-full px-4 py-1 flex gap-2 cursor-pointer bg-gray-700 text-white">
                <div className="pt-1">
                  <IoSunnySharp />
                </div>
                <div>Light</div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex bg-gray-700 text-white gap-2 p-3 rounded-full text-xl">
              <FaRegBell />
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="text-right">
            <div className="font-bold text-lg">Mas Poci</div>
            <div>Trial</div>
          </div>
          <div className="text-5xl">
            <FaUserCircle />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
