import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroduccionComponent } from './introduccion/introduccion.component';
import { HomeComponent } from './home/home.component';
import { VistaPujadorComponent } from './vista-pujador/vista-pujador.component';
import { VistaSubastadorComponent } from './vista-subastador/vista-subastador.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroduccionComponent,
    HomeComponent,
    VistaPujadorComponent,
    VistaSubastadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
