import { createAsyncThunk } from "@reduxjs/toolkit";

const url = "http://localhost:5000/api/asset";

export const getAssetss = createAsyncThunk("assets/getAssets", 
async (page) => {
  try {
    const response = await fetch(`${url}?page=${page}`);
    const responseData = await response.json();
    return responseData.data;

  } catch (error) {
    console.log(error);
  }
});

export const updateAssets = createAsyncThunk(
  "assets/updateAsset",
  async (asset) => {
    try {
      const response = await fetch(`${url}/${asset.idasset}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: asset.name,
          type: asset.type,
          code: asset.code,
          marca: asset.marca,
          purchase_date: asset.purchase_date,
          description: asset.description,
          employeeid: asset.employeeid
        }),
      });
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteAsset = createAsyncThunk("asset/deleteAsset", async (id) => {
  try {
    await fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return id;
  } catch (error) {
    console.log(error);
  }
});

export const createAsset = createAsyncThunk(
  "asset/createAsset",
  async (asset) => {
    const { name, type, code, marca, description, purchase_date, employeeid } =
      asset;
    try {
      const response = await fetch(`${url}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          type,
          code,
          marca,
          description,
          purchase_date,
          employeeid,
        }),
      });
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getAssetById = async (id) => {
  try {
    const response = await fetch(`${url}/${id}`);
    const responseData = await response.json();
    return responseData.data;
  } catch (error) {
    console.log(error);
  }
};
