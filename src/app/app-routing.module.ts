import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { DashBoardComponent } from './Component/dash-board/dash-board.component';
import { AuthGuard } from './Service/auth.guard';
import { RegistrationPageComponent } from './Component/registration-page/registration-page.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:"login",
    component:LoginComponent,
    pathMatch:"full"
  },

  {
    path:"signup",
    component:RegistrationPageComponent,
    pathMatch:"full"
  },

  {
    path:"dashboard",
    component:DashBoardComponent,
    pathMatch:"full",
    canActivate:[AuthGuard]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
