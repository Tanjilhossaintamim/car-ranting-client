import { createSlice } from "@reduxjs/toolkit";

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
  },
});
export const { setIsLoggedIn, setUser, setLoading } =
  authenicationSlice.actions;
export default authenicationSlice.reducer;
