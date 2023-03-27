import React from "react";
import { getEmployees } from "../../api/apiEmployee";

const FilterEmployee = () => {
  // const handleChange = (e) => {
  //   setEmpleado({ ...empleados, [e.target.name]: e.target.value });
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(empleados)
  //   // dispatch(getEmployees({ ...empleados}));
  // };

  // //Hooks
  // const dispatch = useDispatch();
  return (
    <div className="col-md-6 mb-3">
      <form className="form row" /*onSubmit={handleSubmit}*/>
        <div className="col-3">
          <label className="my-2">Nombre</label>
          <input
            // onChange={handleChange}
            name="first_name"
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="nombre"
            // value={empleados.first_name}
            disabled
          />
        </div>
        <div className="col-3">
          <label className="my-2">Apellido</label>
          <input
            // onChange={handleChange}
            name="last_name"
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="apellido"
            // value={empleados.last_name}
            disabled
          />
        </div>
        <div className="col-3">
          <label className="my-2">Id del equipo</label>
          <input
            // onChange={handleChange}
            name="cuit"
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            // value={empleados.team_id}
            disabled
          />
        </div>
        <div className="col-3 d-flex align-items-center">
          <button type="submit" className="btn btn-success my-3 mx-3" disabled>
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterEmployee;
