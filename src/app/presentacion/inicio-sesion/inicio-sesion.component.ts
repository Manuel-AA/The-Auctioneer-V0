import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';

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

  constructor(private registroServicio: FirestoreService) {
    this.registroServicio.listaUsuario().subscribe(usuario=>{
      this.usuarios = usuario;
    })
  }

  ngOnInit() {
  }

  iniciarSesion(){
    console.log("Patata")
    for(let usuario of this.usuarios){
      if (usuario.email == this.usuario.email){
        if (usuario.password == this.usuario.password){
          return
        }
        else{
          alert("La contraseña es incorrecta");
          return
        }
      }
    }
    alert("No hay ningún usuario con ese email");
  }

}
