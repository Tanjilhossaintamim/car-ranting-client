import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  is_loggedin: false,
  isOwner: false,
};

const authenicationSlice = createSlice({
  name: "authenication",
  initialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.is_loggedin = action.payload;
    },
    setUser: (state, action) => {
      state.isOwner = action.payload;
    },
  },
});
export const { setIsLoggedIn, setUser } = authenicationSlice.actions;
export default authenicationSlice.reducer;
