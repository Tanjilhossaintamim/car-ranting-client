import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import AddCar from "../pages/AddCar/AddCar";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import ExtraProtectedroute from "./ExtraProtectedroute";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import BookingList from "../pages/BookingList/BookingList";
import Search from "../pages/Search/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addCar",
        element: (
          <ExtraProtectedroute>
            <AddCar />
          </ExtraProtectedroute>
        ),
      },
      {
        path: "/login",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: "/signup",
        element: (
          <PublicRoute>
            <Signup />
          </PublicRoute>
        ),
      },
      {
        path: "/myBooking",
        element: (
          <PrivateRoute>
            <BookingList />
          </PrivateRoute>
        ),
      },
      {
        path: "/destination/:name",
        element: <Search />,
      },
    ],
  },
]);
export default router;
