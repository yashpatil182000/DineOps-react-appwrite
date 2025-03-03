import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  MdTableRestaurant,
  MdOutlinePayment,
  MdSpaceDashboard,
  MdRestaurantMenu,
} from "react-icons/md";
import { TbList } from "react-icons/tb";
import { HiUserAdd } from "react-icons/hi";

function Sidebar() {
  const links = [
    {
      path: "/manager-dashboard",
      name: "Dashboard",
      icon: <MdSpaceDashboard size={22} />,
    },
    {
      path: "/manager-dashboard/table-status",
      name: "Table Status",
      icon: <MdTableRestaurant size={22} />,
    },
    {
      path: "/manager-dashboard/orders",
      name: "Orders",
      icon: <TbList size={22} />,
    },
    {
      path: "/manager-dashboard/table-status",
      name: "Payments",
      icon: <MdOutlinePayment size={22} />,
    },
    {
      path: "/manager-dashboard/view-menu",
      name: "View Menu",
      icon: <MdRestaurantMenu size={22} />,
    },
    {
      path: "/manager-dashboard/table-status",
      name: "Add Waiter",
      icon: <HiUserAdd size={22} />,
    },
  ];

  const location = useLocation();

  console.log("this is location:", location);

  return (
    <>
      <div className="h-screen bg-gray-100 px-8 shadow-lg a shadow-black/50 me-10">
        <div className="pt-5 px-8 mb-2">
          <p className="text-3xl font-bold text-primary ">DineOPs</p>
        </div>
        <hr className="opacity-25" />
        <div className="my-2">
          {links.map((link, index) => (
            <Link to={link.path} key={index}>
              <div
                className={`flex items-center gap-3 px-5 py-2 rounded-lg hover:bg-gray-200 hover:text-primary mb-2 ${
                  location.pathname == link.path
                    ? "bg-gray-200 text-primary font-semibold"
                    : null
                } `}
              >
                <span>{link.icon}</span>
                <span>{link.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
