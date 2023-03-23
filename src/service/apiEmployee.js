import { setEmployees } from "../features/empleados/empleadosSlice";
export async function fetchEmployeesAsync(dispatch) {
  try {
    const response = await fetch("http://localhost:5000/api/employee");
    const responseData = await response.json();
    dispatch(setEmployees(responseData))
  } catch (error) {
    console.log(error);
  }
};
