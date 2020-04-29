import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  productos:any;
  email:any;
  name:any;

  modificarProducto: any = {
    nombre: "",
    precioSalida: "",
    pujaActual: "",
    precioCompraYa: ""
  }

  constructor(private firestoreService:FirestoreService) {
    this.firestoreService.listaProducto().subscribe(producto=>{
      this.productos = producto;
    })
   }

  ngOnInit() {
   
  }

  EliminarProducto(producto){
    this.firestoreService.removeProducto(producto);
  }

  ModificarProducto(producto) {
    this.modificarProducto = producto;
    var user = firebase.auth().currentUser;
    if (user) {
      this.email = firebase.auth().currentUser.email;
      this.name = firebase.auth().currentUser.displayName;
    } else {
      // No user is signed in.
    }
    if (user) {
      firebase.auth().currentUser.updateProfile({
        displayName: "pepe"
      });
      console.log(firebase.auth().currentUser);
      // User is signed in.
    } else {
      // No user is signed in.
    }

    
    console.log(this.name);
    console.log(this.email);
  }

  AgregarProductoModificado(){
    this.firestoreService.editProducto(this.modificarProducto)
  }

}
