import { configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import swapiReducer from "./rootReducer";

export const store = configureStore({
  reducer: {
    swapi: swapiReducer
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger]
});
