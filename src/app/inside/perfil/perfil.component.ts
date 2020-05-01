import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
import * as firebase from 'firebase';
import { ActivatedRoute, Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  productos:any[] = [];
  email:any;
  name:any;
  id:any;
  hora:any = 0;

  modificarProducto: any = {
    id: "",
    nombre: "",
    precioSalida: "",
    pujaActual: "",
    precioCompraYa: ""
  }
  subscribeTimer: number;

  constructor(private firestoreService:FirestoreService, private ruta:ActivatedRoute, private router:Router) {
    this.ruta.params.subscribe(params=>{
      this.id = params['id'];
    })
    this.firestoreService.listaProducto().subscribe(producto=>{
      this.productos = []
      for (let p of producto){
        if (firebase.auth().currentUser.email == p.emailSubastador ){
          this.productos.push(p);
        }
      }
    })
   }

  ngOnInit() {
    
  }



  myTimer(producto) {
    this.hora = new Date().getTime();
    producto.tiempoFin = this.hora - producto.tiempoInicio;
    var segundos = 0;
    var minutos = 0;
    var horas = 0;
    if(producto.tiempoFin > 1000){
        segundos = Math.floor(producto.tiempoFin/1000)
        producto.tiempoFin = producto.tiempoFin % 1000
      if(segundos >= 60){
        console.log(segundos)
        minutos = Math.floor(segundos/60)
        console.log(minutos)
        segundos = segundos % 60
        if(minutos >= 60){
          horas = Math.floor(minutos/60)
          minutos = minutos % 60
        } 
      }
    }
    producto.tiempoFin = (23 - horas) + ':' + (59 - minutos) + ':' + (59 -segundos)
    console.log( producto.tiempoFin)
    console.log(segundos)
    console.log(minutos)
    console.log(producto.tiempoFin)
  }


  EliminarProducto(producto){
    this.firestoreService.removeProducto(producto);
    var i = this.productos.indexOf(producto)
    this.productos.splice(i, 1)
  }

  ModificarProducto(producto) {
    this.modificarProducto.id = producto.id;
    this.modificarProducto.nombre = producto.nombre;
    this.modificarProducto.precioSalida = producto.precioSalida;
    this.modificarProducto.pujaActual = producto.pujaActual;
    this.modificarProducto.precioCompraYa = producto.precioCompraYa;
  }

  AgregarProductoModificado(){
    this.firestoreService.editProducto(this.modificarProducto)
  }

  redirigirProducto(producto:any){
    this.router.navigate(["/ver/", producto.id])
  }

}
