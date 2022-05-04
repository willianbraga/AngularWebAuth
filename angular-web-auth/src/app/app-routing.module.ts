import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './custom-components/login/login.component';
import { PaginaInicialComponent } from './custom-components/pagina-inicial/pagina-inicial.component';

const routes: Routes = [
  { path: "login", component: LoginComponent, },
  {
    path: "", component: PaginaInicialComponent, children: [
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
