import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MiservicioPrincipalService } from 'src/app/servicios/miservicio-principal.service';
import { Producto } from 'src/app/clases/producto';
import { MatTableDataSource } from '@angular/material/table';
import { Pedido } from 'src/app/clases/pedido';
import { Mesa } from 'src/app/clases/mesa';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-pedidos',
  templateUrl: './listado-pedidos.component.html',
  styleUrls: ['./listado-pedidos.component.scss']
})
export class ListadoPedidosComponent implements OnInit {

  pedidos: Array<Pedido> = Array<any>();
  productoElegido;
  @Output() pedidoEmit: EventEmitter<any>;

  detalleMesa = false;

  tipoOrden = "tipo";
  orden = "asc";

  ////modal
  modificar;
  tiempo;
  modal;
  pedidoActual;
  perfil;


  sucripcion;
  noHayPedido;

  constructor(private servicioGeneral: MiservicioPrincipalService,
    private _router: Router) {
    this.pedidoEmit = new EventEmitter();
    this.modal = false;
    this.perfil = localStorage.getItem('perfil');
    this.noHayPedido = false;
  }


  ngOnInit() {
    this.servicioGeneral.pedido().traerTodosPedidos().subscribe((actions => {
      this.pedidos = new Array();
      actions.forEach((e) => {
        let data = e.payload.doc.data() as Pedido; 
        if (data.area == this.perfil || this.perfil == "admin") {
          if (data.estado != "terminado") {
            this.pedidos.push(data);
          }
        }

      });
      this.detalleMesa = true;

      if (this.pedidos.length == 0) {
        this.noHayPedido = true;
      }

    }));



  }

  detalle(nombre) {
    this.productoElegido = nombre;
  }
  destruir() {
    this.modal = false;
  }


  eliminarPedido(pedido) {
    this.servicioGeneral.pedido().eliminarPedido(pedido.uid);

  }


  tomarPedido(pedido, tiempo) {     
    console.log("pedido", pedido);    
    this.pedidoActual = pedido;
    this.tiempo= tiempo;
    this.prepararPedido('enPreparacion');
  }



  prepararPedido(estado) {
    this.modal = false;
    console.log("tiempo", this.tiempo);
    this.pedidoActual.estado = estado;
    this.pedidoActual.tiempo_espera = this.tiempo;
    this.servicioGeneral.pedido().actualizarUnPedido(this.pedidoActual, estado);
  }

  terminarPedido(estado, pedido:Pedido) {

    pedido.estado = estado;
    pedido.tiempo_espera = -1;
    this.servicioGeneral.pedido().actualizarUnPedido(pedido, estado).then(()=>
    {  
      let mesa;
      let uno = false;
      let suscribe =  this.servicioGeneral.mesas()
      .traerUnaMesaUID(pedido.mesa)
      .subscribe((e) => {
        mesa = e.payload.data () as Mesa;    
        if (estado == "terminado"  && !uno) {
          console.log("estado", estado);
          console.log("pedido", pedido);               
          this.servicioGeneral.mesas().actualizarMesaEmpleado(mesa, "pedidoListo").then(()=>
          {
            uno = true;
          });
        }
      }).closed ;
    }); //then
    

  }



}



