import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './Components/login/login.component';
import {RegisterComponent} from './Components/register/register.component';
import {DiscussComponent} from './Components/discuss/discuss.component';
import {AuthGuard} from './Guards/auth.guard';
import {AuthComponent} from './Components/auth/auth.component';
import {MainComponent} from './Components/main/main.component';
import {NoDiscussComponent} from './Components/no-discuss/no-discuss.component';
import {AutoConnectGuard} from './Guards/auto-connect.guard';

const routes: Routes = [
  {
    path: 'auth', component: AuthComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      { path: '**', redirectTo: 'login' }
    ],
    canActivate: [AutoConnectGuard]
  },
  {
    path: 'main', component: MainComponent,
    children: [
      {path: 'discuss', component: DiscussComponent},
      {path: 'register', component: RegisterComponent},
      { path: '**', redirectTo: '' }
    ],
    canActivate: [AuthGuard]
  },


  // otherwise redirect to 'auth/login'
  { path: '**', redirectTo: 'auth/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
