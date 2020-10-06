import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './Components/AppComponent/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './Components/login/login.component';
import { LogoComponent } from './Components/logo/logo.component';
import { InfosComponent } from './Components/infos/infos.component';
import {MatButtonModule} from '@angular/material/button';
import { RegisterComponent } from './Components/register/register.component';
import { DiscussComponent } from './Components/discuss/discuss.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoComponent,
    InfosComponent,
    RegisterComponent,
    DiscussComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
