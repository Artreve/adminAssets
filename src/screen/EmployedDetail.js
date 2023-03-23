import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ErrorMessage from "../components/common/ErrorMenssage";
import InputForm from "../components/common/InputForm";
import EmployedCard from "../components/employeeDetail/EmployeeCard";
import { Link } from "react-router-dom";
// import { updateEmployed } from "../features/empleados/empleadosSlice";
import { advertencia } from "../plugins/alertas";
function EmployedDetail() {
  //Funciones
  const empleadoSearch = () => {
    setEmpleado(empleados.find((empleado) => empleado.employee_id === id));
  };
  const handleChange = (e) => {
    setEmpleado({ ...empleado, [e.target.name]: e.target.value });
  };
  const handleCancelEdition = () => {
    empleadoSearch();
    setEdicion(false);
  };
  const handleConfirmEdition = () => {
    advertencia(()=>{
      // dispatch(updateEmployed(empleado))
      navigate("/")
    })
  };

  //Hooks
  const { id } = useParams();
  const empleados = useSelector((state) => state.employed.empleados);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [empleado, setEmpleado] = useState(null);
  const [edicion, setEdicion] = useState(false);
  useEffect(empleadoSearch, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card my-3">
            <div className="card-body">
              {!empleado?.employee_id && (
                <>
                  <ErrorMessage
                    tittle={"Empleado no encontrado"}
                    message={"Ingrese un empleado valido"}
                  />
                  <Link to={`/`} type="button" className="btn btn-info">
                    volver
                  </Link>
                </>
              )}
              {(empleado?.employee_id && !edicion) &&(
                <>
                <EmployedCard employee={empleado}/>
                <Link to={`/`} type="button" className="btn btn-info">
                    Volver
                  </Link>
                  <button
                    type="button"
                    onClick={() => setEdicion(true)}
                    className="btn btn-success mx-3"
                  >
                    Editar
                  </button>
                </>
              )}
              {(empleado?.employee_id && edicion) &&(
                <>
                <InputForm employee={empleado} handleChange={handleChange}/>
                <div className="my-3">
                    <button
                      type="button"
                      onClick={handleCancelEdition}
                      className="btn btn-danger"
                    >
                      Cancelar
                    </button>
                    <button
                      type="button"
                      onClick={handleConfirmEdition}
                      className="btn btn-success mx-3"
                    >
                      Editar
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployedDetail;
