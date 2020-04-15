import { Component } from '@angular/core';

import { Play } from '../models/play.model';
import { MatchService, resultBody } from '../_servicies/match.service';
import { TournamentService } from '../_servicies/tournament.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'updateMatch',
    templateUrl:'./updateMatch.component.html',
})

export class UpdateMatchComponent{
    idTournament:number;
    idPlay:number;
    play = new Play;
    resultArray:Array<resultBody>;

    constructor(private matchservice: MatchService, private tournamentservice:TournamentService, private router: Router,
        activatedRoute: ActivatedRoute){
        this.idTournament = activatedRoute.snapshot.params['idTournament'];
        this.idPlay = activatedRoute.snapshot.params['pos'];
    };

    ngOnInit(){
        this.tournamentservice.getPlays(this.idTournament).subscribe(
            response => {
                let data: any = response;
                this.play = data[this.idPlay-1];
            },
            error => console.error('Error finding plays' + error)
         );
    }
    updateGame(){
        this.matchservice.updateMatch(this.idTournament,this.idPlay,this.resultArray);
    }
}