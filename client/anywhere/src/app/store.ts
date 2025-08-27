import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/AuthSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const rootReducer = combineReducers({
  auth: authReducer,
});

const persistedReducer = persistReducer({
  key: "root",
  storage,
}, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
