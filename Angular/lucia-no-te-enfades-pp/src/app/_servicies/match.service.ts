import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';

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
    resultArray:Array<resultBody>;

    constructor(private tournamentservice:TournamentService, private teamsservice:TeamsService, private httpClient: HttpClient, public router:Router){}

    getGames(idTournament: number):Observable<Game[]> {
        return this.httpClient.get(GAME_URL + idTournament + '/games').pipe(
            catchError(error => this.handleError(error))
        )as Observable <Game[]>
    }

    updateMatch(idTournament,idPlay:number,resultArray:Array<resultBody>){
        this.getGames(idTournament).subscribe(
            response => {
                let data: any = response;
                this.games=response;
            },
            error => console.error('Error finding plays' + error)
         );
         this.putGame(this.games[idPlay-1], idTournament, idPlay, resultArray).subscribe(
            _ => {
                window.history.back();
            },
            error => console.error('Error updating match: ' + error)
         );
    }

    private putGame(game: Game, idTournament: number, idPlay: number, resultArray:Array<resultBody>){
        this.tournamentservice.getPlays(idTournament).subscribe(
            response => {
                let data: any = response;
                this.play = data[idPlay-1];
            },
            error => console.error('Error finding plays' + error)
         );

            this.teamsservice.getTeambyName(this.play.name1).subscribe(
                response => {
                    let data: any = response;
                    this.team = data;
                },
                error => console.error('Error finding team'+ error)
            );
            this.id[0]=this.team.idTeam;

            this.teamsservice.getTeambyName(this.play.name2).subscribe(
                response => {
                    let data: any = response;
                    this.team = data;
                },
                error => console.error('Error finding team'+ error)
            );
            this.id[1]=this.team.idTeam;

        if (this.play.winner==this.play.name1){
            resultArray[0].winner=true;
            resultArray[1].winner=false;
        }
        else{
            resultArray[0].winner=false;
            resultArray[1].winner=true; 
        }

        const body = JSON.stringify(resultArray)
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });

        return this.httpClient.put(BASE_URL + this.id[0] + this.id[1] + game.idGame, body, { headers }).pipe(
            catchError(error => this.handleError(error))
        )
    }

    private handleError(error: any) {
        console.error(error);
        if(error.status === 403 || error.status === 401 || error.status === 0){
            this.router.navigate(["/login"]);
        }
		return Observable.throw("Server error (" + error.status + "): " + error.text())
	}

}

export class resultBody{
    result:number;
    winner:boolean;
}