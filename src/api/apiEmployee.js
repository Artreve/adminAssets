// import { setEmployees, setLoading, setMessage } from "../features/empleados/empleadosSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
const url = "http://localhost:5000/api/employee";
// export async function fetchEmployeesAsync(dispatch) {
// dispatch(setLoading(true))
//   try {
//     const response = await fetch(url);
//     const responseData = await response.json();
//     dispatch(setEmployees(responseData))
//   } catch (error) {
//     console.log(error);
//     dispatch(setMessage(error))
//   }finally{
//     dispatch(setLoading(false))
//   }
// };

// export async function deleteEmployee (id){
//   try {
//     const response = await fetch(`${url}/${id}`,{
//       method:'DELETE',
//       headers:{
//         'Content-Type':'application/json'
//       },
//     })
//     const responseData = response.json()
//     console.log(responseData)
//   } catch (error) {
//     console.log(error)
//   }
// }

export const getEmployees = createAsyncThunk(
  "employee/getEmpleado",
  async () => {
    const response = await fetch(url);
    const responseData = await response.json();
    return responseData;
  }
);

export const deleteEmployee = createAsyncThunk(
  "employee/deleteEmployee",
  async (id) => {
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseData = response.json();
    return responseData;
  }
);
