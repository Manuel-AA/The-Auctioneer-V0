import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { InicioComponent } from './inicio/inicio.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: 'cuerpo', component: CuerpoComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'encabezado', component: EncabezadoComponent},
  { path: 'footer', component: FooterComponent},
  { path:'', component: InicioComponent,pathMatch:'full'},
  { path:'**',redirectTo:'/',pathMatch:'full'} /*redirigir a una pagina error 404 (crear otro componente)*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

/********************************************************************************************/
/*Esto es el mismo archivo "app-routing.module.ts" que hay en lo principal y no se si valdrá*/
/********************************************************************************************/