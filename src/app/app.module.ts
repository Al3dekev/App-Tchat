import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './Components/AppComponent/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './Components/login/login.component';
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
import {CheckJWTInterceptor} from './Interceptors/check-jwt.interceptor';
import { AuthComponent } from './Components/auth/auth.component';
import { MainComponent } from './Components/main/main.component';
import { NoDiscussComponent } from './Components/no-discuss/no-discuss.component';
import {MatTabsModule} from '@angular/material/tabs';
import { DisconnectComponent } from './Components/disconnect/disconnect.component';
import {AuthService} from './Services/auth.service';
import {LocalStorageService} from './Services/local-storage.service';
import { RoomCardListComponent } from './Components/room-card-list/room-card-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DiscussComponent,
    TchatSystemsComponent,
    BubbleComponent,
    UpperAppInfosComponent,
    AuthComponent,
    MainComponent,
    NoDiscussComponent,
    DisconnectComponent,
    RoomCardListComponent
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
    MatIconModule,
    MatTabsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CheckJWTInterceptor,
      multi: true,
    },
    AuthService,
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
