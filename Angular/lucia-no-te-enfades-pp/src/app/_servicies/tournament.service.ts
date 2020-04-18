import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router, NavigationExtras } from '@angular/router';

import { Play } from '../models/play.model';
import { Team } from '../models/team.model';
import { Tournament } from '../models/tournament.model';

const BASE_URL = '/api/tournaments';
const MAP_URL = '/api/loadCoordenates';

@Injectable({ providedIn: 'root' })
export class TournamentService{
    constructor(private httpClient: HttpClient, public router:Router){}

    getPlays(id: number): Observable<Play[]> {
        return this.httpClient.get(BASE_URL + '/' + id + '/matches').pipe(
            catchError(error => this.handleError(error))
        ) as Observable<Play[]>;
    }

    getTournamentById(id: number):Observable<Tournament> {
        return this.httpClient.get(BASE_URL + '/' + + id).pipe(
            catchError(error => this.handleError(error))
        )as Observable <Tournament>
    }
    
    addTournament(tournament: Tournament): Observable<Tournament>{
        
        const body = JSON.stringify(tournament);
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        
        return this.httpClient.post<Tournament>(BASE_URL, body, { headers }).pipe(
            catchError(error => this.handleError(error))
        );
    }

    joinTournament(idTournament: number, team: Team){
        
        const body = JSON.stringify(team);
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.httpClient.post<Team>(BASE_URL+ '/' + idTournament+ '/teams', body, { headers }).pipe(
            catchError(error => this.handleError(error))
        );
    }

    private handleError(error: any) {
        if(status='401'){
            this.router.navigate(["/login"]);
        }
		console.error(error);
		return Observable.throw("Server error (" + error.status + "): " + error.text())
	}
}