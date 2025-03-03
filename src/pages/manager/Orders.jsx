import React from "react";
import Sidebar from "../../components/Sidebar";

function Orders() {
  return (
    <>
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <div className=" w-full">
          <p>This is Orders </p>
        </div>
      </div>
    </>
  );
}

export default Orders;
