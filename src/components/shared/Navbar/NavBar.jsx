import { Link, NavLink, useLocation } from "react-router-dom";
import NavLogo from "../../../assets/logo.svg";
import NavLogoSmall from "../../../assets/logo-small.png";
import { HiOutlineUser } from "react-icons/hi";
import { FiLock } from "react-icons/fi";
import { BiMenuAltLeft } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/features/authenication/authenicationSlice";
const NavBar = () => {
  const { isOwner, is_loggedin } = useSelector((state) => state.auth);
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const userLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setShowSidebar(false);
  }, [location]);
  return (
    <header className="bg-white py-2 sticky top-0 z-50 transition-all duration-150">
      <nav className="hidden lg:flex justify-between items-center h-16 bg-white px-8">
        {/* left side*/}
        <div>
          <Link to="/">
            <img src={NavLogo} alt="" />
          </Link>
        </div>
        {/* middle */}

        <div>
          <ul className="text-sm font-medium text-color-black flex items-center space-x-7">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            {isOwner && (
              <>
                <li>
                  <NavLink to="/addCar">Add Car</NavLink>
                </li>
                <li>
                  <NavLink to="/myCars">My Car</NavLink>
                </li>
              </>
            )}

            <li>
              <NavLink to="/myBooking">Booking List</NavLink>
            </li>
          </ul>
        </div>
        {/* right */}

        <div className="flex items-center space-x-5">
          {!is_loggedin ? (
            <>
              <Link
                to="/login"
                // className="px-5 py-3 bg-color-black-1 border border-color-black-1 rounded text-white text-base font-medium text-center"
                className="loginbtn"
              >
                <HiOutlineUser />
                Sign In
              </Link>
              <Link
                to="/signup"
                // className="px-5 py-3 bg-color-orange border border-color-orange rounded text-white text-base font-medium text-center"
                className="signup"
              >
                <FiLock />
                Sign Up
              </Link>
            </>
          ) : (
            <span
              className="loginbtn cursor-pointer"
              onClick={() => userLogout()}
            >
              Logout
            </span>
          )}
        </div>
      </nav>
      {/* for mobile */}
      <div className="flex items-center justify-between h-16 px-4 lg:hidden">
        <div
          className="flex justify-center items-center text-4xl text-color-orange cursor-pointer"
          onClick={() => setShowSidebar(true)}
        >
          <BiMenuAltLeft />
        </div>
        <div>
          <Link to="/">
            <img src={NavLogoSmall} alt="" />
          </Link>
        </div>
        <div></div>
      </div>
      {/* sidebar */}
      <div
        className={`absolute ${
          showSidebar ? "left-0" : "-left-96"
        } transition-all duration-150 top-0 w-64 border-r border-color-black-1 bg-color-black-1 h-screen z-[1000] lg:hidden`}
      >
        <div>
          <div className="h-16 flex justify-between items-center bg-white text-2xl text-color-orange  px-2">
            <img src={NavLogo} alt="" className="w-2/3" />
            <RxCross2
              className="cursor-pointer"
              onClick={() => setShowSidebar(false)}
            />
          </div>
          <div className="mt-2">
            <ul className="font-medium text-sm mobilenav">
              <li className="py-2 text-white border-b border-[#828282]">
                <NavLink to="/" className="px-2">
                  Home
                </NavLink>
              </li>
              {isOwner && (
                <>
                  <li className="py-2 text-white border-b border-[#828282]">
                    <NavLink to="/addCar" className="px-2">
                      Add Car
                    </NavLink>
                  </li>
                  <li className="py-2 text-white border-b border-[#828282]">
                    <NavLink to="/myCars" className="px-2">
                      My Car
                    </NavLink>
                  </li>
                </>
              )}

              <li className="py-2 text-white border-b border-[#828282]">
                <NavLink to="/myBooking" className="px-2">
                  Booking List
                </NavLink>
              </li>
              {!is_loggedin ? (
                <>
                  <li className="py-2 text-white border-b border-[#828282]">
                    <NavLink to="/login" className="px-2">
                      Sign In
                    </NavLink>
                  </li>
                  <li className="py-2 text-white">
                    <NavLink to="/signup" className="px-2">
                      Sign Up
                    </NavLink>
                  </li>
                </>
              ) : (
                <li className="py-2 text-white">
                  <span
                    className="px-2 cursor-pointer"
                    onClick={() => userLogout()}
                  >
                    Logout
                  </span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
