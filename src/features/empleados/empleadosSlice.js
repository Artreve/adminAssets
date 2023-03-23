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

export const fetchEmployeesAsync =()=>{
    return async (dispatch) =>{
    dispatch(setLoading(true))
    try {
        const response = await fetch('http://localhost:5000/api/employee')
        const responseData = await response.json() 
        dispatch(setEmployees(responseData))
    } catch (error) {
        console.log(error)
    }finally{
        dispatch(setLoading(false))
    }
}
}
export default empladosSlice.reducer