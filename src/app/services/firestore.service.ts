import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

export interface Producto { nombre: string; precio: number}
export interface Usuario { nombreUsuario: string; email: string; password: string}

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private productosCollection: AngularFirestoreCollection<Producto>;
  productos: Observable<Producto[]>;

  private usuariosCollection: AngularFirestoreCollection<Usuario>;
  usuarios: Observable<Usuario[]>;

  constructor(private afs: AngularFirestore) {
    this.productosCollection = afs.collection<Producto>('productos');
    this.productos = this.productosCollection.valueChanges();
    this.usuariosCollection = afs.collection<Usuario>('usuarios');
    this.usuarios = this.usuariosCollection.valueChanges();
   }

   listaProducto(){
     return this.productos;
   }

   listaUsuario(){
    return this.usuarios;
  }

  addUsuario(usuario: Usuario){
    this.usuariosCollection.add(usuario);
  }

  addProducto(producto: Producto){
    this.productosCollection.add(producto);
  }
}
