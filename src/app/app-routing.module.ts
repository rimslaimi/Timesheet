import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { CreateTimeSheetComponent } from './create-time-sheet/create-time-sheet.component';

const routes: Routes = [
  { path:'landing-page',component:LandingPageComponent},
  { path:'login-page',component:LoginPageComponent},
   { path: 'registration-page', component: RegistrationPageComponent },
   { path: 'create-time-sheet', component: CreateTimeSheetComponent },
  { path: '', redirectTo: '/landing-page', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
