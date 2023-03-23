import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchEmployeesAsync } from "../../api/apiEmployee";
import { Employees } from "./EmployedList";
import {Loading} from "../../components/common/Loading"
// import { advertencia } from "../plugins/alertas";
function Index() {
  const dispatch = useDispatch();
  const empleados = useSelector((state) => state.employed.employees);
  const loading = useSelector((state)=>state.employed.loading)
  const handleDelete = (id) => {
    // advertencia(() => dispatch(deleteEmployed(id)));
  };

  useEffect(()=>{
    fetchEmployeesAsync(dispatch);
  },[fetchEmployeesAsync])


  return (
    <div className="container">
      <div className="row">
        <div className="col-6 col-md-4 mt-3">
          <Link
            to="create_employed"
            type="button"
            className="btn btn-success fw-bold mx-2"
          >
            Crear nuevo empleado
          </Link>
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        {loading ? (<Loading/>):(<Employees employees={empleados} onDelete={handleDelete} />)}  
      </div>
    </div>
  );
}

export default Index;
