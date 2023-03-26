import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import InputForm from "../../components/common/InputForm";
import { successAlert } from "../../utils/alertas";
import { createEmployee } from "../../api/apiEmployee";
function EmployedAdd() {
  //Funciones
  const handleChange = (e) => {
    setEmpleado({ ...empleado, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createEmployee({ ...empleado}));
    successAlert(() => navigate("/"));
  };

  //Hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [empleado, setEmpleado] = useState({
    first_name: "",
    last_name: "",
    cuit: "",
    team_id: "",
    join_date: "",
    rol: ""
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <form className="form" onSubmit={handleSubmit}>
            {<InputForm employee={empleado} handleChange={handleChange} />}
            <Link to="/" className="btn btn-secondary my-3">
              Cancelar
            </Link>
            <button type="submit" className="btn btn-success my-3 mx-3">
              Crear empleado
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EmployedAdd;
