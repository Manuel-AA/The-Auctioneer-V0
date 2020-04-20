import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
import { BarraNavComponent } from './barra-nav/barra-nav.component';
=======
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { FooterComponent } from './footer/footer.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { InicioComponent } from './inicio/inicio.component';
>>>>>>> master

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LoginComponent,
    BarraNavComponent
=======
    EncabezadoComponent,
    FooterComponent,
    CuerpoComponent,
    InicioComponent
>>>>>>> master
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
