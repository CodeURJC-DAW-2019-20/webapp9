import { Component } from '@angular/core';

import { TournamentService } from '../_servicies/tournament.service';

import { Tournament } from '../models/tournament.model';

@Component({
    selector: 'createtournament',
    templateUrl:'./createtournament.component.html',
    styleUrls: ['./teamCreation.component.css', './style.component.css']
})

export class CreatetournamentComponent{
    tournament = new Tournament;

    constructor(private tournamentService: TournamentService){}
   
    save(){
        this.tournamentService.addTournament(this.tournament).subscribe(
            _ => {
                window.history.back();
            },
            error => console.error('Error creating new tournament: ' + error)
        );
        
    }
}