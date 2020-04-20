import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { BarraNavComponent } from './barra-nav/barra-nav.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'barra-nav', component: BarraNavComponent, pathMatch: 'full'},
  { path: 'login', component: LoginComponent, pathMatch: 'full'}
=======
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: 'cuerpo', component: CuerpoComponent },
  { path: 'inicio', component: InicioComponent },
  {path:'', component: InicioComponent,pathMatch:'full'},
  {path:'**',redirectTo:'/',pathMatch:'full'} /*redirigir a una pagina error 404 (crear otro componente)*/
>>>>>>> master
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
