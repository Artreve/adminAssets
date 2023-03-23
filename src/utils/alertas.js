import Swal from "sweetalert2";

export const advertencia = ( hook = null) =>{
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
          if (hook) hook()
        }
      })
}

export const successAlert = (hook = null) => {
    Swal.fire({
      icon: 'success',
      title: "La acción fue exitosa!",
      showConfirmButton: false,
      timer: 1500
    }).finally(() => {
      if (hook) hook()
    })
  }