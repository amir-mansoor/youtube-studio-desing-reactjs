import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { CircleHelp, Menu, Plus, Search } from "lucide-react";
import Sidebar from "./Sidebar"; // Import Sidebar Component

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      {/* Fixed Header */}
      <div className="px-4 py-2 shadow-md  w-full fixed top-0 z-50">
        <div className="flex items-center justify-between">
          {/* Left Section (Logo + Menu) */}
          <div className="flex space-x-5 items-center">
            <button
              className="p-2 hover:backdrop-brightness-125 rounded-full"
              onClick={() => setSidebarOpen(!sidebarOpen)} // Toggle Sidebar
            >
              <Menu size={25} className="text-white" />
            </button>
            <h1 className="font-extrabold text-xl text-white">YoutubeStudio</h1>
          </div>

          {/* Center Section (Search Bar) */}
          <div className="flex-1 flex justify-center">
            <div className="flex items-center bg-[#161616] p-2 rounded-full space-x-3 w-[700px] max-w-full">
              <Search className="text-gray-400" />
              <input
                placeholder="Search across your channel"
                className="w-full bg-transparent p-1 outline-none text-white placeholder-gray-400"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-3">
            <CircleHelp />
            <button className="flex items-center border px-3 py-1 text-center rounded-full hover:backdrop-brightness-125">
              <Plus /> Create
            </button>
            <img
              className="w-10 h-10 rounded-full"
              src={Logo}
              alt="Default avatar"
            />
          </div>
        </div>
      </div>

      {/* Fixed Sidebar Below Header */}
      <Sidebar isOpen={sidebarOpen} />

      {/* Main Content */}
      <div
        className={`p-6 text-white mt-[60px] transition-all ${
          sidebarOpen ? "ml-56" : "ml-16"
        }`}
      >
        Main Content Here
      </div>
    </div>
  );
};

export default Header;
