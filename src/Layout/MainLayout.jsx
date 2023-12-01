import { Outlet } from "react-router-dom";
import NavBar from "../components/shared/Navbar/NavBar";
import Aos from "aos";
import { useEffect } from "react";
import Footer from "../components/shared/Footer/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="font-fira-sans">
      <Toaster
        toastOptions={{
          success: {
            duration: 1500,
          },
          error: {
            duration: 1500,
          },
        }}
      />

      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
