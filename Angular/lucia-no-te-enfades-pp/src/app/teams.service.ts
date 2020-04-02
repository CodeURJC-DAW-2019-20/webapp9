import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Team } from './team.model';

const BASE_URL = 'https://127.0.0.1:8443/api/teams/';
const LEADERBOARD_URL = 'https://127.0.0.1:8443/api/leaderBoardLoaded/';

@Injectable({ providedIn: 'root' })
export class TeamsService {

    constructor(private httpClient: HttpClient){}

    getLeaderBoard(): Observable<Team[]>{
        return this.httpClient.get(LEADERBOARD_URL).pipe(
            catchError(error => this.handleError(error))
        ) as Observable<Team[]>;
    }

    getTeams(page: number): Observable<Team[]> {
        return this.httpClient.get(BASE_URL + "page=" + page).pipe(
            catchError(error => this.handleError(error))
        ) as Observable<Team[]>;
    }

    addTeam(team: Team) {
        return this.httpClient.post(BASE_URL, team).pipe(
            catchError(error => this.handleError(error))
        );
    }

    updateTeam(team: Team) {
        return this.httpClient.put(BASE_URL + team.idTeam, team).pipe(
            catchError(error => this.handleError(error))
        );
    }

    private handleError(error: any) {
		console.error(error);
		return Observable.throw("Server error (" + error.status + "): " + error.text())
	}

}