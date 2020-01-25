import { Component, OnInit, Input } from '@angular/core';
import { MesasServiceService } from 'src/app/servicios/firebase/mesas-service.service';
import { Mesa } from 'src/app/clases/mesa';
import { MiservicioPrincipalService } from 'src/app/servicios/miservicio-principal.service';
import { Pedido } from 'src/app/clases/pedido';
import { Producto } from 'src/app/clases/producto';

@Component({
  selector: 'app-detalle-cuenta',
  templateUrl: './detalle-cuenta.component.html',
  styleUrls: ['./detalle-cuenta.component.scss']
})

export class DetalleCuentaComponent implements OnInit {

  mesa: Mesa;
  total = 0;
  todosPedidos: Array<Producto>
  constructor(private servicioGeneral: MiservicioPrincipalService) {
    this.todosPedidos = new Array();
  }

  ngOnInit() {
    this.mesa= this.servicioGeneral.mesas().mesaActual;
    this.calcularCuenta();
  }

  enviarPago()
  {
    this.servicioGeneral.mesas().actualizarMesaMozo(this.mesa, 'pagoEnviado');      
  }


  calcularCuenta() {
    this.mesa.pedidos.forEach((pedido) => {

      this.servicioGeneral.pedido().traerUnPedido(pedido).subscribe((pedidoDb: Pedido) => {
        console.log("pedidodb", pedidoDb);
        
        if (pedidoDb.estado == 'terminado') {
          pedidoDb.productos.forEach((e: Producto) => {
            this.todosPedidos.push(e);
            this.total += e.stock;
          })

        }
      });


    })
  }
}



