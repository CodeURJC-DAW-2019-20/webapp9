import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Player } from '../models/player.model';
import { Team } from '../models/team.model';

const BASE_URL = '/api/player/';

@Injectable({ providedIn: 'root' })
export class PlayersService {

    constructor(private httpClient: HttpClient){}

    getPlayerByUserId(userId: number): Observable<Player> {
        return this.httpClient.get(BASE_URL + userId).pipe(
            catchError(error => this.handleError(error))
        )as Observable<Player>;
    }

    updatePlayerTeam(idPlayer: number, team: Team) {
        return this.httpClient.put(BASE_URL + idPlayer + "/team", team).pipe(
            catchError(error => this.handleError(error))
        )
    }

    private handleError(error: any) {
		console.error(error);
		return Observable.throw("Server error (" + error.status + "): " + error.text())
	}

}