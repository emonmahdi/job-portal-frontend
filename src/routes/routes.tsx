import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Jobs from "../pages/Jobs/Jobs";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Registration />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
]);

export default routes;
