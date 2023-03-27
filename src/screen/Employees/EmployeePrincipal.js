import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getEmployees, deleteEmployee } from "../../api/apiEmployee";
import { setPageAction } from "../../features/empleados/empleadosSlice";
import { Employees } from "./EmployedList";
import { Loading } from "../../components/common/Loading";
import { advertencia } from "../../utils/alertas";
function EmployeePrincipal() {
  const dispatch = useDispatch();
  const empleados = useSelector((state) => state.employed.employees);
  const currentPage = useSelector((state) => state.employed.currentPage);
  const loading = useSelector((state) => state.employed.loading);
  const handleDelete = (id) => {
    advertencia(() => dispatch(deleteEmployee(id)));
  };
  const handleGetForPage = (e, page) => {
    e.preventDefault();
    dispatch(setPageAction(page));
  };

  useEffect(() => {
    dispatch(getEmployees(currentPage));
  }, [dispatch, currentPage]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 col-md-4 mt-3">
          <Link
            to="create_employed"
            type="button"
            className={`btn btn-success fw-bold mx-2 ${
              loading ? "disabled" : ""
            }`}
          >
            Crear nuevo empleado
          </Link>
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        {loading ? (
          <Loading />
        ) : (
          <Employees
            employees={empleados}
            onDelete={handleDelete}
            onGetPage={handleGetForPage}
            currentPage={currentPage}
          />
        )}
      </div>
    </div>
  );
}

export default EmployeePrincipal;
