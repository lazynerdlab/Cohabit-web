import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
// import logger from "redux-logger";
import authReducer from "./slice/authSlice";
import { authApi } from "./api/authApi";
import { dashboardApi } from "./api/dashboardApi";
import { landingPageApi } from "./api/landingPageApi";
import { settingApi } from "./api/settingApi";
import { onBoardingApi } from "./api/onBoardingApi";
import { flatmateApi } from "./api/flatmateApi";
import { houseApi } from "./api/houseApi";
import { attachmentApi } from "./api/attachmentApi";
export const store = configureStore({
  reducer: {
    api: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [dashboardApi.reducerPath]: dashboardApi.reducer,
    [landingPageApi.reducerPath]: landingPageApi.reducer,
    [onBoardingApi.reducerPath]: onBoardingApi.reducer,
    [settingApi.reducerPath]: settingApi.reducer,
    [flatmateApi.reducerPath]: flatmateApi.reducer,
    [houseApi.reducerPath]: houseApi.reducer,
    [attachmentApi.reducerPath]: attachmentApi.reducer,
  },
  // devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      dashboardApi.middleware,
      landingPageApi.middleware,
      onBoardingApi.middleware,
      flatmateApi.middleware,
      houseApi.middleware,
      settingApi.middleware,
      attachmentApi.middleware,
    ]),
  // .concat(logger),
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
