import { Component } from '@angular/core';

import { Play } from '../models/play.model';
import { MatchService } from '../_servicies/match.service';
import { TournamentService } from '../_servicies/tournament.service';

@Component({
    selector: 'updateMatch',
    templateUrl:'./updateMatch.component.html',
})

export class UpdateMatchComponent{

    constructor(private matchservice: MatchService, private tournamentservice:TournamentService){};

    updateGame(){
        
    }
}