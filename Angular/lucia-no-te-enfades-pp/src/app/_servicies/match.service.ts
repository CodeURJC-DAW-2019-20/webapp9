import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Play } from '../models/play.model';
import { Team } from '../models/team.model';
import { Game } from '../models/game.model';
import { TournamentService } from './tournament.service';
import { TeamsService } from './teams.service';
import { i18nMetaToDocStmt } from '@angular/compiler/src/render3/view/i18n/meta';

const BASE_URL = '/api/teamsOnGame/';
const GAME_URL = '/api/tournaments/';

@Injectable({ providedIn: 'root' })

export class MatchService{
    games = new Array<Game>();
    play = new Play;
    id:Array<number>;
    team:Team;
    resultArray:Array<any>;

    constructor(private tournamentservice:TournamentService, private teamsservice:TeamsService, private httpClient: HttpClient){}

    getGames(idTournament: number):Observable<Game[]> {
        return this.httpClient.get(GAME_URL + idTournament + '/games').pipe(
            catchError(error => this.handleError(error))
        )as Observable <Game[]>
    }

    /*updateMatch(idTournament,idPlay:number){
        this.getGames(idTournament).subscribe(
            response => {
                let data: any = response;
                this.games=response;
            },
            error => console.error('Error finding plays' + error)
         );
         this.putGame(this.games[idPlay], idTournament, idPlay);
    }

    private putGame(game: Game, idTournament: number, idPlay: number){
        this.tournamentservice.getPlays(idTournament).subscribe(
            response => {
                let data: any = response;
                this.play = data[idPlay];
            },
            error => console.error('Error finding plays' + error)
         );
        for (let i = 0; i < 2; i++){
            this.teamsservice.getTeambyName(this.play.name1).subscribe(
                response => {
                    let data: any = response;
                    this.team = data;
                },
                error => console.error('Error finding team'+ error)
            );
            this.id[i]=this.team.idTeam;
        }

        const body = JSON.stringify(resultArray)
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });

        return this.httpClient.put(BASE_URL + this.id[0] + this.id[1] + game.idGame, body, { headers }).pipe(
            catchError(error => this.handleError(error))
        )
    }*/

    private handleError(error: any) {
		console.error(error);
		return Observable.throw("Server error (" + error.status + "): " + error.text())
	}

}