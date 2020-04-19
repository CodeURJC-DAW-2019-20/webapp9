import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RocketleagueComponent } from "./rocketleague/rocketleague.component";
import { CreatetournamentComponent } from './createTournament/createtournament.component';
import { TournamentComponent } from './tournament/tournament.component';
import { TeamComponent } from './team/team.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { ProfileComponent } from './profile/profile.component';
import { InfoComponent } from './info/info.component';
import { UpdateMatchComponent } from './updateMatch/updateMatch.component';
import { RegisterComponent } from './register/register.component';
import { UpdateProfileComponent } from './updateProfile/updateProfile.component';
import { UserAuthGuardService, AdminAuthGuardService } from './_servicies/adminauthguard.service';

const routes = [
  {path: '', component: HomeComponent },
  {path: 'tournaments', component: RocketleagueComponent ,canActivate: [UserAuthGuardService]},
  {path: 'loginA', component: LoginComponent },
  {path: 'createtournament', component: CreatetournamentComponent,canActivate: [AdminAuthGuardService]},
  {path: 'tournament/:idTournament', component: TournamentComponent,canActivate: [UserAuthGuardService]},
  {path: 'createTeam', component: TeamComponent, canActivate: [AdminAuthGuardService] },
  {path: 'leaderboard', component: LeaderboardComponent,canActivate: [UserAuthGuardService]},
  {path: 'profile/:id', component: ProfileComponent},
  {path: 'info', component: InfoComponent,canActivate: [UserAuthGuardService]},
  {path: 'updateMatch/:idTournament/:pos', component: UpdateMatchComponent, canActivate: [AdminAuthGuardService]},
  {path: 'register', component: RegisterComponent},
  {path: 'updateProfile', component: UpdateProfileComponent,canActivate: [UserAuthGuardService]}
];

export const routing = RouterModule.forRoot(routes);
// Aqui van las rutas de los componentes
// Más tarde, a la hora de poner links, los links cambian el componente activo
/*
@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
*/
