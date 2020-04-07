import { Component } from '@angular/core';

import { Play } from './play.model';

import { TournamentService } from './tournament.service';
import { Tournament } from './tournament.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'tournament',
    templateUrl:'./tournament.component.html'
})

export class TournamentComponent{
    play: Play;
    tournament: Tournament;
    idTournament:number;

    constructor(private tournamentService: TournamentService, private router:Router, activatedRoute: ActivatedRoute){
        let idTournament=activatedRoute.snapshot.params['idTournament'];
    }


    playsOnHtml(){
        this.tournamentService.getPlays(this.tournament.idTournament).subscribe(
           play => {
               let plays: any = play;
           },
           error => console.error('Error finding plays' + error)
        );
    }
}