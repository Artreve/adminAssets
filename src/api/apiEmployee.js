import { createAsyncThunk } from "@reduxjs/toolkit";

const url = "http://localhost:5000/api/employee";

export const getEmployees = createAsyncThunk(
  "employee/getEmpleado",
  async (page) => {
    const response = await fetch(`${url}?page=${page}`);
    const responseData = await response.json();
    return responseData.data;
  }
);

export const updateEmployed = createAsyncThunk (
  "employee/updateEmpleado",
  async(id, employee) =>{
    const response = await fetch(`${url}/${id}`,{
      method: "PUT",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(employee)
    });
    const responseData = await response.json();
    return responseData;
  }
)

export const deleteEmployee = createAsyncThunk(
  "employee/deleteEmployee",
  async (id) => {
    await fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return id;
  }
);

export const createEmployee = createAsyncThunk(
  "employee/createEmployee",
  async (employee) => {
    const { first_name, last_name, cuit, team_id, join_date, rol } = employee;
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
  }
);

export const getEmployeeById = async (id) => {
  const response = await fetch(`${url}/${id}`);
  const responseData = await response.json();
  return responseData.menssage;
};
