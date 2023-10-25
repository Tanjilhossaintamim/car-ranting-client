import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  is_loggedin: false,
  isOwner: false,
  loading: true,
};

const authenicationSlice = createSlice({
  name: "authenication",
  initialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.is_loggedin = action.payload;
      state.loading = false;
    },
    setUser: (state, action) => {
      state.isOwner = action.payload;
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    logout: (state) => {
      state.isOwner = false;
      state.is_loggedin = false;
      Cookies.remove("token");
      Cookies.remove("user");
    },
  },
});
export const { setIsLoggedIn, setUser, setLoading, logout } =
  authenicationSlice.actions;
export default authenicationSlice.reducer;
