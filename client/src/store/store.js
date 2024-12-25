import authReducer from "./auth-slilce/index";
import { configureStore } from "@reduxjs/toolkit";
import adminProductsSlice from "./admin/products-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    adminProducts: adminProductsSlice,
  },
});

export default store;
