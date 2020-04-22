import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conocer',
  templateUrl: './conocer.component.html',
  styleUrls: ['./conocer.component.scss']
})
export class ConocerComponent implements OnInit {


  imagen1 = "/assets/img/subasta.jpeg"
  imagen2 = "/assets/img/seguridad.jpeg"
  imagenFlechaDer = "/assets/img/flecha_derecha.png"
  imagenActual = 1;
  constructor() { }

  ngOnInit() {
  }


  cambiarImagenDer(){
    this.imagenActual = this.imagenActual + 1;
  }
}
