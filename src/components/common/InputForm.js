import React from "react";

function InputForm({ employee, handleChange }) {
  //Desestructuramos el employee
  const {
    first_name,
    last_name,
    cuit,
    team_id,
    join_date,
    rol
  } = employee
  return (
    <>
      <label className="my-3">Nombre</label>
      <input
        onChange={handleChange}
        name="first_name"
        type="text"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="nombre"
        value={first_name}
        required
        minLength = {4}
        maxLength={15}
      />
      <label className="my-3">Apellido</label>
      <input
        onChange={handleChange}
        name="last_name"
        type="text"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="apellido"
        value={last_name}
        required
        minLength = {4}
        maxLength={15}
      />
      <label className="my-3">CUIT</label>
      <input
        onChange={handleChange}
        name="cuit"
        type="text"
        className="form-control"
        id="exampleFormControlInput1"
        value={cuit}
        required
        minLength = {4}
        maxLength={15}
      />
      <label className="my-3">ID de equipo</label>
      <input
        onChange={handleChange}
        name="team_id"
        type="text"
        className="form-control"
        id="exampleFormControlInput1"
        value={team_id}
        required
        maxLength={10}
      />
      <label className="my-3">Fecha de ingreso</label>
      <input
        onChange={handleChange}
        name="join_date"
        type="date"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="Nombre"
        value={join_date}
        required
      />
      <label className="my-3">Rol</label>
      <input
        onChange={handleChange}
        name="rol"
        type="text"
        className="form-control"
        id="exampleFormControlInput1"
        value={rol}
        required
      />
    </>
  );
}

export default InputForm;
