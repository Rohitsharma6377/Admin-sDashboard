import React from "react";
import layout from "../feature/layout.module.css";
import moment from "moment/moment";
import { BiSearch } from "react-icons/bi";
import hero1 from "/Users/THE-HELL-LORD/Desktop/Dashboard/src/assets/hero1.jpg";
import Sidebar from "../sidebar/Sidebar";
import { Navigate, Outlet, useLocation } from "react-router-dom";
const Layout = () => {
  const {pathname} = useLocation()
  return (
    <div className={layout.container}>
      <Sidebar />
      {/* making the dashboard defualt at the deafult route */}
      {pathname === '/' && <Navigate to='/dashboard' />}
      <div className={layout.dashboard}>
        <div className={layout.topbasegrediant}>
          <div className="gradient-red"></div>
          <div className="gradient-orange"></div>
          <div className="gradient-blue"></div>
        </div>
        <div className={layout.header}>
          <span>{moment().format("dddd, Do MMM YYYY")}</span>
          <div className={layout.search}>
            <BiSearch size={20} />
            <input type="text" className={layout.input} placeholder="Search" />
          </div>
          <div className={layout.profile}>
            <img src={hero1} alt="person img" />
            <div className={layout.details}>
              <span>Rohit Sharma</span>
              <span>Rohitsharmag2005@gmail.com</span>
            </div>
          </div>
        </div>
        <div className={layout.content}>
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default Layout;
