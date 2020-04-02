import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Play } from './play.model';
import { Tournament } from './tournament.model';

const BASE_URL = 'https://127.0.0.1:8443/api/tournament/';

@Injectable({ providedIn: 'root' })
export class TournamentService{
    constructor(private httpClient: HttpClient){}

    getPlays(): Observable<Play[]> {
        return this.httpClient.get(BASE_URL + name).pipe(
            catchError(error => this.handleError(error))
        ) as Observable<Play[]>;
    }

    private handleError(error: any) {
		console.error(error);
		return Observable.throw("Server error (" + error.status + "): " + error.text())
	}
}