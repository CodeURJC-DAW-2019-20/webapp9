import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { UserService } from './_servicies/user.service';

import { RocketleagueComponent } from './rocketleague/rocketleague.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],

  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot([
      {path: 'login', component:LoginComponent},
      {path:'index', component:AppComponent}
     // {path:"",redirectTo:"index",pathMatch:'full'}
    ])  
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
