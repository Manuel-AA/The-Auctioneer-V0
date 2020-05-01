import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './inside/encabezado/encabezado.component';
import { FooterComponent } from './footer/footer.component';
import { SubirProductoComponent } from './inside/subir_producto/subir_producto.component';
import { VerProductoComponent } from './inside/ver_producto/ver_producto.component';
import { HomeComponent } from './inside/home/home.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { RegistroComponent } from './presentacion/registro/registro.component';
import { InicioSesionComponent } from './presentacion/inicio-sesion/inicio-sesion.component';
import { EncabezadoPrincipalComponent } from './presentacion/encabezado-principal/encabezado-principal.component';
import { FooterPrincipalComponent } from './presentacion/footer-principal/footer-principal.component';
import { ConocerComponent } from './inside/conocer/conocer.component';
import { PerfilComponent } from './inside/perfil/perfil.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { FirestoreService } from './services/firestore.service';
import { FormsModule } from '@angular/forms';
import { FiltroPipe } from './filtro/filtro.pipe';
import { MispujasComponent } from './inside/mispujas/mispujas.component';

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
    ConocerComponent,
    PerfilComponent,
    FiltroPipe,
    MispujasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [FirestoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
