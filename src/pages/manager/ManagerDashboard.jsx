import React from "react";
import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";

function ManagerDashboard() {
  return (
    <>
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <div className="">
          <p>This is manager Dashboard | Analytics nd All </p>
        </div>
      </div>
    </>
  );
}

export default ManagerDashboard;
