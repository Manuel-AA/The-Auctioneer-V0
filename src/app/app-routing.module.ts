import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubirProductoComponent } from './inside/subir_producto/subir_producto.component';
import { VerProductoComponent } from './inside/ver_producto/ver_producto.component';
import { HomeComponent } from './inside/home/home.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { RegistroComponent } from './registro/registro.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { ConocerComponent } from './inside/conocer/conocer.component';


const routes: Routes = [
  { path: 'subida', component: SubirProductoComponent },
  { path: 'ver', component: VerProductoComponent },
  { path: 'home', component: HomeComponent },
  { path: 'presentacion', component: PresentacionComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'InicioSesion', component: InicioSesionComponent },
  { path: 'conocer', component: ConocerComponent },
  {path:'', component: PresentacionComponent,pathMatch:'full'},
  {path:'**',redirectTo:'/',pathMatch:'full'} /*redirigir a una pagina error 404 (crear otro componente)*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
