import { RouterProvider } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import routes from "./routes/routes";

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
