import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
import * as firebase from 'firebase';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  productos:any;
  arrayProductos:any[] = []
  email:any;
  name:any;
  id:any;

  modificarProducto: any = {
    nombre: "",
    precioSalida: "",
    pujaActual: "",
    precioCompraYa: ""
  }

  constructor(private firestoreService:FirestoreService, private ruta:ActivatedRoute,) {
    this.ruta.params.subscribe(params=>{
      this.id = params['id'];
    })

    this.firestoreService.listaProducto().subscribe(producto=>{
      for (let p of producto){
        console.log(p)
        if (firebase.auth().currentUser.email == p.emailSubastador){
          this.arrayProductos.push(p)
        }
      }
    })
    this.productos = this.arrayProductos;
   }

  ngOnInit() {
   
  }

  EliminarProducto(producto){
    this.firestoreService.removeProducto(producto);
  }

  ModificarProducto(producto) {
    this.modificarProducto = producto;
  }

  AgregarProductoModificado(){
    this.firestoreService.editProducto(this.modificarProducto)
  }

}
