import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Swal, { SweetAlertResult } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  swalTziteButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
  constructor(
    private dialog: MatDialog
  ) {
    
  }

  /**
   * Método que genera una alerta de confirmación
   * @param title Titulo de la alerta
   * @param text Descripción de la alerta
   * @returns Devuelve una promesa del estado del botón oprimido en la alerta
   */
  confirmacion(title: string = '¿Seguro que deseas salir?', text: string = "¡Se perderán todos los datos ingresados!"): Promise<SweetAlertResult<any>> {
    return this.swalTziteButtons.fire({
      title: title,
      text: text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar'
    })
  }

  /**
   * Método que genera una alerta de exito
   * @param confirm Agrega o anula la existencia de un botón booleano
   * @param title Titulo de la alerta
   * @param timer Tiempo en milisegundos de cierre automático de la alerta
   * @returns Devuelve una promesa del estado del botón oprimido en la alerta (en caso de tenerlo)
   */
  mensajeExitoso(confirm: boolean = false, title: string = '¡Hecho!', timer: number = 1500) {
    if (timer === 0) {
      return this.swalTziteButtons.fire({
        position: 'center',
        icon: 'success',
        title: title,
        showConfirmButton: confirm,
      })
    }else{
    return this.swalTziteButtons.fire({
      position: 'center',
      icon: 'success',
      title: title,
      showConfirmButton: confirm,
      timer: timer
    })}
  };

  cargando(title: string ='Cargando ', text: string = 'Su archivo se esta cargando') {
  return this.swalTziteButtons.fire({
    icon: 'warning',
    title: title,
    text: text,
    showConfirmButton: false,
  })
}
  /**
   * Método que genera una alerta de error
   * @param title Titulo de la alerta
   * @param text Descripción de la alerta
   * @returns Devuelve una promesa del estado del botón oprimido en la alerta
   */
  error(title: string = 'Error', text: string = '¡Contraseña incorrecta!') {
    return this.swalTziteButtons.fire({
      icon: 'error',
      title: title,
      text: text,
    })
  };

  

}


