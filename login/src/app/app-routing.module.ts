import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginmainpageComponent} from './loginmainpage/loginmainpage.component'
import { RegistrationpageComponent } from './registrationpage/registrationpage.component';
import { ApplicationComponent } from './application/application.component';
const routes: Routes = [

  {  path:'', component:RegistrationpageComponent},
  {  path:'login', component:LoginmainpageComponent},
  {  path:'welcome', component:ApplicationComponent},
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
