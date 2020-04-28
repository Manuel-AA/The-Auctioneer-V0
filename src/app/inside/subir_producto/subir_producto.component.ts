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
    pujaActual: "",
    precioCompraYa: ""
  }

  constructor( private servicio: FirestoreService) { }

  ngOnInit() {
  }

  AgregarProducto() {
    this.producto.pujaActual = this.producto.precioSalida;
    this.servicio.addProducto(this.producto);
    this.producto.nombre = "";
    this.producto.precioSalida = "";
    this.producto.pujaActual = "";
    this.producto.precioCompraYa = "";
  }

}
