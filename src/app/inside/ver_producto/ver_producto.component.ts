import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-ver_producto',
  templateUrl: './ver_producto.component.html',
  styleUrls: ['./ver_producto.component.scss']
})
export class VerProductoComponent implements OnInit {

  productos:any;
  id:any;
  productoPagina:any[] = []

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
    
    
   }

  ngOnInit() {
  }

}
