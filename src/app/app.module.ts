import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CreateTimeSheetComponent } from './create-time-sheet/create-time-sheet.component';



@NgModule({
  declarations: [
    AppComponent,
   LoginPageComponent,
    RegistrationPageComponent,
    LandingPageComponent,
    CreateTimeSheetComponent,
   
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
