import { createSlice } from "@reduxjs/toolkit";
import { getEmployees, deleteEmployee,createEmployee } from "../../api/apiEmployee";
const initialState = {
  employees: [],
  loading: false,
  error: null,
};
export const empladosSlice = createSlice({
  name: "employed",
  initialState: initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      //VER COMO IMPLEMENTAR .addMatcher
      //-----------GET------------
      .addCase(getEmployees.pending, (state) => {
        state.loading = true;
      })
      .addCase(getEmployees.fulfilled, (state, action) => {
        state.loading = false;
        state.employees = action.payload;
      })
      .addCase(getEmployees.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      //-----------DELETE------------
      .addCase(deleteEmployee.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.loading = false;
        state.employees.rows = state.employees.rows.filter((employee) => employee.idemployee !== action.payload);
      })
      .addCase(deleteEmployee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      //----------CREATE--------------
      .addCase(createEmployee.pending, (state) => {
        state.loading = true;
      })
      .addCase(createEmployee.fulfilled, (state, action) => {
        state.loading = false;
        state.employees.rows = [...state.employees.rows, action.payload];
      })
      .addCase(createEmployee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { setEmployees, setLoading, setMessage } = empladosSlice.actions;
export default empladosSlice.reducer;