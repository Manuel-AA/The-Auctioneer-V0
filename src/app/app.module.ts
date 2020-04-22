import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './inside/encabezado/encabezado.component';
import { FooterComponent } from './inside/footer/footer.component';
import { SubirProductoComponent } from './inside/subir_producto/subir_producto.component';
import { VerProductoComponent } from './inside/ver_producto/ver_producto.component';
import { HomeComponent } from './inside/home/home.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { RegistroComponent } from './presentacion/registro/registro.component';
import { InicioSesionComponent } from './presentacion/inicio-sesion/inicio-sesion.component';
import { EncabezadoPrincipalComponent } from './presentacion/encabezado-principal/encabezado-principal.component';
import { FooterPrincipalComponent } from './presentacion/footer-principal/footer-principal.component';
import { CuerpoComponent } from './presentacion/cuerpo/cuerpo.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    FooterComponent,
    SubirProductoComponent,
    VerProductoComponent,
    HomeComponent,
    PresentacionComponent,
    RegistroComponent,
    InicioSesionComponent,
    EncabezadoPrincipalComponent,
    FooterPrincipalComponent,
    CuerpoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
