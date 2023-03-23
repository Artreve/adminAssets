export const fetchEmployeesAsync =()=>{
    return async () =>{
        console.log('estoy en eployee id')
    // dispatch(setLoading(true))
    try {
        console.log('Entre en get empleados')
        // const response = await axios.get('http://localhost:3000/api/employee')
        const response = await fetch('http://localhost:3000/api/employee')
        const data = await response.json()
        // dispatch(setEmployees(data))
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
}
