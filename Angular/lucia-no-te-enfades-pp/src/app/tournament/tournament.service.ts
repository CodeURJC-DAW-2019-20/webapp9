import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Play } from './play.model';
import { Tournament } from './tournament.model';

const BASE_URL = '/api/tournaments/';

@Injectable({ providedIn: 'root' })
export class TournamentService{
    constructor(private httpClient: HttpClient){}

    getPlays(id: number): Observable<Play[]> {
        return this.httpClient.get(BASE_URL + id + '/matches').pipe(
            catchError(error => this.handleError(error))
        ) as Observable<Play[]>;
    }

    private handleError(error: any) {
		console.error(error);
		return Observable.throw("Server error (" + error.status + "): " + error.text())
	}
}