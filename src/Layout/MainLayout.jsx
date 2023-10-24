import { Outlet } from "react-router-dom";
import NavBar from "../components/shared/Navbar/NavBar";
import Aos from "aos";
import { useEffect } from "react";

const MainLayout = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="font-fira-sans">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
