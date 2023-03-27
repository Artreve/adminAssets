import React from "react";
import { formatoFecha } from "../../utils/dateFormate";

function InputForm({ asset, handleChange }) {
  //Desestructuramos el employee
  const { 
    name, 
    type, 
    code, 
    marca, 
    description, 
    purchase_date, 
    employeeid } =
    asset;
  return (
    <>
      <label className="my-3">Nombre</label>
      <input
        onChange={handleChange}
        name="name"
        type="text"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="nombre"
        value={name}
        required
        minLength={4}
        maxLength={15}
      />
      <label className="my-3">Tipo</label>
      <input
        onChange={handleChange}
        name="type"
        type="text"
        className="form-control"
        id="exampleFormControlInput1"
        value={type}
        required
        minLength={4}
        maxLength={15}
      />
      <label className="my-3">Codigo</label>
      <input
        onChange={handleChange}
        name="code"
        type="text"
        className="form-control"
        id="exampleFormControlInput1"
        value={code}
        minLength={11}
        maxLength={11}
      />
      <label className="my-3">Marca</label>
      <input
        onChange={handleChange}
        name="marca"
        type="text"
        className="form-control"
        id="exampleFormControlInput1"
        value={marca}
        maxLength={10}
      />
      <label className="my-3">Fecha de compra</label>
      <input
        onChange={handleChange}
        name="purchase_date"
        type="date"
        className="form-control"
        id="exampleFormControlInput1"
        value={purchase_date?formatoFecha(purchase_date):""}
        required
      />
      <label className="my-3">Descripcion</label>
      <input
        onChange={handleChange}
        name="description"
        type="text"
        className="form-control"
        id="exampleFormControlInput1"
        value={description}
      />
      <label className="my-3">Empleado asignado</label>
      <input
        onChange={handleChange}
        name="id de empleado"
        type="text"
        className="form-control"
        id="exampleFormControlInput1"
        value={employeeid}
      />
    </>
  );
}

export default InputForm;
