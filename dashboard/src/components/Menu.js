import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {logout} from "../api/auth";

const Menu = ({user}) => {
  const [selectedMenu,setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen,setIsProfileDropdownOpen] = useState(false);

  const handleMenuCLick = (indx) => {
    setSelectedMenu(indx);
  }

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  }
  const menuClass = "menu";
  const activeMenuCLass = "menu selected";

  const handleLogout = async () => {
    try {
      await logout();                             // clear cookie
      window.location.href = "http://localhost:3000/login"; // back to frontend
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration:"none"}} to="/" onClick={()=>handleMenuCLick(0)}>
            <p className={selectedMenu===0 ? activeMenuCLass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/orders" onClick={()=>handleMenuCLick(1)}>
            <p className={selectedMenu===1 ? activeMenuCLass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/holdings" onClick={()=>handleMenuCLick(2)}>
            <p className={selectedMenu===2 ? activeMenuCLass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/positions" onClick={()=>handleMenuCLick(3)}>
            <p className={selectedMenu===3 ? activeMenuCLass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/funds" onClick={()=>handleMenuCLick(4)}>
            <p className={selectedMenu===4 ? activeMenuCLass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to="/apps" onClick={()=>handleMenuCLick(5)}>
            <p className={selectedMenu===5 ? activeMenuCLass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">{user?.username}</p>
          <button onClick={handleLogout} style={{ marginLeft: "12px" }}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;