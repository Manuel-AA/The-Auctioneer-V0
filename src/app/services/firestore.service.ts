import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
/*import { Observable } from 'rxjs/Observable';*/
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';

export interface Producto { nombre: string; precioSalida: number; pujaActual: number; precioCompraYa: number; subastador: string; emailSubastador: string}
export interface Usuario { nombreUsuario: string; email: string; password: string;}

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private productosCollection: AngularFirestoreCollection<Producto>;
  productos: Observable<Producto[]>;
  private productoDoc: AngularFirestoreDocument<Producto>;

  private usuariosCollection: AngularFirestoreCollection<Usuario>;
  usuarios: Observable<Usuario[]>;

  constructor(private afs: AngularFirestore) {
    this.productosCollection = afs.collection<Producto>('productos');
    // this.productos = this.productosCollection.valueChanges();
    this.productos = this.productosCollection.snapshotChanges().pipe(
      map(actions => actions.map (a => {
        const data = a.payload.doc.data() as Producto;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
    
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

  removeProducto(producto) {
    this.productoDoc = this.afs.doc<Producto>(`productos/${producto.id}`);
    this.productoDoc.delete();
  }

  editProducto(producto) {
    this.productoDoc = this.afs.doc<Producto>(`productos/${producto.id}`);
    this.productoDoc.update(producto);
  }

  doRegister(email, password){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(res => {
        resolve(res);
      }, err => reject(err))
    })
  }

  doLogin(email, password){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(res => {
        resolve(res);
      }, err => reject(err))
    })
  }

  getCurrentUser(){
    return new Promise<any>((resolve, reject) => {
      var user = firebase.auth().onAuthStateChanged(function(user){
        if (user){
          resolve(user);
        } else {
          reject("No user logged in");
        }
      })
    })
  }
}
