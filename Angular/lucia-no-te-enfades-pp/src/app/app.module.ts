import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsersService } from './_servicies/users.service';
import { RocketleagueComponent } from './rocketleague/rocketleague.component';
import { TeamComponent } from './team/team.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { routing } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { CreatetournamentComponent } from './createTournament/createtournament.component';
import { TournamentComponent } from './tournament/tournament.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UpdateMatchComponent } from './updateMatch/updateMatch.component';
import { AuthInterceptor } from './_servicies/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RocketleagueComponent,
    CreatetournamentComponent,
    TournamentComponent,
    TeamComponent,
    LeaderboardComponent,
    UpdateMatchComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [
    UsersService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {


 }
