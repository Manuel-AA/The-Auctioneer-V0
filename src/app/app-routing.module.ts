import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: 'cuerpo', component: CuerpoComponent },
  { path: 'inicio', component: InicioComponent },
  {path:'', component: InicioComponent,pathMatch:'full'},
  {path:'**',redirectTo:'/',pathMatch:'full'} /*redirigir a una pagina error 404 (crear otro componente)*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
