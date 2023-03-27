export function formatoFecha(fechaHoraOriginal) {
  // Crear un objeto Date
  const fechaHora = new Date(fechaHoraOriginal);

  // Formatear la fecha en una cadena de texto ISO8601 y eliminar la información adicional
  const fechaFormateada = fechaHora.toISOString().substring(0, 10);
  return fechaFormateada;
}
