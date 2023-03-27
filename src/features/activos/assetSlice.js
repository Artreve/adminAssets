import { createSlice } from "@reduxjs/toolkit";
import { getAssetss, deleteAsset} from "../../api/apiAssets";
const initialState = {
  assets: [],
  currentPage: 1,
  loading: false,
  error: null
};
export const assetsSlice = createSlice({
  name: "asset",
  initialState: initialState,
  reducers: {
    setPageAction: (state, action)=>{
      state.currentPage = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      //VER COMO IMPLEMENTAR .addMatcher
      //-----------GET------------
      .addCase(getAssetss.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAssetss.fulfilled, (state, action) => {
        state.loading = false;
        state.employees = action.payload;
      })
      .addCase(getAssetss.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      //-----------DELETE------------
      .addCase(deleteAsset.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteAsset.fulfilled, (state, action) => {
        state.loading = false;
        state.employees.rows = state.employees.rows.filter((employee) => employee.idemployee !== action.payload);
      })
      .addCase(deleteAsset.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      //----------CREATE--------------
      // .addCase(createEmployee.pending, (state) => {
      //   state.loading = true;
      // })
      // .addCase(createEmployee.fulfilled, (state, action) => {
      //   state.loading = false;
      //   console.log('estoy dentro del slice')
      //   console.log(action.payload)
      //   state.employees.rows = [...state.employees.rows, action.payload];
      //   console.log(state.employees.rows)
      // })
      // .addCase(createEmployee.rejected, (state, action) => {
      //   state.loading = false;
      //   state.error = action.error.message;
      // });
  },
});
export const { setPageAction } = assetsSlice.actions;
export default assetsSlice.reducer;