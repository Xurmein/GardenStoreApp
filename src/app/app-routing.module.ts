import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthComponent } from './auth/auth.component';
import { ProductsComponent } from './products/products.component'

const routes: Routes = [
  {path : '', component: AuthComponent},
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'login', component: AuthComponent },
  { path: 'products', component: ProductsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
