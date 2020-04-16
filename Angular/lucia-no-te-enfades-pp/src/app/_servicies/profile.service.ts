import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Router } from '@angular/router';

import { Player } from '../models/player.model';
import { Team } from '../models/team.model';
import { UserPlayerWrapper } from '../models/upwrapper.model';

const BASE_URL = '/api/player/';

@Injectable({ providedIn: 'root' })
export class ProfileService {

    constructor(private httpClient: HttpClient, public router:Router){}

    getPlayerByUserId(userId: number): Observable<Player> {
        return this.httpClient.get(BASE_URL + userId).pipe(
            catchError(error => this.handleError(error))
        )as Observable<Player>;
    }

   /* updatePlayerTeam(idPlayer: number, team: Team) {
        return this.httpClient.put(BASE_URL + idPlayer + "/team", team).pipe(
            catchError(error => this.handleError(error))
        )
    }*/

    private handleError(error: any) {
        console.error(error);
        if(error.status === 403 || error.status === 401 || error.status === 0){
            this.router.navigate(["/login"]);
        }
		return Observable.throw("Server error (" + error.status + "): " + error.text())
    }
    
    updateProfile(wrapper:UserPlayerWrapper): Observable<UserPlayerWrapper>{
        console.log(JSON.stringify(wrapper));
        return this.httpClient.put("/api/user/"+ wrapper.user.iduser, wrapper).pipe(
            catchError(error => this.handleError(error))
        )as Observable<UserPlayerWrapper>;
    }

}