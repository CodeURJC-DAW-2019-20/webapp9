import { Component } from '@angular/core';

import { Play } from '../models/play.model';
import { MatchService } from '../_servicies/match.service';
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
    constructor(private matchservice: MatchService, private tournamentservice:TournamentService, private router: Router,
        activatedRoute: ActivatedRoute){
        this.idTournament = activatedRoute.snapshot.params['idTournament'];
        this.idPlay = activatedRoute.snapshot.params['pos'];
    };
    ngOnInit(){
        this.tournamentservice.getPlays(this.idTournament).subscribe(
            response => {
                let data: any = response;
                this.play = data[this.idPlay];
            },
            error => console.error('Error finding plays' + error)
         );
    }
    updateGame(){
        /*this.matchservice.updateMatch(this.idTournament,this.idPlay,).subscribe(
            _ => {
                window.history.back();
            },
            error => console.error('Error updating match: ' + error)
        );*/
    }
}