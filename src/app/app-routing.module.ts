import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './Components/login/login.component';
import {RegisterComponent} from './Components/register/register.component';
import {DiscussComponent} from './Components/discuss/discuss.component';
import {AuthenticationService} from './Services/authentication.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'discuss', component: DiscussComponent, canActivate: [AuthenticationService] },

  // otherwise redirect to home
  { path: '**',
    redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
