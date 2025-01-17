import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{path:'',component:LoginComponent},{path:'login',component:LoginComponent},{path:'signup',component:SignupComponent},{path:'admin',component:AdminComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
export const routingComponenets=[LoginComponent,SignupComponent]