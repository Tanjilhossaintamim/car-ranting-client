import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  user: {},
};

const authenicationSlice = createSlice({
  name: "authenication",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});
export const { setToken,setUser } = authenicationSlice.actions;
export default authenicationSlice.reducer;
