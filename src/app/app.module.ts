

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './custom-components/pagina-inicial/pagina-inicial.component';
import { LoginComponent } from './custom-components/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MatCardModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
