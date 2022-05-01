import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './custom-components/pagina-inicial/pagina-inicial.component';
import { LoginComponent } from './custom-components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
