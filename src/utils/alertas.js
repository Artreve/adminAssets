import Swal from "sweetalert2";

export const advertencia = ( cb = null) =>{
    Swal.fire({
        title: '¿Seguro que deseas realizar la accion?',
        text: "Estos cambios no podran ser revertidos",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar'
      }).then((result) => {
        if (result.isConfirmed) {
          successAlert()
          if (cb) cb()
        }
      })
}

export const successAlert = (cb = null) => {
    Swal.fire({
      icon: 'success',
      title: "La acción fue exitosa!",
      showConfirmButton: false,
      timer: 1500
    }).finally(() => {
      if (cb) cb()
    })
  }