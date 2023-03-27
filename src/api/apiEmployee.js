import { createAsyncThunk } from "@reduxjs/toolkit";

const url = "http://localhost:5000/api/employee";

export const getEmployees = createAsyncThunk(
  "employee/getEmpleado",
  async (page) => {
    try {
      const response = await fetch(`${url}?page=${page}`);
      const responseData = await response.json();
      return responseData.data;
    } catch (error) {
      console.log(error)
    }
  }
);

export const updateEmployed = createAsyncThunk (
  "employee/updateEmpleado",
  async(employee) =>{
    try {
      const response = await fetch(`${url}/${employee.idemployee}`,{
        method: "PUT",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          first_name: employee.first_name,
          last_name: employee.last_name,
          cuit: employee.cuit,
          team_id: employee.team_id,
          join_date: employee.join_date,
          rol: employee.rol,
        }),
      });
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.log(error)
    }
  }
)

export const deleteEmployee = createAsyncThunk(
  "employee/deleteEmployee",
  async (id) => {
    try {
      await fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return id;
    } catch (error) {
      console.log(error)
    }
  }
);

export const createEmployee = createAsyncThunk(
  "employee/createEmployee",
  async (employee) => {
    const { first_name, last_name, cuit, team_id, join_date, rol } = employee;
    try {
      const response = await fetch(`${url}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name,
          last_name,
          cuit,
          team_id,
          join_date,
          rol,
        }),
      });
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.log(error)
    }
  }
);

export const getEmployeeById = async (id) => {
  try {
    const response = await fetch(`${url}/${id}`);
    const responseData = await response.json();
    return responseData.menssage;
  } catch (error) {
    console.log(error)
  }

};
