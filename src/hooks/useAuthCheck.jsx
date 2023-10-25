import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setIsLoggedIn,
  setUser,
  setLoading,
} from "../redux/features/authenication/authenicationSlice";
import fetchCurrentUser from "../utils/fetchUser";

const useAuthCheck = () => {
  const [authloading, setAuthLoading] = useState(true);
  const dispatch = useDispatch();
  const fetchuser = async (token) => {
    const user = await fetchCurrentUser(token);
    Cookies.set("user", JSON.stringify(user));
    if (user?.is_owner) {
      dispatch(setUser(true));
    } else {
      dispatch(setUser(false));
    }
  };
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const decoded = jwtDecode(token);
      const { exp } = decoded;
      const expiredtime = new Date(exp * 1000);
      if (new Date() >= expiredtime) {
        Cookies.remove("token");
        Cookies.remove("user");
        dispatch(setIsLoggedIn(false));
      } else {
        fetchuser(token);
        dispatch(setIsLoggedIn(true));
      }
    }
    setAuthLoading(false);
    dispatch(setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  return authloading;
};

export default useAuthCheck;
