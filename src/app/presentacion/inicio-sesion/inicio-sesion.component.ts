import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent implements OnInit {

  usuario:any = {
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


  iniciarSesion(){
    
    for(let usuario of this.usuarios){
      if (usuario.email == this.usuario.email){
        if (usuario.password == this.usuario.password){
          this.router.navigateByUrl('/home');
          return;
        }
        else{
          alert("La contraseña es incorrecta");
          return;
        }
      }
    }
    alert("No hay ningún usuario con ese email");
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
