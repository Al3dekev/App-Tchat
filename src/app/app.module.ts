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
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import { EcritureMessageComponent } from './Components/ecriture-message/ecriture-message.component';
import { CreateRoomComponent } from './Components/create-room/create-room.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ManageRoomComponent } from './Components/manage-room/manage-room.component';
import {AccountService} from './Services/account.service';
import {RoomService} from './Services/room.service';
import {MessageService} from './Services/message.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';
import { DeleteRoomComponent } from './Components/delete-room/delete-room.component';

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
    RoomCardListComponent,
    EcritureMessageComponent,
    CreateRoomComponent,
    ManageRoomComponent,
    DeleteRoomComponent
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
    MatTabsModule,
    MatListModule,
    MatDividerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatChipsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CheckJWTInterceptor,
      multi: true,
    },
    AuthService,
    LocalStorageService,
    AccountService,
    RoomService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
