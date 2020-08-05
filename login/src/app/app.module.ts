import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{FormsModule, ReactiveFormsModule} from '@angular/forms'
import { RouterModule } from '@angular/router';
import { LoginmainpageComponent } from './loginmainpage/loginmainpage.component';
import {NgserviceServiceService} from './ngservice-service.service';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationpageComponent } from './registrationpage/registrationpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplicationComponent } from './application/application.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginmainpageComponent,
    RegistrationpageComponent,
    ApplicationComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    
  ],
  

  providers: [NgserviceServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
