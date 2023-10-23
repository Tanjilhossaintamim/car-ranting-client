import { Outlet } from "react-router-dom";
import NavBar from "../components/shared/Navbar/NavBar";

const MainLayout = () => {
  return (
    <div className="font-fira-sans">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
