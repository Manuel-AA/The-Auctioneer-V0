import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  logotipo = "/assets/img/logotipo.png"

  redirigirPerfil(){
    this.router.navigate(["/perfil/", firebase.auth().currentUser.uid])
  }

  redirigirMisPujas(){
    this.router.navigate(["/mispujas/", firebase.auth().currentUser.uid])
  }
}
