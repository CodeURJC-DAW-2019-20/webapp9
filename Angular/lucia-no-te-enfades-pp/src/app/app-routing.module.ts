import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RocketleagueComponent } from "./rocketleague/rocketleague.component";
import { CreatetournamentComponent } from './createTournament/createtournament.component';
import { TournamentComponent } from './tournament/tournament.component';
import { TeamComponent } from './team.component';
import { LeaderboardComponent } from './leaderboard.component';

const routes = [
  {path: 'index', component: HomeComponent },
  {path: 'tournaments', component: RocketleagueComponent },
  {path: 'login', component: LoginComponent },
  {path: 'createtournament', component: CreatetournamentComponent},
  {path: 'tournament/:idTournament', component: TournamentComponent},
  {path: 'createTeam', component: TeamComponent},
  {path: 'leaderboard', component: LeaderboardComponent}
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
