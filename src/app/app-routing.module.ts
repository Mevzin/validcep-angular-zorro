import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';
import { ValidateCepComponent } from './validate-cep/validate-cep.component';


const routes: Routes = [
  {
    path:'home', component:HomeComponent
  },
  {
    path:'validated', component:ValidateCepComponent
  },
  {
    path: '', redirectTo: '/home', pathMatch:'full'
  },
  {
    path: '**', component: Error404Component
  }
];

@NgModule({
   exports: [RouterModule],
   imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
