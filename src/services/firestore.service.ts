import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
/*import { Observable } from 'rxjs/Observable';*/
import { map } from 'rxjs/operators';

export interface Producto { nombre: string; precioSalida: number; pujaActual: number; precioCompraYa: number;}
export interface Usuario { nombreUsuario: string; email: string; password: string;}

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
    //this.productos = this.productosCollection.valueChanges();
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

  addProducto(producto: Producto){
    this.productosCollection.add(producto);
  }

  addUsuario(usuario: Usuario){
    this.usuariosCollection.add(usuario);
  }
}
