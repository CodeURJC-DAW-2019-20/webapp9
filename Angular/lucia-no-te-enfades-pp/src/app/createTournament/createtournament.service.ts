import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Tournament } from '../models/tournament.model';

const BASE_URL = 'https://127.0.0.1:8443/api/';

@Injectable({ providedIn: 'root' })
export class CreatetournamentService {
    
    page: number;

    constructor(private httpClient: HttpClient){}

    addTournament(tournament: Tournament) {
        return this.httpClient.post(BASE_URL, tournament).pipe(
            catchError(error => this.handleError(error))
        );
    }

    private handleError(error: any) {
		console.error(error);
		return Observable.throw("Server error (" + error.status + "): " + error.text())
    }
}