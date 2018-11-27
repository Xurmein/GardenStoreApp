import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthComponent } from './auth/auth.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'login', component: AuthComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
