import React from "react";

function InputForm({ employee, handleChange }) {
  //Desestructuramos el employee
  const {
    first_name,
    last_name,
    email,
    phone_number,
    hire_date,
    salary,
    comission_pct
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
      <label className="my-3">Correo</label>
      <input
        onChange={handleChange}
        name="email"
        type="email"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="ejemplo@ejemplo.com"
        value={email}
        required
        minLength = {4}
        maxLength={15}
      />
      <label className="my-3">Numero de telefono</label>
      <input
        onChange={handleChange}
        name="phone_number"
        type="text"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="Sin 0 y 15"
        value={phone_number}
        required
        maxLength={10}
      />
      <label className="my-3">Fecha de ingreso</label>
      <input
        onChange={handleChange}
        name="hire_date"
        type="date"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="Nombre"
        value={hire_date}
        required
      />
      <label className="my-3">Salario</label>
      <input
        onChange={handleChange}
        name="salary"
        type="number"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="$"
        value={salary}
        required
      />
      <label className="my-3">Comision</label>
      <input
        onChange={handleChange}
        name="comission_pct"
        type="number"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="$"
        value={comission_pct}
        required
      />
    </>
  );
}

export default InputForm;
