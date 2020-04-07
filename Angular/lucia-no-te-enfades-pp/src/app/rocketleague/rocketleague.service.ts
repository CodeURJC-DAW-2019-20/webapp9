import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Tournament } from '../tournament/tournament.model';

const BASE_URL = '/api/tournaments';

@Injectable({ providedIn: 'root' })
export class RocketleagueService{
    constructor(private httpClient: HttpClient){}

    getTournaments(): Observable<Tournament[]> {
        return this.httpClient.get(BASE_URL).pipe(
            catchError(error => this.handleError(error))
        ) as Observable<Tournament[]>;
    }

    private handleError(error: any) {
		console.error(error);
		return Observable.throw("Server error (" + error.status + "): " + error.text())
	}
}