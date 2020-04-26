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
  constructor(private registroServicio: FirestoreService) {

   }

  ngOnInit() {
  }

  agregarUsuario(){
    this.registroServicio.addUsuario(this.usuario);
    this.usuario.nombreUsuario = '';
    this.usuario.email = '';
    this.usuario.password = '';
  }

}
