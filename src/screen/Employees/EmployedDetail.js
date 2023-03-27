import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch} from "react-redux";
import ErrorMessage from "../../components/common/ErrorMenssage";
import InputForm from "../../components/employee/InputForm";
import { Link } from "react-router-dom";
import { advertencia } from "../../utils/alertas";
import { getEmployeeById, updateEmployed } from "../../api/apiEmployee";
function EmployedDetail() {
  //Funciones
  const empleadoSearch = () => {
     async function getData (){
      const empleado = await getEmployeeById(id)
      setEmpleado(empleado)
    }
    getData()
  };
  const handleChange = (e) => {
    setEmpleado({ ...empleado, [e.target.name]: e.target.value });
  };
  const handleConfirmEdition = () => {
    advertencia(()=>{
      dispatch(updateEmployed(empleado))
      navigate("/")
    })
  };

  //Hooks
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [empleado, setEmpleado] = useState(null);
  useEffect(empleadoSearch, [id]);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card my-3">
            <div className="card-body">
              {!empleado?.idemployee && (
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
              {(empleado?.idemployee) &&(
                <>
                <InputForm employee={empleado} handleChange={handleChange}/>
                <div className="my-3">
                    <Link
                      to="/"
                      className="btn btn-secondary"
                    >
                      Cancelar
                    </Link>
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
