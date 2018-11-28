import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutUsComponent } from './about-us/about-us.component';
import { AuthComponent } from './auth/auth.component';

import { ProductsComponent } from './products/products.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormBuilder } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,

    AboutUsComponent,
    AuthComponent,

    ProductsComponent,

    NavbarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
