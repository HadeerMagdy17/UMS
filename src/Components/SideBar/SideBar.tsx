import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaArrowCircleLeft, FaArrowCircleRight, FaHome, FaUserShield } from "react-icons/fa";
import { FaUsersLine } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import profile from "../../assets/images/profile.png";

export default function SideBar() {
  let [isCollapsed, setIsCollapsed] = useState(false);

  let toggleCollapse=()=>{

    setIsCollapsed(! isCollapsed)
  }

  return (
    <div className="sidebarContainer vh-100">
      <Sidebar collapsed={isCollapsed} className="vh-100">
        <div className="text-center my-5">
          <div>
            {isCollapsed ?<FaArrowCircleRight onClick={toggleCollapse} size={30} className="my-2" />
            :
            <FaArrowCircleLeft onClick={toggleCollapse} size={30} className="my-2"/>
            }
            
          </div>
          <img src={profile} className="w-50 rounded-circle" />
          <h6 className="my-2">Adam Mohamed</h6>
          <h6 className="text-warning">Admin</h6>
        </div>

        <Menu>
          <MenuItem icon={<FaHome />} component={<Link to="/dashboard" />}>
            Home
          </MenuItem>
          <MenuItem
            icon={<FaUsersLine />}
            component={<Link to="/dashboard/users-list" />}
          >
            {" "}
            Users
          </MenuItem>
          <MenuItem
            icon={<FaUserShield />}
            component={<Link to="/dashboard/user-data" />}
          >
            Add user
          </MenuItem>
          <MenuItem
            icon={<CgProfile />}
            component={<Link to="/dashboard/profile" />}
          >
            {" "}
            Profile
          </MenuItem>
          <MenuItem icon={<MdLogout />} component={<Link to="" />}>
            {" "}
            Logout
          </MenuItem>
        </Menu>
      </Sidebar>
      ;
    </div>
  );
}
