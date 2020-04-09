import { Component } from '@angular/core';

import { TournamentService } from '../_servicies/tournament.service';

import { Tournament } from '../models/tournament.model';

@Component({
    selector: 'createtournament',
    templateUrl:'./createtournament.component.html'
})

export class CreatetournamentComponent{
    tournament: Tournament;

    constructor(private tournamentService: TournamentService){}
   
    save(){
        this.tournamentService.addTournament(this.tournament).subscribe(
            _ => {},
            error => console.error('Error creating new tournament: ' + error)
        );
    }
}