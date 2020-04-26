import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

export interface Producto { nombre: string; precio: number}

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private productosCollection: AngularFirestoreCollection<Producto>;
  productos: Observable<Producto[]>;

  constructor(private afs: AngularFirestore) {
    this.productosCollection = afs.collection<Producto>('productos');
    this.productos = this.productosCollection.valueChanges();
   }

   listaProducto(){
     return this.productos;
   }
}
