import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './Components/AppComponent/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './Components/login/login.component';
import { LogoComponent } from './Components/logo/logo.component';
import { InfosComponent } from './Components/infos/infos.component';
import {MatButtonModule} from '@angular/material/button';
import { RegisterComponent } from './Components/register/register.component';
import { DiscussComponent } from './Components/discuss/discuss.component';
import {MatInputModule} from '@angular/material/input';
import { TchatSystemsComponent } from './Components/tchat-systems/tchat-systems.component';
import { BubbleComponent } from './Components/bubble/bubble.component';
import {CommonModule} from '@angular/common';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatIconModule} from '@angular/material/icon';
import { UpperAppInfosComponent } from './Components/upper-app-infos/upper-app-infos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoComponent,
    InfosComponent,
    RegisterComponent,
    DiscussComponent,
    TchatSystemsComponent,
    BubbleComponent,
    UpperAppInfosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    CommonModule,
    ScrollingModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
