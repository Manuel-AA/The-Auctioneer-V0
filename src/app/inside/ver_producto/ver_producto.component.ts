import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver_producto',
  templateUrl: './ver_producto.component.html',
  styleUrls: ['./ver_producto.component.scss']
})
export class VerProductoComponent implements OnInit {

  imagen = "https://images-na.ssl-images-amazon.com/images/I/315anlWUkgL._AC_UL160_SR160,160_.jpg";

  constructor() { }

  ngOnInit() {
  }

}
