import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubirProductoComponent } from './inside/subir_producto/subir_producto.component';
import { VerProductoComponent } from './inside/ver_producto/ver_producto.component';
import { HomeComponent } from './inside/home/home.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { RegistroComponent } from './presentacion/registro/registro.component';
import { InicioSesionComponent } from './presentacion/inicio-sesion/inicio-sesion.component';
import { ConocerComponent } from './inside/conocer/conocer.component';
import { PerfilComponent } from './inside/perfil/perfil.component';
import { MispujasComponent } from './inside/mispujas/mispujas.component';

const routes: Routes = [
  { path: 'subida', component: SubirProductoComponent },
  { path: 'ver/:id', component: VerProductoComponent },
  { path: 'home', component: HomeComponent },
  { path: 'mispujas/:id', component: MispujasComponent},
  { path: 'presentacion', component: PresentacionComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'inicio-sesion', component: InicioSesionComponent },
  { path: 'conocenos', component: ConocerComponent},
  { path: 'perfil/:id', component: PerfilComponent},
  { path: '', component: PresentacionComponent,pathMatch:'full'},
  { path:'**',redirectTo:'/',pathMatch:'full'} /*redirigir a una pagina error 404 (crear otro componente)*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
