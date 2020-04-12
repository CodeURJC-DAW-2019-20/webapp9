import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { Team } from '../models/team.model';

const BASE_URL = '/api/teams/';
const LEADERBOARD_URL = '/api/leaderBoardLoaded/';

@Injectable({ providedIn: 'root' })
export class TeamsService {

    constructor(private httpClient: HttpClient){}

    getLeaderBoard(): Observable<Team[]>{
        return this.httpClient.get<Team[]>(LEADERBOARD_URL).pipe(
            catchError(error => this.handleError(error))
        ) as Observable<Team[]>;
    }

    getTeams(page: number): Observable<Team[]> {
        return this.httpClient.get<Team[]>(BASE_URL + "page=" + page).pipe(
            catchError(error => this.handleError(error))
        ) as Observable<Team[]>;
    }

    getTeambyName (name: string): Observable<Team>{
        return this.httpClient.get<Team[]>(BASE_URL + name).pipe(
            catchError(error => this.handleError(error))
        ) as Observable<Team>;
    }

    addTeam(team: Team): Observable<Team>{
        return this.httpClient.post<Team>(BASE_URL, team).pipe(
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
		return throwError("Server error (" + error.status + "): " + error.text);
	}

}