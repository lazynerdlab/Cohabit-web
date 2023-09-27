import { createSlice } from "@reduxjs/toolkit";
const initialState: Record<string, any> = {
  timeout: false,
  idleTimeOut: 1800000, // 30mins
  notAuthorized: false,
  serverError: false,
};

export const authSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    setTimeout: (state) => {
      state.timeout = true;
    },
    resetTimeout: (state) => {
      state.timeout = false;
    },
    setNotAuthorized: (state) => {
      state.notAuthorized = true;
    },
    resetNotAuthorized: (state) => {
      state.notAuthorized = false;
    },
    updateIdleTimeOut: (state) => {
      state.idleTimeOut = 1800000;
    },
    resetServerError: (state) => {
      state.serverError = false;
    },
    setServerError: (state) => {
      state.serverError = true;
    },
  },
});

export const {
  setTimeout,
  updateIdleTimeOut,
  resetTimeout,
  resetNotAuthorized,
  setServerError,
  setNotAuthorized,
  resetServerError,
} = authSlice.actions;
export default authSlice.reducer;
