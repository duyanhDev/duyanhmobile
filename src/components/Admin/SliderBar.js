// Sidebar.js

import React from "react";

import "./Sidebar.scss"; // Import file CSS
import {
  MdDashboard,
  MdPhoneIphone,
  MdLaptop,
  MdShoppingCart,
  MdPeople,
} from "react-icons/md";
import { NavLink } from "react-router-dom";

const SliderBar = () => {
  return (
    <div className="sidebar" role="navigation" aria-label="Admin Sidebar">
      <div className="sidebar-header">
        <MdDashboard className="sidebar-icon" />
        <h2>Admin Dashboard</h2>
      </div>
      <ul className="sidebar-menu">
        <li>
          <NavLink to="/manage-products" className="active">
            <MdPhoneIphone className="sidebar-icon" /> Quản Lí Sản Phẩm
          </NavLink>
        </li>
        <li>
          <NavLink to="/manage-laptops" className="active">
            <MdLaptop className="sidebar-icon" /> Quản Lí Danh Mục Sản Phẩm
          </NavLink>
        </li>
        <li>
          <NavLink to="/manage-users" className="active">
            <MdPeople className="sidebar-icon" /> Quản Lí Người Dùng
          </NavLink>
        </li>
        <li>
          <NavLink to="/manage-orders" className="active">
            <MdShoppingCart className="sidebar-icon" /> Quản Lí Đơn Hàng
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SliderBar;
