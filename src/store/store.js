import { configureStore } from "@reduxjs/toolkit";
import quotationReducer from "./quotationSlice";

export const store = configureStore({
  reducer: {
    quotation: quotationReducer,
  },
});
