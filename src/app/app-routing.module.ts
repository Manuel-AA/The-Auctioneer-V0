import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntroduccionComponent } from './introduccion/introduccion.component';
import { VistaPujadorComponent } from './vista-pujador/vista-pujador.component';
import { VistaSubastadorComponent } from './vista-subastador/vista-subastador.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'introduccion', component: IntroduccionComponent},
  { path: 'vista-pujador', component: VistaPujadorComponent},
  { path: 'vista-subastador', component: VistaSubastadorComponent},
  { path:'**',redirectTo:'/',pathMatch:'full'} /*redirigir a una pagina error 404 (crear otro componente)*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
