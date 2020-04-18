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

    updateMatch(games:Array<Game>,idPlay:number,id:Array<number>,resultArray:Array<resultBody>){
             
         this.putGame(games[idPlay-1],id[0],id[1],resultArray).subscribe(
            _ => {
                window.history.back();
            },
            error => console.error('Error updating match: ' + error)
         );
    }
    private putGame(game: Game, id1: number, id2: number, resultArray:Array<resultBody>){
        const body = JSON.stringify(resultArray);
        const headers = new HttpHeaders({'Content-Type': 'application/json',}); 
            return this.httpClient.put(BASE_URL + id1 +"+" + id2 +"+"+ game.id_game, body, { headers }).pipe(
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