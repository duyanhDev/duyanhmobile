import React from "react";
import HeaderAdmin from "./HeaderAdmin";
import SliderBar from "./SliderBar";
import "./Admin.scss"; // Import SCSS file
import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div className="container">
      <div className="admin-container">
        <div className="admin-header">
          <HeaderAdmin />
        </div>
      </div>
      <div className="admin-content">
        <SliderBar />
        <div className="content-product">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;
