import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  register: false,
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setRegister: (state, action) => {
      state.register = action.payload;
      // state.register = state.register ? false : true;
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setMode, setRegister, setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer;
