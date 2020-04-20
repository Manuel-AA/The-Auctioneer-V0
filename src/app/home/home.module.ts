import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { FooterComponent } from './footer/footer.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    HomeComponent,
    EncabezadoComponent,
    FooterComponent,
    CuerpoComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    HomeRoutingModule,
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
