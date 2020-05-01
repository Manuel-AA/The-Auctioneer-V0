import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import {Router} from '@angular/router';
import * as firebase from 'firebase';

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
  
  constructor(private registroServicio: FirestoreService, private router: Router) {
    this.registroServicio.listaUsuario().subscribe(usuario=>{
      this.usuarios = usuario;
    })
  }

  ngOnInit() {
  }

  agregarUsuario(){
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
    this.router.navigateByUrl('inicio-sesion');
  }

  tryRegister(email, password, nombreusuario){
    this.registroServicio.doRegister(email, password)
    .then(res =>{
      console.log(res);
      alert("Tu cuenta ha sido creada correctamente")
      this.tryLogin(email, password)
      firebase.auth().currentUser.updateProfile({displayName: nombreusuario});
      this.router.navigateByUrl("/home")
    }, err => {
      console.log(err);
      alert("Ya existe un usuario con ese email")
    })
  }

  tryLogin(email, password){
    this.registroServicio.doLogin(email, password)
    .then(res => {
      this.router.navigate(["/home"]);
    }, err => {
      alert("Los datos introducidos no son correctos")
    })
  }
  

}
