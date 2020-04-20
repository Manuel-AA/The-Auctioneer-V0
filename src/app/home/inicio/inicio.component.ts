import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  imagen = "https://images-na.ssl-images-amazon.com/images/I/315anlWUkgL._AC_UL160_SR160,160_.jpg";

  constructor() { }

  ngOnInit() {
  }

}
