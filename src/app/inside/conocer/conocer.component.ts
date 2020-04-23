import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conocer',
  templateUrl: './conocer.component.html',
  styleUrls: ['./conocer.component.scss']
})
export class ConocerComponent implements OnInit {


  imagen1 = "/assets/img/subasta.jpeg"
  imagen2 = "/assets/img/seguridad.jpeg"
  imagen3 = "/assets/img/pilares.PNG"
  imagenFlechaDer = "/assets/img/flecha_derecha.png"
  imagenActual = 1;
  constructor() { }

  ngOnInit() {
  }


  cambiarImagenDer(){
    if(this.imagenActual != 3){
      this.imagenActual = this.imagenActual + 1;
    }
    else{
      this.imagenActual = 1;
    }
  }

  cambiarImagenIzq(){
    if(this.imagenActual != 1){
      this.imagenActual = this.imagenActual - 1;
    }
    else{
      this.imagenActual = 3;
    }
  }
}
