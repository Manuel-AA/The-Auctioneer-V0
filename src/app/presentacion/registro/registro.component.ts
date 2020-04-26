import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  usuario:any = {
    nombreUsuario: '',
    email: '',
    password: ''
  }

  usuarios:any;

  constructor(private registroServicio: FirestoreService) {
    this.registroServicio.listaUsuario().subscribe(usuario=>{
      this.usuarios = usuario;
    })
  }

  ngOnInit() {
  }

  agregarUsuario(){
    console.log(this.registroServicio.listaUsuario())
    for(let usuario of this.usuarios){
      if (usuario.nombreUsuario == this.usuario.nombreUsuario){
        alert("Ya exite un usuario con ese nombre")
        return
      }
      if (usuario.email == this.usuario.email){
        alert("Ya exite un usuario con ese email")
        return
      }
    }
    this.registroServicio.addUsuario(this.usuario);
    this.usuario.nombreUsuario = '';
    this.usuario.email = '';
    this.usuario.password = '';
  }

}
