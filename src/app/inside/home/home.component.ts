import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  productos:any;

  constructor(private firestoreService:FirestoreService) {
    this.firestoreService.listaProducto().subscribe(producto=>{
      this.productos = producto;
    })
   }

  ngOnInit() {
  }

}
