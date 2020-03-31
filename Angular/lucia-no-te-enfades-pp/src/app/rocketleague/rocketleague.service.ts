import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Tournament } from '../tournament/tournament.model';

const BASE_URL = 'https://127.0.0.1:8443/api/';

@Injectable({ providedIn: 'root' })
export class RocketleagueService{
    constructor(private httpClient: HttpClient){}

    getTournaments(): Observable<Tournament[]> {
        return this.httpClient.get(BASE_URL + './rocketleague.component.html').pipe(
            catchError(error => this.handleError(error))
        ) as Observable<Tournament[]>;
    }

    private handleError(error: any) {
		console.error(error);
		return Observable.throw("Server error (" + error.status + "): " + error.text())
	}
}