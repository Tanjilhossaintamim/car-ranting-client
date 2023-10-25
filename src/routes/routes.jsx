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
import UserCar from "../pages/UserCar/UserCar";
import About from "../pages/About/About";
import Error from "../pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
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
      {
        path: "/myCars",
        element: (
          <ExtraProtectedroute>
            <UserCar />
          </ExtraProtectedroute>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
export default router;
