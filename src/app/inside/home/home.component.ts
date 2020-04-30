import { Component, OnInit } from '@angular/core';
//import { FirestoreService } from 'src/app/services/firestore.service';
import { FirestoreService } from '../../services/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  productos:any;

  constructor(private firestoreService:FirestoreService, private router:Router) {
    this.firestoreService.listaProducto().subscribe(producto=>{
      this.productos = producto;
    })
   }

  ngOnInit() {
  }

  filtroHome = "";

  redirigirProducto(producto:any){
    this.router.navigate(["/ver/", producto.id])
  }

}
