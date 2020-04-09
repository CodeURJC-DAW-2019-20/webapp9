import { Component } from '@angular/core';

import { Play } from '../models/play.model';

import { TournamentService } from '../login/tournament.service';
import { Tournament } from '../models/tournament.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'tournament',
    templateUrl:'./tournament.component.html'
})

export class TournamentComponent{
    play: Play;
    tournament: Tournament;
    idTournament:number;
    plays = new Array<Play>();

    constructor(private tournamentService: TournamentService, private router:Router, activatedRoute: ActivatedRoute){
        this.idTournament=activatedRoute.snapshot.params['idTournament'];
    }

    ngOnInit(){
        this.tournamentService.getPlays(this.idTournament).subscribe(
           play => {
               let data: any = play;
               for(var i = 0; i < data.length; i++){
                    data[i].pos = i + 1;
                    this.plays.push(data[i]);
               }
           },
           error => console.error('Error finding plays' + error)
        );
    }
}