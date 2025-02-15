import React from "react";
import {
  Home,
  Video,
  ChartLine,
  Users,
  Subtitles,
  ShieldCheck,
  DollarSign,
  Layout,
  Music,
  Settings,
  MessageSquare,
} from "lucide-react";
import Logo from "../assets/logo.png"; // Channel logo
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  const menuItems = [
    { icon: <Home />, name: "Dashboard", path: "/" },
    { icon: <Video />, name: "Content", path: "/content" },
    { icon: <ChartLine />, name: "Analytics", path: "/analytics" },
    { icon: <Users />, name: "Community", path: "/community" },
    { icon: <Subtitles />, name: "Subtitles", path: "/subtitles" },
    { icon: <ShieldCheck />, name: "Copyright", path: "/copyright" },
    { icon: <DollarSign />, name: "Earn", path: "/earn" },
    { icon: <Layout />, name: "Customization", path: "customization" },
    { icon: <Music />, name: "Audio Library", path: "/library" },
  ];

  const bottomItems = [
    { icon: <Settings />, name: "Settings" },
    { icon: <MessageSquare />, name: "Send Feedback" },
  ];

  return (
    <div
      className={`fixed border-r border-r-gray-700 left-0 top-[60px] h-[calc(100vh-60px)] p-4 flex  flex-col justify-between transition-all duration-300 ${
        isOpen ? "w-56" : "w-16 items-center"
      }`}
    >
      <div className="flex flex-col items-center mb-4">
        <img
          src={Logo}
          alt="Channel Logo"
          className={`rounded-full transition-all duration-300 ${
            isOpen ? "w-20 h-20 mb-2" : "w-8 h-8"
          }`}
        />
        {isOpen && <span className="text-white font-semibold">My Channel</span>}
      </div>

      {/* Sidebar Menu Items */}
      <div className="flex flex-col space-y-2">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-3 p-2 rounded-md hover:bg-[#161616] text-white cursor-pointer ${
                isActive ? "bg-[#161616]" : "hover:bg-[#1e1e1e]"
              }`
            }
          >
            <div className="w-6 h-6 flex items-center justify-center">
              {React.cloneElement(item.icon, { size: 24 })}
            </div>
            {isOpen && <span className="text-base">{item.name}</span>}
          </NavLink>
        ))}
      </div>

      <div className="mt-auto flex flex-col space-y-2">
        {bottomItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 p-2 rounded-md hover:bg-[#161616] text-white cursor-pointer"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              {React.cloneElement(item.icon, { size: 24 })}
            </div>
            {isOpen && <span className="text-base">{item.name}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
