import React from "react";

function EmployedCard({ employee }) {
  const cambiarFormatoFecha = (fecha) => {
    return fecha.split('-').reverse().join('/');
  }
  return (
    <>
      <h1 className="card-title">{`${employee.first_name} ${employee.last_name}`}</h1>
      <h5>Email: {employee.email}</h5>
      <h5>Numero de telefono: {employee.phone_number}</h5>
      <h5>Fecha de ingreso: {cambiarFormatoFecha(employee.hire_date)}</h5>
      <h5>salario: ${employee.salary}</h5>
      <h5>Comision: ${employee.comission_pct}</h5>
    </>
  );
}

export default EmployedCard;
