import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarraNavComponent } from './barra-nav/barra-nav.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'barra-nav', component: BarraNavComponent, pathMatch: 'full'},
  { path: 'login', component: LoginComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
