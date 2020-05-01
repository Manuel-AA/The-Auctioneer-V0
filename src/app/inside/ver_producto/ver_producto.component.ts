import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirestoreService } from '../../services/firestore.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-ver_producto',
  templateUrl: './ver_producto.component.html',
  styleUrls: ['./ver_producto.component.scss']
})
export class VerProductoComponent implements OnInit {
  productos:any;
  id:any;
  productoPagina:any = "";
  nuevaPuja:any;

  usuarioNuevo:any = {
    email: '',
    pujas: []
  }
  usuarios:any;
  aux:any[];
  constructor(private ruta:ActivatedRoute, private servicio:FirestoreService) {
    this.ruta.params.subscribe(params=>{
      this.id = params['id'];
    })
    this.servicio.listaProducto().subscribe(producto=>{
      this.productos = producto;
      for (let p of this.productos){
        if (p.id == this.id){
          this.productoPagina = p;
        }
      }
    })
    this.servicio.listaUsuario().subscribe(usuario=>{
      this.usuarios = usuario;
    })
   }

  ngOnInit() {
  }

  cambiarPuja(puja){
    let usuarioActivo = firebase.auth().currentUser
    if (usuarioActivo){
      if (puja>this.productoPagina.pujaActual){
        this.productoPagina.pujaActual = puja;
        this.servicio.editProducto(this.productoPagina)
        for (let p of this.usuarios){
          if(p.email == usuarioActivo.email){
            console.log(p.pujas)
            if(!p.pujas.includes(this.id)){
              p.pujas.push(this.id)
              this.servicio.editUsuario(p)
            }
            this.productoPagina.ultimoPujador = usuarioActivo.displayName
            return
          }
        }
        this.usuarioNuevo.email = usuarioActivo.email
        this.usuarioNuevo.pujas.push(this.id)
        this.servicio.addUsuario(this.usuarioNuevo)
        console.log(firebase.auth().currentUser.email)
        this.productoPagina.ultimoPujador = usuarioActivo.displayName
      }
      else {
        alert("La puja debe ser superior")
      }
    }
    else{
      console.log("Shit")
    }
  }
}
