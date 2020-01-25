import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estadosMesaCliente'
})
export class EstadosMesaClientePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    switch (value) {
      case 'solicitada':
        return 'Su Solicitud ha sido enviada';
      case 'cerrada':
        return 'Gracias por Su visita, su Solicitud ha sido Cancelada o su mesa ya ha ya ha sido cerrada';
      case 'reservada':
        return 'Su Reserva ya esta en Curso';
      case 'inicioServicio':
        return 'Bienvenido a su Mesa';
      case 'cuentaPedida':
        return 'Cerrando';
      case 'pagando':
        return 'Su factura ya ha sido emitida';

    }
  }

}
