import { createBrowserRouter } from "react-router-dom";
import ManagerDashboard from "../pages/manager/ManagerDashboard";
import Tables from "../pages/manager/Tables";
import Orders from "../pages/manager/Orders";
import Menu from "../pages/manager/Menu";

const routes = createBrowserRouter([
  { path: "/manager-dashboard", element: <ManagerDashboard /> },
  { path: "/manager-dashboard/table-status", element: <Tables /> },
  { path: "/manager-dashboard/orders", element: <Orders /> },
  { path: "/manager-dashboard/view-menu", element: <Menu /> },
]);
export default routes;
