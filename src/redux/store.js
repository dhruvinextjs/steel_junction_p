import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore, FLUSH, REHYDRATE } from "redux-persist";
import AuthSlice from "./AuthSlice";
import GetContentSlice from "./GetContentSlice";
import GetProductSlice from "./ProductSlice";
import GetFavoriteSlice from "./FavouriteSlice";
import GetRetailerProductSlice from "./RetailerProductSlice";
import GetCartSlice from "./CartSlice";
import GstDetailSlice from "./GstDetailSlice"
// const rootPersistConfig = {
//   key: "root",
//   storage,
//   whitelist: [""],
// };
const authPersistConfig = {
  key: "auth",
  storage,
  blacklist: ["loading"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, AuthSlice),
  getContent: GetContentSlice,
  getProduct: GetProductSlice,
  getfavorites: GetFavoriteSlice,
  getRetailerProduct: GetRetailerProductSlice,
  getCart: GetCartSlice,
  gstDetail:GstDetailSlice
});
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], // Persist auth state
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
