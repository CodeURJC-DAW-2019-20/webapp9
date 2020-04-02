import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { UserService } from './_servicies/user.service';

import { RocketleagueComponent } from './rocketleague/rocketleague.component';

import { AppRoutingModule, routing } from './app-routing.module';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { HomeComponent } from './home/home.component';
import { CreatetournamentComponent } from './createTournament/createtournament.component';
import { TournamentComponent } from './tournament/tournament.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RocketleagueComponent,
    CreatetournamentComponent,
    TournamentComponent   
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
