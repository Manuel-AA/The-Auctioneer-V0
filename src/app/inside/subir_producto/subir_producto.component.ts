import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
import * as firebase from 'firebase';

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
    precioCompraYa: "",
    subastador: "",
    emailSubastador: "",
    tiempoInicio: ""
  }

  constructor( private servicio: FirestoreService) { }

  ngOnInit() {
  }

  AgregarProducto() {
    this.producto.pujaActual = this.producto.precioSalida;
    var user = firebase.auth().currentUser;
    if (user){
      this.producto.subastador = firebase.auth().currentUser.displayName;
      this.producto.emailSubastador = firebase.auth().currentUser.email;
    } else {
      // No user is signed in
    }
    this.producto.tiempoInicio = new Date().getTime();
    this.producto.tiempoFin = 0;
    this.servicio.addProducto(this.producto);
    this.producto.nombre = "";
    this.producto.precioSalida = "";
    this.producto.pujaActual = "";
    this.producto.precioCompraYa = "";
  }

}
