import { AuthorizedSecurity } from './secutiry/authorized-security';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './custom-components/login/login.component';
import { PaginaInicialComponent } from './custom-components/pagina-inicial/pagina-inicial.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home', 
    component: PaginaInicialComponent,
    canActivate: [AuthorizedSecurity]
  },
  {
    path: 'login', 
    component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
