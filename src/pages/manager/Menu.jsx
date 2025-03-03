import React from "react";
import Sidebar from "../../components/Sidebar";

function Menu() {
  return (
    <>
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <div className=" w-full">
          <p>This is Menu </p>
        </div>
      </div>
    </>
  );
}

export default Menu;
