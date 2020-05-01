import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-mispujas',
  templateUrl: './mispujas.component.html',
  styleUrls: ['./mispujas.component.scss']
})
export class MispujasComponent implements OnInit {

  id:any;
  productos:any[] = [];
  productosPujados:any;
  usuarioActivoPujas:any[] = [];
  
  constructor(private firestoreService:FirestoreService, private ruta:ActivatedRoute) {
    this.ruta.params.subscribe(params=>{
      this.id = params['id'];
    })
    this.firestoreService.listaUsuario().subscribe(usuario=>{
      for (let u of usuario){
        if (u.email == firebase.auth().currentUser.email){
          this.usuarioActivoPujas = u.pujas;
        }
      }
    })
    this.firestoreService.listaProducto().subscribe(producto=>{
      this.productosPujados = [];
      this.productos = producto
      for (let p of this.productos){
        for (let p2 of this.usuarioActivoPujas){
          if (p.id == p2){
            this.productosPujados.push(p)
          }
        }
      }
    })
    
   }

  ngOnInit() {
  }

}
