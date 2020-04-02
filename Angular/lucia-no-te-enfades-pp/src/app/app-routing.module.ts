import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RocketleagueComponent } from "./rocketleague/rocketleague.component";
import { CreatetournamentComponent } from './createTournament/createtournament.component';
import { TournamentComponent } from './tournament/tournament.component';

const routes: Routes = [
  {path: 'index', component: HomeComponent },
  {path: 'tournaments', component: RocketleagueComponent },
  {path: 'login', component: LoginComponent },
  {path: 'createtournament', component: CreatetournamentComponent},
  {path: 'tournament', component: TournamentComponent}
  
];

export const routing = RouterModule.forRoot(routes);
// Aqui van las rutas de los componentes
// Más tarde, a la hora de poner links, los links cambian el componente activo

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
