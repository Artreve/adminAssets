import React, { useState } from "react";
// import {addEmployed} from "../features/empleados/empleadosSlice";
import { useNavigate} from "react-router-dom";
import { v4 as uuid } from "uuid";
import { useDispatch} from "react-redux";
import InputForm from "../components/common/InputForm";
import { successAlert } from "../plugins/alertas";
function EmployedAdd() {
  //Funciones
  const handleChange = (e) => {
    setEmpleado({ ...empleado, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
      // dispatch(addEmployed({ ...empleado, employee_id: uuid() }));
      successAlert(()=> navigate("/"))
     
  };

  //Hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [empleado, setEmpleado] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    hire_date: "",
    salary: 0,
    comission_pct: 0,
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <form className="form" onSubmit={handleSubmit}>
            {<InputForm employee={empleado} handleChange={handleChange} />}
            <button type="submit" className="btn btn-success my-3">
              Crear empleado +
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EmployedAdd;
