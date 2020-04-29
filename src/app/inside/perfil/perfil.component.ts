import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  productos:any;

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
    console.log(this.firestoreService.getCurrentUser())
  }

  AgregarProductoModificado(){
    this.firestoreService.editProducto(this.modificarProducto)
  }

}
