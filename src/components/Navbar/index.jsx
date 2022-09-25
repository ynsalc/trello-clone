import React from "react";
import icon from "assets/img/square-icon.png";
import logo from "assets/img/trello-logo.png";
import avatar from "assets/img/user.png";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between p-3 border-b border-gray-200">
      <div className="flex items-center">
        <div className="mr-2">
          <img src={icon} className="w-[15px] h-[15px]" alt="icon" />
        </div>
        <div>
          <div className="flex items-center">
            <img src={logo} className="w-[30px] h-[18px]" alt="logo" />
            <span>Trello</span>
          </div>
        </div>
      </div>
      <div className="">
        <img className="w-[25px] h-[25px]" src={avatar} alt="avatar" />
      </div>
    </div>
  );
};

export default Navbar;
