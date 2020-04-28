import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-subir_producto',
  templateUrl: './subir_producto.component.html',
  styleUrls: ['./subir_producto.component.scss']
})
export class SubirProductoComponent implements OnInit {

  producto: any = {
    nombre: "",
    precioSalida: "",
    pujaActual: 0,
    precioCompraYa: ""
  }

  constructor( private servicio: FirestoreService) { }

  ngOnInit() {
  }

  AgregarProducto() {
    this.producto.precioCompraYa = this.producto.precioSalida * 1.5;
    this.servicio.addProducto(this.producto);
    this.producto.nombre = "";
    this.producto.precioSalida = "";
    this.producto.pujaActual = 0;
    this.producto.precioCompraYa = "";
  }

}
