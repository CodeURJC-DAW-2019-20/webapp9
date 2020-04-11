import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Play } from '../models/play.model';
import { Team } from '../models/team.model';
import { TournamentService } from './tournament.service';

const BASE_URL = '/api/teamsOnGame/';

@Injectable({ providedIn: 'root' })

export class MatchService{
    constructor(private tournamentservice:TournamentService){}
    updateMatch(idTournament,idPlay:number){
        this.tournamentservice.getPlays(idTournament);
    }

}