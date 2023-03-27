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
        state.assets = action.payload;
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
        state.assets.rows = state.assets.rows.filter((asset) => asset.idasset !== action.payload);
      })
      .addCase(deleteAsset.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  },
});
export const { setPageAction } = assetsSlice.actions;
export default assetsSlice.reducer;