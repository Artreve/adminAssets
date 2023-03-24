import { createAsyncThunk } from "@reduxjs/toolkit";


const url = "http://localhost:5000/api/employee";


export const getEmployees = createAsyncThunk(
  "employee/getEmpleado",
  async () => {
    const response = await fetch(`${url}?page=5`);
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
