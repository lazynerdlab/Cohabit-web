import { combineReducers, configureStore } from "@reduxjs/toolkit";
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
import onboardingSlice from "./slice/onboardingSlice";
import userSlice from "./slice/userSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { hostApi } from "./api/hostApi";
import propertySlice from "./slice/propertySlice";

const rootReducer = combineReducers({
  api: authReducer,
  onboardingProcess: onboardingSlice,
  userData: userSlice,
  propertyData: propertySlice,
  [authApi.reducerPath]: authApi.reducer,
  [dashboardApi.reducerPath]: dashboardApi.reducer,
  [landingPageApi.reducerPath]: landingPageApi.reducer,
  [onBoardingApi.reducerPath]: onBoardingApi.reducer,
  [settingApi.reducerPath]: settingApi.reducer,
  [flatmateApi.reducerPath]: flatmateApi.reducer,
  [houseApi.reducerPath]: houseApi.reducer,
  [attachmentApi.reducerPath]: attachmentApi.reducer,
  [hostApi.reducerPath]: hostApi.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userData", "propertyData"], // Whitelist the reducers you want to persist
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  // devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([
      authApi.middleware,
      dashboardApi.middleware,
      landingPageApi.middleware,
      onBoardingApi.middleware,
      flatmateApi.middleware,
      houseApi.middleware,
      settingApi.middleware,
      attachmentApi.middleware,
      hostApi.middleware,
    ]),
  // .concat(logger),
});
const persistor = persistStore(store);
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { persistor, store };
