import React from "react";

const FilterAssets= () => {
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
        <div className="col-4">
          <label className="my-2">Nombre</label>
          <input
            // onChange={handleChange}
            name="nombre"
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            // value={empleados.first_name}
          />
        </div>
        <div className="col-4">
          <label className="my-2">Id de empleado</label>
          <input
            // onChange={handleChange}
            name="marca"
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            // value={empleados.last_name}
          />
        </div>
        <div className="col-4 d-flex align-items-center">
          <button type="submit" className="btn btn-success my-3 mx-3">
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterAssets;
