import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CuerpoComponent } from './inside/cuerpo/cuerpo.component';
import { InicioComponent } from './inside/inicio/inicio.component';
import { HomeComponent } from './inside/home/home.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { RegistroComponent } from './registro/registro.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { InsideComponent } from './inside/inside.component';

const routes: Routes = [
  { path: 'cuerpo', component: CuerpoComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'home', component: HomeComponent },
  { path: 'presentacion', component: PresentacionComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'InicioSesion', component: InicioSesionComponent },
  { path: 'inside', component: InsideComponent },
  {path:'', component: InicioComponent,pathMatch:'full'},
  {path:'**',redirectTo:'/',pathMatch:'full'} /*redirigir a una pagina error 404 (crear otro componente)*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
