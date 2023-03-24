import { createSlice } from "@reduxjs/toolkit";
import { getEmployees,deleteEmployee } from "../../api/apiEmployee";
const initialState = {
  employees: [],
  loading: false,
  error: null,
};
export const empladosSlice = createSlice({
  name: "employed",
  initialState: initialState,
  reducers: {
    // setEmployees: (state, action) =>{
    //     state.employees = action.payload
    // },
    // setLoading: (state, action) =>{
    //     state.loading = action.payload
    // },
    // setMessage: (state, action) =>{
    //     state.message = action.payload
    // }
  },
  extraReducers: (builder) => {
    builder
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
    //-----------DELETE------------
      }).addCase(deleteEmployee.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload.id)
        state.employees.data.rows = state.employees.data.rows.filter(employee => {
          console.log(employee.idemployee)
          return (employee.idemployee - 1) !== action.payload.id});
      })
      .addCase(deleteEmployee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { setEmployees, setLoading, setMessage } = empladosSlice.actions;
export default empladosSlice.reducer;

/*En el objeto extraReducers, utilizamos addCase para definir tres casos diferentes:

fetchData.pending: Este caso se ejecuta cuando la acción fetchData se está ejecutando. Aquí, simplemente cambiamos el estado loading a true.
fetchData.fulfilled: Este caso se ejecuta cuando la acción fetchData se ha completado con éxito. Aquí, cambiamos el estado loading a false y establecemos los datos devueltos por la API en el estado data.
fetchData.rejected: Este caso se ejecuta cuando la acción fetchData se ha completado con error. Aquí, cambiamos el estado loading a false y establecemos el mensaje de error en el estado error.*/
