import { createSlice } from "@reduxjs/toolkit";
const initialState={
    employees: [],
    loading: false,
    error: null

}
export const empladosSlice = createSlice({
    name: 'employed',
    initialState: initialState,
    reducers:{
        setEmployees: (state, action) =>{
            state.employees = action.payload
        },
        setLoading: (state, action) =>{
            state.loading = action.payload
        },
        setError: (state, action) =>{
            state.error = action.payload
        }
    },
})
export const {setEmployees,setLoading,setError} = empladosSlice.actions
export default empladosSlice.reducer