import { configureStore } from "@reduxjs/toolkit";
import empleadosReducer from "../features/empleados/empleadosSlice";
import assetsReducer from "../features/activos/assetSlice";

export const store = configureStore({
  reducer: {
    employed: empleadosReducer,
    asset: assetsReducer,
  },
});
