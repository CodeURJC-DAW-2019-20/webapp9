import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Router } from '@angular/router';

import { Tournament } from '../models/tournament.model';

const BASE_URL = '/api/tournaments';

@Injectable({ providedIn: 'root' })
export class RocketleagueService{
    constructor(private httpClient: HttpClient, public router:Router){}

    getTournaments(): Observable<Tournament[]> {
        return this.httpClient.get(BASE_URL).pipe(
            catchError(error => this.handleError(error))
        ) as Observable<Tournament[]>;
    }

    private handleError(error: any) {
        console.error(error);
        if(error.status === 403 || error.status === 401 || error.status === 0){
            this.router.navigate(["/login"]);
        }
		return Observable.throw("Server error (" + error.status + "): " + error.text())
	}
}