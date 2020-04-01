import { Component } from '@angular/core';

import { Play } from './play.model';

import { TournamentService } from './tournament.service';

@Component({
    selector: 'tournament',
    templateUrl:'./tournament.component.html'
})

export class TournamentComponent{
    play: Play;

    constructor(private tournamentService: TournamentService){}

    playsOnHtml(){
        this.tournamentService.getPlays().subscribe(
           play => {
               let plays: any = play;
           },
           error => console.error('Error finding plays' + error)
        );
    }
}